import os
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

import sys
lib_path = os.path.abspath(os.path.join('..', '..', 'scripts'))
sys.path.append(lib_path)
import selenium_helpers

###
### Python Nosetest template.
###
class DingModalWebdriverTest(selenium_helpers.NetpunktBaseWebdriverTestCase):
# Start class name with 'test'
    # __init__(), setUp() & tearDown() is defined in selenium_helpers
        
    def test_title(self):
        self.browser.get(self.base_url)
        assert "Netpunkt" in self.browser.title


