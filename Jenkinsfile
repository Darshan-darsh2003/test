pipeline {
    agent any

    stages {
        stage('GIT CHECKOUT') {
            steps {
               git branch: 'main', changelog: false, credentialsId: 'f3c3787a-003f-41d5-92dc-1adb251a041f', poll: false, url: 'https://github.com/Darshan-darsh2003/test.git'
            }
        }

        stage('INSTALL') {
            steps {
                tool name: 'node', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Build your React application
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                // Run tests (e.g., using Jest)
                sh 'npm test'
            }
        }
    }
}
