import requests

response = requests.get('http://apps.cptm.sp.gov.br:8080/AppMobileService/api/LinhasMetropolitanasAppv3?versao=4')  
print(response.content)