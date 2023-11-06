pipeline {
    agent any

    environment {
       NETLIFY_AUTH_TOKEN = credentials('api-key')
       YOUR_NETLIFY_SITE_ID=credentials('YOUR_NETLIFY_SITE_ID')
       PATH="./node_modules/.bin/netlify"

    }

    stages {
        stage('GIT CHECKOUT') {
            steps {
               git branch: 'main', changelog: false, credentialsId: 'f3c3787a-003f-41d5-92dc-1adb251a041f', poll: false, url: 'https://github.com/Darshan-darsh2003/test.git'
            }
        }
         stage('Debug') {
            steps {
                        script {
            def command = 'echo $PATH'  
            def diagnostics = "-Dorg.jenkinsci.plugins.durabletask.BourneShellScript.LAUNCH_DIAGNOSTICS=true"
            sh "JENKINS_SERVER_COOKIE=$diagnostics $command"
        }
            }
                // sh 'which sh'   // Print the path to the shell
            }
        }

        stage('INSTALL') {
            steps {
                sh 'npm --version' // Verify npm version
                sh 'npm config list' // Check npm configuration
                sh 'npm install'
                println 'Installing dependencies...'
            }
        }

        stage('Login to Netlify') {
            steps {
                sh '$PATH login -t $NETLIFY_AUTH_TOKEN'
                println 'Logging in to Netlify...'
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
