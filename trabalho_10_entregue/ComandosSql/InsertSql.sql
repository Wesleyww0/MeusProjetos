

USE Site;

-- Inserir dados iniciais na tabela paginas --


INSERT INTO paginas (nome,conteudo) VALUES
-- Pagina Index --
('index', '
<img src="imagens/imagemIndex.png" class="container-fluid imagemIndex" alt="Imagem colorida escrita Fatecon">
<hr>
<main style="margin: 10px">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12">
                <h2>Evento</h2>
                <p>São Roque, 11/09/2024 – A FATECon HQs 2024 retorna com tudo, prometendo ser a maior edição
                do evento até agora. Nos dias 20 e 21 de setembro, a cidade será palco de uma grande celebração da
                cultura geek e dos quadrinhos, com uma programação repleta de oficinas, palestras, mesasredondas, 
                cosplay, e o aguardado Concurso "Desenhe São Roque 2024", que promete revelar novos
                talentos.</p>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
                <h2>Concurso</h2>
                <p>Um dos grandes destaques deste ano é o Concurso "Desenhe São Roque 2024", que convida alunos
                das escolas públicas e privadas da região a explorarem sua criatividade através do tema “São
                Roque, Cidade do Vinho”. É uma oportunidade única para os jovens mostrarem seu talento, com os
                dez melhores desenhos sendo expostos durante os dois dias do evento. Além da exposição, os
                participantes concorrem a prêmios incríveis, como pacotes de Histórias em Quadrinhos, materiais
                de arte e certificados de participação. As inscrições são simples e podem ser feitas através do link
                disponível no perfil oficial do evento nas redes sociais.</p>
            </div>
            <div class="col-lg- col-md-4 col-sm-12">
                <h2>Experiência</h2>
                <p>Além do Concurso "Desenhe São Roque", a FATECon HQs 2024 traz uma programação
                diversificada que inclui debates sobre representatividade nos quadrinhos, oficinas de narrativas de
                terror, e o tradicional desfile de cosplay. Com mais de 60 artistas presentes, o evento é uma
                oportunidade única para os visitantes interagirem diretamente com criadores renomados, adquirirem
                obras com assinaturas personalizadas e mergulharem no vasto universo da ilustração.</p>
            </div>
        </div>
    </div>

    <div class="row" style="margin: 5px">
        <div class="col-lg-8 col-md-7 order-1 order-md-0">
            <h2>Grandes nomes</h2>
            <p>A FATECon HQs 2024 também contará com a presença de grandes nomes do cenário nacional dos
            quadrinhos. Entre eles está Cecília Marins, quadrinista e jornalista, vencedora do 39º Prêmio
            Angelo Agostini. Cecília comandará uma oficina prática que vai mostrar como transformar histórias
            reais em quadrinhos, incentivando os participantes a explorar suas próprias narrativas, mesmo sem
            habilidades de desenho. Cecília é autora de reportagens em quadrinhos e uma das ilustradoras do
            documentário "AmarElo" de Emicida, indicado ao Emmy Internacional.
            Outro grande destaque é a participação de Gilmar, o “Cartunista das Cavernas”, um dos mais
            influentes chargistas do Brasil. Autor de dez livros de tiras e quadrinhos, e vencedor de importantes
            prêmios, como o HQ MIX de melhor cartunista brasileiro e o Grande Prêmio no Salão de Humor de
            Piracicaba em 2024, Gilmar traz sua vasta experiência ao evento. Ao lado dele, estará o renomado
            chargista Bira Dantas, vencedor do Prêmio do Salão de Humor do Chipre e do Troféu HQ Mix,
            além de ser reconhecido como mestre dos quadrinhos nacionais pelo Prêmio Angelo Agostini.
            Juntos, eles participarão de uma mesa-redonda sobre os desafios e alegrias de ser um chargista no
            Brasil.</p>
        </div>
        <div class="col-lg-4 col-md-5 d-flex justify-content-center align-items-center order-0 order-md-1">
            <img src="imagens/bonecoIndex.jpg" class="img-fluid" alt="Imagem ao lado do texto">
        </div>
    </div>
</main>
')

-- Pagina FAQ --
,('faq', '<article>
    <h2 class="mb-4">FAQ - Fatecon</h2>
    <p>Nosso FAQ funciona 24 horas para apoiar as indagações dos usuários e permitir uma boa experiência.</p>
    <p>Adicione aqui suas perguntas e dúvidas sobre o evento, e em breve nossa equipe entrará em contatos por e-mail.</p>

    <form action="./php/formFaq.php" method="post" class="mx-auto" style="max-width: 600px;">
        <div class="mb-3">
            <label for="email" class="form-label">E-mail</label>
            <input type="email" name="email" class="form-control" placeholder="Insira seu e-mail" required>
        </div>
        <div class="mb-3">
            <label for="duvida" class="form-label">Dúvida</label>
            <textarea class="form-control" name="duvida" rows="3" placeholder="Digite sua dúvida"></textarea>
        </div>
        <button type="submit" class="btn btn-primary w-100">Enviar</button>
    </form>
</article>')

-- Pagina Quem Somos por hora vazio --


-- Pagina localização --
,('localizacao', '<div class="articleLocalizacao">

    <div class="m-5 sectionLocalizacao">
        <div class="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29264.08091076031!2d-47.175731222496!3d-23.532138644444807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf72abcc76c563%3A0x8e35693ef6d11193!2sEscola%20Estadual%20Hor%C3%A1cio%20Manley%20Lane!5e0!3m2!1spt-BR!2sbr!4v1733169455443!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
    <div class="linha sectionLocalizacao row">
        <div class="col-md-3">
            <div class="card-board m-2">
                <h5 class="card-title m-2">Local do Evento</h5>
                <p class="card-text m-2">O FATECon HQs acontecerá na E.E. Horácio Manley Lane, em São Roque. Um espaço amplo e acolhedor para todas as atividades do evento. Prepare-se para uma experiência inesquecível!</p>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card-board m-2">
                <h5 class="card-title m-2">Horários do Evento</h5>
                <p class="card-text m-2">Sexta-feira (20/09): das 9h às 17h</p>
                <p class="card-text m-2">Sábado (21/09): das 10h às 18h</p>
                <p class="card-text m-2">Organize sua agenda e venha participar das oficinas, palestras e muito mais!</p>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card-board m-2">
                <h5 class="card-title m-2">Uma viagem ao mundo dos quadrinhos!</h5>
                <p class="card-text m-2">Reúna amigos e familiares para curtir dois dias repletos de cultura geek. O FATECon HQs promete atividades para todas as idades em um local de fácil acesso.</p>
            </div>
        </div>
    </div>
</div>')

-- Pagina Normas --
,('normas', ' <div class="container-fluid" style="text-align: justify; padding: 30px">
        <div class="row justify-content-center">

        <div class="col-lg-8 col-md-10 col-sm-12">
                <h2>Normas e Termo de Uso</h2>
                <hr>
                <h3>Bem-vindo ao Fatecon!</h3>
                <p>Este documento tem como objetivo apresentar as normas e condições para a participação no evento. Ao adquirir o ingresso ou participar de qualquer atividade vinculada, o participante concorda integralmente com os termos aqui descritos.</p>

                <h6>Descrição do Evento</h6>
                <p>O Fatecon será realizado ao longo de dois dias, nos dias 20 e 21 de setembro de 2024. Este evento de grande porte terá uma programação dedicada à cultura geek, com atividades variadas, como vendas, trocas, apresentações de cosplay e muito mais. A organização está sob a responsabilidade da Fatec São Roque, localizada na Escola Horácio Manley Lane, CNPJ: 27.848.124/0001-88.</p>

                <h6>Serviços Prestados</h6>
                <p>O site tem como principal objetivo a divulgação do evento, além de oferecer facilidades para a adesão a ingressos e a promoção de parcerias com empresas e instituições interessadas em associar suas marcas ao evento.</p>

                <h6>Direitos Autorais e Propriedade Intelectual</h6>
                <p>Todo o conteúdo disponibilizado neste site é protegido pelas leis brasileiras de direitos autorais. Sua reprodução, distribuição ou qualquer outra forma de uso não autorizado é expressamente proibida, salvo mediante prévia autorização por escrito da organização do evento.</p>

                <h6>Privacidade e Segurança de Dados</h6>
                <p>Durante o processo de cadastro ou interação com os nossos serviços, poderemos coletar informações pessoais, como nome, e-mail, telefone e endereço. Esses dados serão utilizados exclusivamente para personalizar os serviços oferecidos, enviar comunicações relacionadas ao evento e melhorar a experiência dos usuários no site.</p>

                <h6>Responsabilidades</h6>
                <p>Os participantes são integralmente responsáveis por seus pertences pessoais durante a realização do evento. A organização não se responsabiliza por eventuais perdas ou danos causados por terceiros, incluindo, mas não se limitando a, furtos ou acidentes.</p>

                <h6>Alterações nos Termos</h6>
                <p>A organização do Fatecon reserva-se o direito de modificar este documento a qualquer momento, de acordo com a necessidade. Alterações substanciais serão comunicadas aos participantes por meio dos canais oficiais do evento.</p>

                <h6>Contato</h6>
                <p>Nos contate para dúvidas por e-mail ou telefone, assim como para eventuais parcerias ou networking. Através das páginas:</p>
                <a href="faq.php" class="btn btn-primary"><i class="bi bi-question-circle"></i> FAQ</a>
                <a href="business.php" class="btn btn-primary"><i class="bi bi-briefcase"></i> Business</a>
            </div>

            <div class="col-12 col-lg-4">
                <figure>
                    <img src="imagens/bonecoNormas.png" class="img-fluid" alt="img-normas">
                </figure>
            </div>
        </div>
</div>')

-- Pagina Noticias --
,('noticias', '<main class="container articleNoticias">

    <div class="row mb-4">
        <div class="col-md-12">
            <div class="card">
                <img src="imagens/noticia1.jpg" class="card-img-top" alt="Imagem da notícia">
                <div class="card-body">
                    <h5 class="card-title">Fatec São Roque realiza a primeira edição do FateconHQs</h5>
                    <p class="card-text">Exposição contará com trabalhos de quadrinistas, workshops de ilustração de quadrinhos e de orientação à leitura e praça de alimentação.</p>
                    <a href="https://www.cps.sp.gov.br/fatec-sao-roque-realiza-a-primeira-edicao-do-fateconhqs/" class="btn btn-primary">
                        <i class="bi bi-box-arrow-right"></i> Saiba Mais
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- Segunda linha -->
    <div class="row mb-4">
        <div class="col-md-8">
            <div class="card">
                <img src="imagens/noticia2.jpg" class="card-img-top" alt="Imagem da notícia">
                <div class="card-body">
                    <h5 class="card-title">Mais de 60 quadrinistas se reúnem em feira de quadrinhos</h5>
                    <p class="card-text">A cidade de São Roque será transformada em uma grande feira de quadrinhos neste fim de semana...</p>
                    <a href="https://foradoplastico.com.br/mais-de-60-quadrinistas-se-reunem-em-feira-de-quadrinhos-no-interior-de-sao-paulo/" class="btn btn-primary">
                        <i class="bi bi-box-arrow-right"></i> Saiba Mais
                    </a>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <img src="imagens/noticia3.jpg" class="card-img-top" alt="Imagem da notícia">
                <div class="card-body">
                    <h5 class="card-title">FATECON HQs: evento de quadrinhos em São Roque</h5>
                    <p class="card-text">O evento terá diversas atrações, como exposição e vendas de HQs, palestras, oficinas...</p>
                    <a href="https://universohq.com/noticias/fatecon-hqs-evento-de-quadrinhos-em-sao-roque/" class="btn btn-primary">
                        <i class="bi bi-box-arrow-right"></i> Saiba Mais
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- Terceira linha -->
    <div class="row mb-4">
        <div class="col-md-4">
            <div class="card">
                <img src="imagens/noticia4.jpg" class="card-img-top" alt="Imagem da notícia">
                <div class="card-body">
                    <h5 class="card-title">São Roque recebe FATECon HQs 2023</h5>
                    <p class="card-text">Preparem suas fantasias e afinem seus superpoderes! A cidade de São Roque tem o orgulho de receber a FATECon HQs...</p>
                    <a href="https://www.odemocrata.com.br/cultura/sao-roque-recebe-fatecon-hqs-2023-uma-imersao-no-universo-geek-e-nerd/" class="btn btn-primary">
                        <i class="bi bi-box-arrow-right"></i> Saiba Mais
                    </a>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <img src="imagens/noticia5.jpg" class="card-img-top" alt="Imagem da notícia">
                <div class="card-body">
                    <h5 class="card-title">Vencedores do Concurso "Desenhe São Roque 2024"</h5>
                    <p class="card-text">Atenção, vencedores e finalistas! Seus prêmios estarão disponíveis para retirada na FATEC São Roque...</p>
                    <a href="https://www.facebook.com/fateconhqs/posts/" class="btn btn-primary">
                        <i class="bi bi-box-arrow-right"></i> Saiba Mais
                    </a>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <img src="imagens/noticia6.jpg" class="card-img-top" alt="Imagem da notícia">
                <div class="card-body">
                    <h5 class="card-title">FATECon HQs na Rádio Coluna FM</h5>
                    <p class="card-text">Hoje à noite, o organizador Rubens Menezes estará no programa BATE PAPO para falar sobre a FATECon HQs 2024...</p>
                    <a href="https://www.facebook.com/fateconhqs/posts/" class="btn btn-primary">
                        <i class="bi bi-box-arrow-right"></i> Saiba Mais
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div class="text-center btn-voltar">
        <a href="#" class="btn btn-outline-secondary">Voltar ao topo</a>
    </div>
</main>')

-- Pagina Programação--
-- em construção --

-- Pagina ingressos --
,('ingressos','    <div class="container my-5">
        <div class="row g-4">
            <div class="col-6">
                <img src="imagens/avisoIngressos.png" class="img-fluid" alt="Aviso de acesso com crianças">
            </div>
            <div class="col-6">
                <img src="imagens/aviso1Ingressos.png" class="img-fluid" alt="Aviso de controle de acesso">
            </div>
        </div>
    </div>')

-- Pagina Business --
,('business','<main>
<div class="container main-content">
    <div class="row">
        <div class="col-md-6">
            <h2>Colaborar conosco</h2>
            <p>Participar de um evento de quadrinhos e cultura geek traz uma série de vantagens. Trabalhar nesses eventos permite um contato mais próximo com a comunidade, facilitando o networking com fãs e profissionais. Além disso, o ambiente de imersão é uma excelente oportunidade para adquirir experiência e conhecer novas tendências.</p>
            <p>Para expositores, o evento é uma vitrine única, permitindo apresentar produtos e projetos a um público engajado, o que pode impulsionar vendas e parcerias futuras. Já os parceiros conseguem fortalecer sua marca e associar-se ao universo geek, atingindo diretamente fãs dedicados e que valorizam experiências culturais exclusivas.</p>
            <div class="buttons">
                <a href="#formulario" class="btn">Trabalhar</a>
                <a href="#formulario" class="btn">Expor</a>
                <a href="#formulario" class="btn">Parceria</a>
            </div>
        </div>
        <div class="col-md-6">
            <div class="main-image" style="background-color: transparent;">
                <img src="imagens/bonecoBusiness.png" alt="Imagem principal" class="imagemBusiness">
            </div>
        </div>
    </div>
    <div class="row mt-5">
        <div class="col-md-6 form-container" id="formulario">
          <section class="registration-section">
            <div class="container">
                <h2 class="text-center mb-5">Trabalhe conosco!</h2>
                  <form action="php/formBusiness.php" method="post" class="mx-auto" style="max-width: 600px;">
                    <div class="mb-3">
                        <label for="nome" class="form-label">Nome completo</label>
                        <input type="text" class="form-control" name="nome" placeholder="Insira seu nome completo">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">E-mail</label>
                        <input type="email" class="form-control" name="email" placeholder="Insira seu e-mail">
                    </div>
                    
                    <div class="mb-3">
                        <label for="telefone" class="form-label">Telefone</label>
                        <input type="tel" class="form-control" name="telefone" placeholder="(XX) XXXXX-XXXX">
                    </div>
                    
                    <div class="mb-3">
                        <label for="tipoCadastro" class="form-label">Setores</label>
                        <select class="form-select" name="setor">
                            <option selected>Selecione um setor</option>
                            <option value="trabalhar">Trabalhar</option>
                            <option value="expositor">Expositor</option>
                            <option value="parceria">Parceria</option>
                        </select>
                    </div>
                    
                    <div class="mb-3">
                        <label for="mensagem" class="form-label">Mensagem</label>
                        <textarea class="form-control" name="mensagem" rows="3" placeholder="Digite sua mensagem"></textarea>
                    </div>
<div class="buttons">
<a><button type="submit" 
 class="btn btn-primary">Enviar</button></a>
                </form>
            </div>
        </section>
        </div>
        <div class="col-md-6 duvidaBusiness">
            <h2>Dúvida?</h2>
            <p>Para preencher o formulário do site com segurança e precisão, certifique-se de fornecer informações corretas e verificar todos os dados antes de enviá-los. Caso tenha dúvidas durante o preenchimento, consulte as normas do site para entender os requisitos de cada campo e garantir a conformidade com as diretrizes. </p>
            <p>Você também pode visitar a página "FAQ" para encontrar respostas às dúvidas mais comuns e obter mais informações sobre o processo de cadastro.</p>
            <div class="buttons">
                <a href="faq.php"><button class="btn btn-primary">FAQ</button></a>
                <a href="normas.php"><button class="btn btn-primary">Normas de uso</button></a>
            </div>
        </div>
    </div>
</div>
</main>');


-- Inserindo Dados Na tabela de perguntas da pagina FAQ --

INSERT INTO faq (pergunta, resposta) VALUES
('Qual a localização do evento?','Escola Horácio Manley Lane - Av. João Pessoa, 556 - Centro, São Roque - SP, 18130-000.')
,('Qual o horário de início?','Inicia às 10 horas da manhã dos dias 20 e 21 de setembro.')
,('Qual a motivação desse encontro?','Expor o trabalho dos autores e compartilhar a cultura geek.')
,('Posso ir vestido com qualquer tipo de roupa?','Sim, pode usar roupas normais ou ir vestido de cosplay.')
,('Consigo expor meu trabalho na Fatecon?','Sim, entre em contato com nossa equipe clicando no botão abaixo:<a href="business.php" class="btn btn-primary w-5"><i class="bi bi-briefcase-fill me-2"></i> Ir para Business</a>')
,('Quando será a próxima Fatecon?','Está programada para acontecer entre o meio e o final do próximo ano. Informaremos pelo site em breve.');


-- Inserindo Dados Na Pagina de Programações--

INSERT INTO programacao (titulo,conteudo_imagem,imagem_conteudo, data_hora) VALUES
('FATECon HQs 2024 – Sexta-feira: 10h-11h'
,'<img src="imagens/cecilia.jpg" class="img-fluid" alt="Foto da Cecília Marins">'
,  ' <div class="card-body">                
       <p class="card-text">Personagens são a alma de qualquer história, e nesta oficina com Marco A. Cortez, você aprenderá como criar personagens memoráveis e cheios de vida. Marco, conhecido por suas ilustrações expressivas, abordará aspectos como design, construção de personalidade e desenvolvimento de backstory. A oficina começa com exercícios práticos de esboço, seguidos por técnicas para criar protagonistas e antagonistas envolventes. Você explorará como os traços físicos e psicológicos podem contar histórias e conectar-se com o público. Ao final, os participantes terão criado personagens únicos, prontos para ganhar vida em suas próprias histórias ou projetos futuros.</p>
       <a href="https://www.instagram.com/fateconhqs?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" class="btn btn-primary">
         <i class="bi bi-box-arrow-right"></i> Saiba Mais</a>
     </div>
     <div class="m-1">
       <a href="https://www.instagram.com/fateconhqs/" target="_blank">
        <i class="bi bi-instagram fs-3"></i>
       </a>
       <a href="https://x.com/governosp/" target="_blank">
        <i class="bi bi-twitter-x fs-3"></i>
       </a>
       <a href="https://www.facebook.com/governosp/" target="_blank">
        <i class="bi bi-facebook fs-3"></i>
       </a>
     </div>
   </div>'
,'2024/05/20')

,('FATECon HQs 2024 – Sábado: 10h-11h'
,  '<img src="imagens/marco.jpg" class="img-fluid rounded-start" alt="Foto de Marco A. Cortez">'
,'<div class="card-body">
                <p class="card-text">Oficina "Você em HQ" com Cecília Marins. Aprenda a transformar suas histórias em quadrinhos usando técnicas de narrativa visual e criação de personagens. Atividade para todos os níveis, focada em despertar criatividade e produzir um esboço de sua própria HQ!</p>
                <a href="https://www.instagram.com/fateconhqs?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" class="btn btn-primary">
                    <i class="bi bi-box-arrow-right"></i> Saiba Mais
                </a>
                <div class="m-1">
                    <a href="https://www.instagram.com/fateconhqs/" target="_blank">
                        <i class="bi bi-instagram fs-3"></i>
                    </a>
                    <a href="https://x.com/governosp/" target="_blank">
                        <i class="bi bi-twitter-x fs-3"></i>
                    </a>
                    <a href="https://www.facebook.com/governosp/" target="_blank">
                        <i class="bi bi-facebook fs-3"></i>
                    </a>
                </div>
            </div>
        </div>'
,'2024/05/21')

,('FATECon HQs 2024 – 20/09 e 21/09'
,'<img src="imagens/rafael.jpg" class="img-fluid rounded-start" alt="Foto de Rafael Marçal">'
,  ' <div class="card-body">
                <p class="card-text">Já pensou em se tornar um quadrinista profissional? Rafael Marçal, artista conhecido por suas tirinhas e quadrinhos bem-humorados, compartilhará suas experiências no mundo das HQs. Neste bate-papo, ele abordará desde os desafios iniciais até a rotina de trabalho e os segredos para se destacar em um mercado competitivo. Rafael discutirá o processo criativo, desde a ideia até o produto final, passando pelo roteiro, ilustração e publicação. Ele também responderá perguntas do público sobre como começar na carreira, buscar oportunidades e lidar com os desafios do mercado. Uma conversa essencial para quem sonha em transformar a paixão por quadrinhos em profissão.</p>
                <a href="https://www.instagram.com/fateconhqs?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" class="btn btn-primary">
                    <i class="bi bi-box-arrow-right"></i> Saiba Mais
                </a>
                <div class="m-1">
                    <a href="https://www.instagram.com/fateconhqs/" target="_blank">
                        <i class="bi bi-instagram fs-3"></i>
                    </a>
                    <a href="https://x.com/governosp/" target="_blank">
                        <i class="bi bi-twitter-x fs-3"></i>
                    </a>
                    <a href="https://www.facebook.com/governosp/" target="_blank">
                        <i class="bi bi-facebook fs-3"></i>
                    </a>
                </div>
            </div>
        </div>'
,'2024/05/22');            
     
-- inserindo ingressos na pagina ingressos --

INSERT INTO ingressos (tipo,descricao) VALUES
('basico','<img src="imagens/ingresso1.png" class="img-fluid" alt="Ingresso básico">
 <a href="imagens/ingresso1.png" download="ingresso_basico" class="btn btn-primary mt-3"><i class="bi bi-download"></i> Baixar ingresso</a>
 ')
,('vip','<img src="imagens/ingresso2.png" class="img-fluid" alt="Ingresso VIP">
<a href="imagens/ingresso2.png" download="ingresso_vip" class="btn btn-primary mt-3"><i class="bi bi-download"></i> Baixar ingresso</a>
')
,('oficina','<img src="imagens/ingresso3.png" class="img-fluid" alt="Ingresso oficina">
 <a href="imagens/ingresso3.png" download="ingresso_oficina" class="btn btn-primary mt-3"><i class="bi bi-download"></i> Baixar ingresso</a>
')
,('cosplay',' <img src="imagens/ingresso4.png" class="img-fluid" alt="Ingresso cosplay">
  <a href="imagens/ingresso4.png" download="ingresso_cosplay" class="btn btn-primary mt-3"><i class="bi bi-download"></i> Baixar ingresso</a>
')
,('estudante',' <img src="imagens/ingresso5.png" class="img-fluid" alt="Ingresso estudante">
  <a href="imagens/ingresso5.png" download="ingresso_estudante" class="btn btn-primary mt-3"><i class="bi bi-download"></i> Baixar ingresso</a>
')
,('familia',' <img src="imagens/ingresso6.png" class="img-fluid" alt="Ingresso familia">
<a href="imagens/ingresso6.png" download="ingresso_familia" class="btn btn-primary mt-3"><i class="bi bi-download"></i> Baixar ingresso</a>
');

-- inserindo integrantes na pagina quem somos --

INSERT INTO quemsomos (conteudo_imagem, imagem_conteudo) VALUES 
('
                    <figure>
                        <img src="imagens/Bryan.png" alt="Imagem do Bryan" class="img-fluid rounded">
                    </figure>
              ','<h2>Bryan Cadmiel Evangelista de Souza</h2>
                    <h3>RA: 2650832413001</h3>
                    <p>Conhecido simplesmente como Bryan, é um jovem de 22 anos residente em Mairinque, São Paulo. Nascido em Mairinque no dia 3 de fevereiro de 2002, Bryan é irmão de quatro meninos e uma menina. Sua trajetória educacional começou na Escola Estadual Altina Julia de Oliveira, onde concluiu seu ensino médio. Demonstrando interesse precoce pela área de tecnologia, Bryan cursou Lógica de Programação pela Universidade de São Paulo (USP), o que lhe abriu portas para o campo digital. Além de seu comprometimento acadêmico, Bryan possui hobbies que revelam um interesse profundo por temas como sobrevivência e auto-suficiência. Estas atividades refletem seu desejo de se preparar para situações adversas e seu gosto por aprender constantemente. Atualmente, Bryan dedica-se a trabalhos de gerenciamento de redes sociais, criação de sites e produção de mídia digital. Ele aspira a uma carreira que lhe permita trabalhar de qualquer lugar do mundo, buscando sempre a calma e o contínuo aprimoramento profissional. Inspirado pelo exemplo de seus pais e avós, que sempre agiram de forma correta e transparente, Bryan segue uma trajetória orientada por princípios sólidos. A decisão de cursar a Faculdade de Tecnologia foi influenciada por uma profunda crença em Deus e no direcionamento divino em sua vida sendo Profetizado por duas vezes a área tecnológica em sua vida e eventos como a inscrição para a faculdade em questão ser indicada por um amigo após este evento. Demonstrando sua fé e a confiança nos caminhos que escolhe seguir. Bryan é um exemplo de jovem determinado, que alia fé, família e profissional.</p>
                    <p>Funções: Coder e designer (UI/UX)</p>
                    <div>
                    <a href="noticias.php" class="btn btn-primary w-5"><i class="bi bi-newspaper me-2"></i> Notícias</a>
                    <a href="programacao.php" class="btn btn-primary w-5"><i class="bi bi-calendar"></i> Programação</a>
                    <a href="localizacao.php" class="btn btn-primary w-5"><i class="bi bi-geo-alt me-2"></i> Localização</a>
                    </div>')
	,('
                    <figure>
                        <img src="imagens/livia.jpg" alt="Imagem Da Lívia" class="img-fluid rounded">
                    </figure>
                ','
                    <h2>Lívia Ferreira Dias</h2>
                    <h3>RA: 2650832413016</h3>
                    <p>Conhecida como Vênus, nasceu em São Roque em 29 de dezembro de 2004, e tem 19 anos. Ela sempre viveu nesta cidade, onde ainda reside. Concluiu o ensino médio no Instituto Federal Campus São Roque, onde também fez um curso técnico em meio ambiente. Lívia tem uma irmã mais nova, com quem mantém um vínculo familiar forte. Ela possui um interesse profundo por jogos online e design gráfico, hobbies que utiliza para se expressar e desenvolver habilidades criativas. Susan Kare, uma pioneira no design de interfaces gráficas, é sua grande inspiração. Lívia trabalha como recepcionista em uma clínica de saúde ocupacional, onde adquiriu valiosas habilidades de comunicação e organização. Atualmente, cursa Sistemas para Internet na Faculdade de Tecnologia, uma área que considera promissora em termos de empregabilidade. Seu objetivo é se formar em breve, continuar com cursos de pós-graduação e alcançar uma posição que ofereça um bom emprego e um salário satisfatório, consolidando uma carreira no setor de tecnologia.</p>
                    <p>Funções: Líder, Coder e designer (UI/UX)</p>
                    <div>
                        <a href="business.php" class="btn btn-primary me-2"><i class="bi bi-briefcase-fill me-2"></i>Business</a>
                        <a href="index.php" class="btn btn-primary me-2"><i class="bi bi-house-door-fill me-2"></i>Home</a>
                        <a href="ingressos.php" class="btn btn-primary"><i class="bi bi-ticket-perforated-fill me-2"></i>Ingressos</a>
                    </div>
               ')
,('
 <figure>
 <img src="imagens/Wesley.png" alt="Imagem do Wesley" class="img-fluid rounded">
</figure>'
,'
                    <h2>Wesley Washington de Oliveira dos Santos Brito</h2>
                    <h3>RA: 2650832413025</h3>
                    <p>Conhecido como Wesley, tem 26 anos, é morador de São Roque desde sempre e fez o Ensino Médio na Escola Horácio Manley Lane. Iniciou Engenharia Civil na Uniso, mas a vida o trouxe a ser mecânico no bairro onde reside. Está em processo de mudança para áreas de tecnologia e gosta de jogos, filmes e séries. Seu objetivo é trabalhar remotamente e aproveitar a vida. Seu caminho até os dias de hoje é inspirado por superações, e ele busca evoluir por determinação.</p>
                    <p>Funções: Coder e designer (UI/UX)</p>
                    <div>
                        <a href="faq.php" class="btn btn-primary me-2"><i class="bi bi-question-circle-fill me-2"></i>FAQ</a>
                        <a href="normas.php" class="btn btn-primary me-2"><i class="bi bi-file-earmark-text-fill me-2"></i>Normas</a>
                        <a href="quem_somos.php" class="btn btn-primary"><i class="bi bi-person-lines-fill me-2"></i>Quem Somos</a>
</div>');

