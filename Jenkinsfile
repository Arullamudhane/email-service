pipeline {
    agent any

    environment {
        NODE_ENV = 'production' // Set Node environment variable
        NVM_DIR = "${HOME}/.nvm" // NVM (Node Version Manager) directory
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the repository
                git 'https://github.com/Arullamudhane/email-service.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js and npm
                script {
                    if (!fileExists("${NVM_DIR}/nvm.sh")) {
                        sh 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash'
                    }
                    sh '. $NVM_DIR/nvm.sh && nvm install 14' // You can specify the Node version you want to use
                    sh '. $NVM_DIR/nvm.sh && nvm use 14'
                }
                // Install project dependencies
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                // Run unit tests
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                // Build the application (if applicable)
                sh 'npm run build'
            }
        }

        stage('Static Code Analysis') {
            steps {
                // Run a static code analysis tool, like ESLint
                sh 'npm run lint'
            }
        }

        stage('Deploy') {
            when {
                branch 'main' // Deploy only from the main branch
            }
            steps {
                // Deploy the application (this can be customized as per your deployment strategy)
                echo 'Deploying application...'
                // Example: sh 'npm run deploy'
            }
        }
    }

    post {
        always {
            // Clean up after the build
            cleanWs()
        }
        success {
            echo 'Build and test stages completed successfully.'
        }
        failure {
            echo 'Build or test stages failed.'
        }
    }
}
