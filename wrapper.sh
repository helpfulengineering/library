#!/bin/bash
pl=$( yamale -s validation/okh-project-link.yaml alpha/okh --no-strict )
dh=$( yamale -s validation/okh-doc-home.yaml alpha/okh --no-strict )

python wrap.py "$pl" "$dh"