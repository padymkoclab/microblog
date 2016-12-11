
import pathlib


BASE_DIR = pathlib.Path(__file__).parent.parent.absolute()

STATIC_DIR = BASE_DIR / 'static'

STATIC_DIR_JS = STATIC_DIR / 'js'

STATIC_DIR_CSS = STATIC_DIR / 'css'

TEMPLATE_DIR = BASE_DIR / 'templates'

MEDIA_DIR = BASE_DIR / 'media'

TESTS_DIR = BASE_DIR / 'tests'

PROJECT_STARTED = '2016-12-11T11:02:44.452701'

URLS = dict(
    index_url='./{}'.format('index.py'),
    login_url='./{}'.format('login.py'),
    register_url='./{}'.format('register.py'),
    profile_url='./{}'.format('profile.py'),
    logout_url='./{}'.format('logout.py'),
)

DATABASE = BASE_DIR / 'db.sqlite'

CONTEXT = dict()
CONTEXT.update(URLS)
CONTEXT['STATIC_DIR'] = STATIC_DIR
CONTEXT['STATIC_DIR_JS'] = STATIC_DIR_JS
CONTEXT['STATIC_DIR_CSS'] = STATIC_DIR_CSS
CONTEXT['MEDIA_DIR'] = MEDIA_DIR
CONTEXT['USER'] = 'USER'
