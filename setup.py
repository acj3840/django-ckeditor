import os.path
from setuptools import setup, find_packages


def get_source_files():
    for dirname, _, files in os.walk('ckeditor/static/ckeditor/ckeditor/_source'):
        for filename in files:
            yield os.path.join('/'.join(dirname.split('/')[1:]), filename)

setup(
    name='django-ckeditor-updated-inline-fix',
    version='4.2.8',
    description='Django admin CKEditor integration. Includes admin inline fix',
    long_description=open('README.rst', 'r').read() + open('AUTHORS.rst', 'r').read() + open('CHANGELOG.rst', 'r').read(),
    author='Alex Jones',
    author_email='alex_jones@wgbh.org',
    url='https://github.com/acj3840/django-ckeditor',
    packages=find_packages(exclude=["*.demo"]),
    install_requires=[
        'Django',
    ],
    include_package_data=True,
    classifiers=[
        "Programming Language :: Python",
        "Programming Language :: Python :: 2.7",
        "Programming Language :: Python :: 3.3",
        "License :: OSI Approved :: BSD License",
        "Development Status :: 4 - Beta",
        "Operating System :: OS Independent",
        "Framework :: Django",
        "Intended Audience :: Developers",
        "Topic :: Internet :: WWW/HTTP :: Dynamic Content",
    ],
)
