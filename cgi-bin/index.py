#! /usr/bin/env python3.5

from string import Template
import socket

import _settings

user_ip = socket.gethostbyname(socket.gethostname())


html_content = (_settings.TEMPLATE_DIR / 'index.html').read_text()
html_content = Template(html_content).substitute(_settings.URLS)

# print('Set-Cookie:UserIP={};'.format(user_ip))
print('Content-Type:text/html;\r\n')

print(html_content)
