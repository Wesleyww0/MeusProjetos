-- Estrutura do Banco de Dados para o site --

 CREATE DATABASE Site;
 Go 

USE Site;
Go
-- Tabela para armazenar textos genéricos de páginas
CREATE TABLE paginas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    conteudo TEXT
);

-- Tabela para perguntas frequentes
CREATE TABLE faq (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pergunta TEXT NOT NULL,
    resposta TEXT NOT NULL
);



-- Tabela para notícias
CREATE TABLE noticias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255),
    conteudo TEXT,
    data_publicacao DATE
);

-- Tabela para programação do evento
CREATE TABLE programacao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo TEXT,
    conteudo_imagem TEXT,
    imagem_conteudo TEXT,
    data_hora DATE
);

-- Tabela para ingressos
CREATE TABLE ingressos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(100),
    descricao TEXT
);

-- Tabela de imagens e logos
CREATE TABLE imagens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    caminho VARCHAR(255)
);

-- Tabela de quemSomos
CREATE TABLE quemsomos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    conteudo_imagem TEXT,
    imagem_conteudo TEXT
);



