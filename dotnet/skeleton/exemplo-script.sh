#!/bin/bash
# Script para executar o hello_world.py

# Verifica se o Python está instalado
if command -v python3 &>/dev/null; then
    python3 hello_world.py
else
    echo "Python não está instalado ou não foi encontrado no PATH."
fi
