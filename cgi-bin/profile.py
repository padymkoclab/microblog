#! /usr/bin/env python3

import cgi
import html


form = cgi.FieldStorage()
q = form.getvalue('q')
q = html.escape(q)

print('Content-type:text/html;\n')
print('Made search by "{}"'.format(q))
