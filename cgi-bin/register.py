#! /usr/bin/env python3.5

import cgi, cgitb
from string import Template

import _settings


form = cgi.FieldStorage()

username = form.getvalue('username', '')
password = form.getvalue('password', '')
display_name = form.getvalue('display_name', '')
email = form.getvalue('email', '')


context = _settings.CONTEXT.copy()
context['username_value'] = username
context['password_value'] = password
context['display_name_value'] = display_name
context['email_value'] = email


content = (_settings.TEMPLATE_DIR / 'register.html').read_text()
content = Template(content).substitute(context)


print('Content-Type:text/html;\r\n')

print(content)
