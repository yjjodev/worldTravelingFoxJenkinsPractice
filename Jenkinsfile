pipeline {
    agent any
    tools {
        nodejs 'node20'   // [1]에서 등록한 이름과 동일해야 함
    }
    stages {
        stage('Checkout') {
            steps { checkout scm }
        }
        stage('Install') {
            steps { sh 'npm install' }
        }
        stage('Test') {
            steps { sh 'npm test' }
        }
        stage('Build') {
            steps { sh 'npm run build' }
        }
        stage('Archive') {
            steps { archiveArtifacts artifacts: 'dist/**', fingerprint: true }
        }
    }
}