#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys
from dotenv import load_dotenv
from backend.generate_env import generate_env

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
        
    generate_env(ENV_PATH)
    PORT = os.getenv("BACKEND_PORT")

    if not str(PORT) in sys.argv:
        sys.argv.append(f'{PORT}')
        
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()
