from django.contrib.auth import authenticate, login, logout
from django.core.exceptions import ObjectDoesNotExist
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie
from django.middleware.csrf import get_token
from django.contrib.auth import get_user_model

import json

@ensure_csrf_cookie
def set_csrf_token(request):
    """
    This view sets the CSRF cookie on the client side for GET requests.
    """
    return JsonResponse({"token": get_token(request)})


@ensure_csrf_cookie
def signup(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        email = data.get('email')
        if username and password and email:
            User = get_user_model()
            user = User.objects.create_user(username, email, password)
            user.save()
            return JsonResponse({'message': 'User created successfully'}, status=201)
        else:
            return JsonResponse({'error': 'Missing username, password or email'}, status=400)
    return JsonResponse({'error': 'Invalid request'}, status=400)

def login_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data['email']
        password = data['password']
        try:
            # Get the user with the provided email
            User = get_user_model()
            user_with_email = User.objects.get(email=email)
            user = authenticate(request, username=user_with_email.username, password=password)
        except ObjectDoesNotExist:
            user = None

        if user is not None:
            login(request, user)
            return JsonResponse({'message': 'Login successful', 'user': {'username': user.username, 'email': user.email}}, status=200)
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=400)
    return JsonResponse({'error': 'Invalid request'}, status=400)
def logout_view(request):
    logout(request)
    return JsonResponse({'message': 'Logout successful'}, status=200)
