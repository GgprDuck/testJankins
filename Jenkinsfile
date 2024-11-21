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
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
        }
        stage('Build') {
            steps {
                echo 'Building the application...'
                sh 'npm run build'
            }
        }
        stage('Start Application') {
            steps {
                echo 'Starting the application...'
                sh 'npm start &'
            }
        }
    }
     post {
        always {
            echo 'Pipeline finished.'
        }
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed. Check logs for errors.'
        }
    }
}
