pipeline {
    agent {label 'slave-2'}
    // agent any
    tools {
        nodejs 'node'
    }

    environment {
       NETLIFY_AUTH_TOKEN = credentials('api-key')
       YOUR_NETLIFY_SITE_ID=credentials('YOUR_NETLIFY_SITE_ID')
       NETLIFY_PATH="./node_modules/.bin/netlify"
       NODE_OPTIONS = '--max-http-header-size=65536' // Set NODE_OPTIONS to adjust header size limit
    }

    stages {
        stage('GIT CHECKOUT') {
            steps {
            //    git branch: 'main', changelog: false, credentialsId: 'f3c3787a-003f-41d5-92dc-1adb251a041f', poll: false, url: 'https://github.com/Darshan-darsh2003/test.git'
               git branch: 'main', credentialsId: '6a0bb977-d5c4-451b-a53c-c8eaa39bccb6', url: 'https://github.com/Darshan-darsh2003/test.git'
            }
        }
  

        stage('INSTALL') {
            steps {
                sh 'npm --version' // Verify npm version
                sh 'npm config list' // Check npm configuration
                // sh 'npm cache clean --force' // Clear npm cache
                // sh 'rm -rf /home/ubuntu/jenkins-slave/workspace/Pipeline-new/node_modules/ast-types-flow' // Delete problematic directory
                // sh 'rm -rf /home/ubuntu/jenkins-slave/workspace/Pipeline-new/node_modules/compression' // Delete problematic directory
                // sh 'rm -rf /home/ubuntu/jenkins-slave/workspace/Pipeline-new/node_modules/babel-jest' // Delete problematic directory
                sh 'rm -rf /home/ubuntu/jenkins-slave/workspace/Pipeline-new/node_modules'
                // println 'after deleting node_modules'
                sh 'npm config list' // Check npm configuration
                sh 'ls /home/ubuntu/jenkins-slave/workspace'
                sh 'ls /home/ubuntu/jenkins-slave/workspace/Pipeline-new'
                sh 'npm install' // Run npm install
                println 'Installing dependencies...'
            }
        }

        // stage('INSTALL') {
        //     steps {
        //         sh 'npm --version' // Verify npm version
        //         sh 'npm config list' // Check npm configuration
        //         sh 'npm install'
        //         println 'Installing dependencies...'
        //     }
        // }

        stage('Debug') {
            steps {
                sh 'echo $NETLIFY_PATH'  
                sh 'which sh'   // Print the NETLIFY_path to the shell
            }
            
        }

        stage('Login to Netlify') {
         steps {
                println 'Before Logging in to Netlify...'
                sh '$NETLIFY_PATH login $NETLIFY_AUTH_TOKEN'
                println 'After Logging in to Netlify...'
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
                sh '$NETLIFY_PATH deploy --site $YOUR_NETLIFY_SITE_ID --auth $NETLIFY_AUTH_TOKEN --dir ./build --prod'
                println 'Deploying to Netlify...'
            }
        }
    }
}
