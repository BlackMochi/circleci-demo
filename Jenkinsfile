pipeline {
  agent {
    docker {
      image 'node:8.0.0'
    }
  }
  stages {
    stage('hello') {
      steps {
        echo 'Hello jenkins'
      }
    }
  }
}