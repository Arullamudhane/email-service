pipeline {
    agent any 
    
    stages{
        stage("Clone Code"){
            steps {
                echo "Cloning the code"
                git url:"https://github.com/Arullamudhane/email-service.git", branch: "master"
            }
        }
          stage("dock check"){
            steps {
                echo "Building the image"
                sh "docker --version"
            }
        }
        stage("Build"){
            steps {
                echo "Building the image"
                sh "docker build -t my-email ."
            }
        }
       stage("Push to Docker Hub") {
    steps {
        echo "Pushing the image to Docker Hub"
        withCredentials([usernamePassword(credentialsId: 'dockerHub', passwordVariable: 'dockerHubPass', usernameVariable: 'dockerHubUser')]) {
            sh "docker tag my-email ${env.dockerHubUser}/my-email:latest"
            sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPass}"
            sh "docker push ${env.dockerHubUser}/my-email:latest"
        }
    }
}

        stage("Deploy"){
            steps {
                echo "Deploying the container"
                sh "docker-compose down && docker-compose up -d"
                
            }
        }
    }
}