"""
    this file was created for token-check
"""

import requests

user_data = {'username': 'diver', 'password': '9501'}

response = requests.post('http://127.0.0.1:8083/api-token-auth/',
                         data=user_data)

print(response.status_code)
# 200
print(response.json())
# {'token': '5a9f7f9b981d8bccf02604356fc94b054ed1cf01'}
