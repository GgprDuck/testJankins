pipeline {
    agent any
    tools { nodejs "NodeJS 18" } // Replace with your NodeJS configuration name
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Run Application') {
            steps {
                sh 'npm start'
            }
        }
    }
}
