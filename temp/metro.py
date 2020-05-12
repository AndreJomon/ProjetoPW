import requests

response = requests.get('http://www.metro.sp.gov.br/app/trajeto/xt/estacoesTipoXML.asp')  
print(response.content)
