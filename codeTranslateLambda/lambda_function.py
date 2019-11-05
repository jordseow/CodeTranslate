import json
import traceback
import doctest

import re

import signal
import time

def lambda_handler(event, context):
    response = {}
    response["statusCode"]=302
    response["headers"]={'Location': 'http://dev-codetranslate797530.s3-website-eu-west-1.amazonaws.com/'}
    data = {}
    response["body"]=json.dumps(data)
    return response