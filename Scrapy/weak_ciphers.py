import ssl
from requests.adapters import HTTPAdapter
from requests.packages.urllib3.util.ssl_ import create_urllib3_context
import requests

# https://github.com/requests/requests/issues/3833
# https://github.com/requests/requests/issues/4046
CIPHERS = (
        'ECDH+AESGCM:DH+AESGCM:ECDH+AES256:DH+AES256:ECDH+AES128:DH+AES:'
        'ECDH+HIGH:DH+HIGH:ECDH+3DES:DH+3DES:RSA+AESGCM:RSA+AES:RSA+HIGH:'
        'RSA+3DES:ECDH+RC4:DH+RC4:RSA+RC4:!aNULL:!eNULL:!MD5'
    )
#CIPHERS=('ALL:!aNULL:!SSLv2:!LOW:!EXP:!MD5')
#CIPHERS = (
#        'ECDH+AESGCM:DH+AESGCM:ECDH+AES256:DH+AES256:ECDH+AES128:DH+AES:'
#        'ECDH+HIGH:DH+HIGH:ECDH+3DES:DH+3DES:RSA+AESGCM:RSA+AES:RSA+HIGH:'
#        'RSA+3DES:ECDH+RC4:DH+RC4:RSA+RC4:!aNULL:!eNULL:!EXP:-MD5:RSA+RC4+MD5'
#    )

context = create_urllib3_context(ciphers=CIPHERS,ssl_version=ssl.PROTOCOL_TLSv1)

class TLSAdapter(HTTPAdapter):
    def init_poolmanager(self, *args, **kwargs):
        kwargs['ssl_context'] = context
        return super(TLSAdapter, self).init_poolmanager(*args, **kwargs)
    def proxy_manager_for(self, *args, **kwargs):
        kwargs['ssl_context'] = self.create_ssl_context()
        return super(TLSAdapter, self).proxy_manager_for(*args, **kwargs)


#  session = requests.Session()
#  session.mount('https://', TLSAdapter())
#  session.get('https://www.jpxgyw.com')
