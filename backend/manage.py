#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys
from dotenv import load_dotenv

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PARENT_DIR = os.path.dirname(BASE_DIR)

ENV_PATH = os.path.join(PARENT_DIR , ".env")
load_dotenv(ENV_PATH)


def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    
    PORT = os.getenv("BACKEND_PORT")
    with open("../frontend/.env", "+w") as env:
        env.write(f'REACT_APP_URL={os.getenv("APP_URL")}\nREACT_APP_BACKEND_PORT={PORT}\nREACT_APP_API_AUTHORIZATION={os.getenv("API_AUTHORIZATION")}\nREACT_APP_PORT={os.getenv("FRONTEND_PORT")}')
    if not str(PORT) in sys.argv:
        sys.argv.append(f'{PORT}')
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()
