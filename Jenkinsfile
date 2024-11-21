pipeline {
    agent any
    environment {
        NVM_DIR = "$HOME/.nvm"
        NODE_VERSION = "18"
    }
    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'source $NVM_DIR/nvm.sh && nvm use $NODE_VERSION && npm install'
            }
        }
    }
}
