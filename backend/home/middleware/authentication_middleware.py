from django.http import HttpResponse, JsonResponse

from django.urls import resolve, Resolver404

import base64

import json
 
class AuthenticationMiddleware(object):

    def __init__(self, get_response):

        self.get_response = get_response        

    def __call__(self, request):

        try:

            response = {}

            if 'Authorization' in request.headers:
                authList = request.headers['Authorization'].split(' ')
                if "Basic" in authList:
                    encoded_auth = authList[1]
                    decoded_auth = base64.b64decode(encoded_auth).decode("utf-8")
                    authorization_token = decoded_auth
                    user ,password  = decoded_auth.split(':')
            else:

                authorization_token = ''            
            print(authorization_token)
            current_url = resolve(request.path_info).url_name

            exclude_urls = ['home']
 
            if current_url in exclude_urls :

                return self.get_response(request)

            elif authorization_token!='':
 
                request.token = authorization_token

                if user=="admin" and password =="admin":

                    return self.get_response(request)

                else:

                    response = {'status':'error','error_code': 401, 'message': "Unauthorized Access , Invalid access token."}

                    return JsonResponse(response,status=401)

            else:                

                response = {'status':'error','error_code': 401, 'message': "Unauthorized Access, Authorization token is required"}

                return JsonResponse(response,status=401)

        except NameError as e:

            response = {'status':'error','error_code': 101, 'message': "error: {0} ".format(e)}

            return JsonResponse(response)

        except KeyError as e:

            response = {'status':'error','error_code': 102, 'message': "error: {0} is required".format(e)}

            return JsonResponse(response)
 
        except Resolver404 as e:

            response = {'status':'error','error_code': 404, 'message': "The requested url was not found on this server."}

            return JsonResponse(response,status=401)

        except Exception as e:            

            response = {'status':'error','error_code': 100, 'message': "Unauthorized Access , Invalid Authorization token."}

            return JsonResponse(response,status=401)