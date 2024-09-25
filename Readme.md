
# Git Tutorial
Este repositorio contiene un tutorial detallado sobre cómo utilizar Git para gestionar versiones de proyectos. Aprenderás a inicializar repositorios, hacer commits, crear ramas, y colaborar en proyectos.

## Tabla de Contenidos
1. [Introducción a Git](#introducción-a-git)
2. [Instalación de Git](#instalación-de-git)
3. [Comandos Básicos de Git](#comandos-básicos-de-git)
4. [Uso de Ramas](#uso-de-ramas)
5. [Colaboración con GitHub](#colaboración-con-github)
6. [Licencia](#licencia)
7. [Siguientes Pasos](#siguientes-pasos)

## Introducción a Git
Git es un sistema de control de versiones distribuido que permite a los desarrolladores rastrear cambios en su código y trabajar de manera colaborativa.

## Instalación de Git
Para instalar Git, sigue los pasos descritos en la [documentación oficial](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

1. **Linux**: `sudo apt-get install git`
2. **Windows**: Descarga el instalador de [Git para Windows](https://gitforwindows.org/) o `winget install --id Git.Git -e --source winget`(Requiere winget).
3. **macOS**: `brew install git` (requiere Homebrew).

## Comandos Básicos de Git

1. **Inicializar un repositorio**:
   ```bash
   git init
   ```
   Crea un nuevo repositorio de Git en el directorio actual.

2. **Añadir archivos al área de preparación**:
   ```bash
   git add .
   ```
   Añade todos los archivos modificados al área de preparación para el próximo commit.

3. **Hacer un commit**:
   ```bash
   git commit -m "Mensaje del commit"
   ```
   Guarda los cambios con un mensaje que describa lo que hiciste.

## Uso de Ramas
Git permite crear y gestionar múltiples ramas para facilitar el desarrollo de nuevas características o correcciones.

1. **Crear una nueva rama**:
   ```bash
   git checkout -b nueva-rama
   ```
   Este comando crea una nueva rama y te mueve a ella.

2. **Cambiar a una rama existente**:
   ```bash
   git checkout nombre-de-la-rama
   ```
   Cambia a la rama que especificas.

## Colaboración con GitHub

1. **Clonar un repositorio**:
   ```bash
   git clone https://github.com/tuusuario/nombre-del-repo.git
   ```

2. **Hacer un pull request** para colaborar en proyectos abiertos:
   Explica cómo los usuarios pueden enviar cambios y participar en colaboraciones.

3. **Fusionar ramas**:
   ```bash
   git merge nombre-de-la-rama
   ```
   Fusiona la rama especificada con la rama actual.

## Licencia
Este proyecto está licenciado bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para más detalles.

## Siguientes Pasos
- [Tutorial avanzado de Git](https://www.atlassian.com/git/tutorials)
- Cómo utilizar **Git Hooks** para automatizar tareas en tu repositorio.
