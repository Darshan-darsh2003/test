pipeline {
    agent any

    environment {
       NETLIFY_AUTH_TOKEN = credentials('api-key')
       YOUR_NETLIFY_SITE_ID=credentials('YOUR_NETLIFY_SITE_ID')
    }

    stages {
        stage('GIT CHECKOUT') {
            steps {
               git branch: 'main', changelog: false, credentialsId: 'f3c3787a-003f-41d5-92dc-1adb251a041f', poll: false, url: 'https://github.com/Darshan-darsh2003/test.git'
            }
        }

       stage('Install Netlify CLI') {
        steps {
            tool name: 'node', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
            sh 'npm install netlify-cli -g' 
            println 'Installing Netlify CLI locally...'
         }
        }

        stage('Login to Netlify') {
            steps {
                sh 'netlify login -t $NETLIFY_AUTH_TOKEN' // Use the environment variable
                println 'Logging in to Netlify...'
            }
        }

        stage('INSTALL') {
            steps {
                tool name: 'node', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
                sh 'npm install'
                println 'Installing dependencies...'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
                println 'Building Application...'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy to Netlify') {
            steps {
                sh 'netlify deploy --site $YOUR_NETLIFY_SITE_ID --auth $NETLIFY_AUTH_TOKEN --dir ./build'
                println 'Deploying to Netlify...'
            }
        }
    }
}
