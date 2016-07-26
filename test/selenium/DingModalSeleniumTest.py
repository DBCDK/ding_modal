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

    def test_foo(self):
        assert self.is_setup

    def test_bar(self):
        self.assert_(self.base_url == selenium_helpers.NetpunktHelpers().base_url())



###
### Python unittest template.
###
import unittest
class ExampleUnitTest(unittest.TestCase):
    def test_a(self):
        self.assert_(1 == 1)

###
### See also:
### http://nose.readthedocs.io/en/latest/testing.html
###