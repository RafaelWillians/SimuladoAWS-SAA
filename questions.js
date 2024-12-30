let questions = [
    {
        "numb": 1,
        "question": "Uma empresa coleta dados de temperatura, umidade e pressão atmosférica em cidades de vários continentes. O volume médio de dados que a empresa coleta de cada site diariamente é de 500 GB. Cada site tem uma conexão de Internet de alta velocidade. A empresa quer agregar os dados de todos esses sites globais o mais rápido possível em um único bucket do Amazon S3. A solução deve minimizar a complexidade operacional. Qual solução atende a esses requisitos?",
        "answer": "A. Ative o S3 Transfer Acceleration no bucket S3 de destino. Use uploads multipart para carregar dados do site diretamente para o bucket S3 de destino.",
        "options": [
            "A. Ative o S3 Transfer Acceleration no bucket S3 de destino. Use uploads multipart para carregar dados do site diretamente para o bucket S3 de destino.",
            "B. Carregue os dados de cada site para um bucket S3 na região mais próxima. Use o S3 Cross-Region Replication (replicação entre regiões) para copiar objetos para o bucket S3 de destino . Em seguida, remova os dados do bucket S3 de origem.",
            "C. Agende tarefas de dispositivo AWS Snowball Edge Storage Optimized diariamente para transferir dados de cada site para a região mais próxima. Use o S3 Cross-Region Replication (replicação entre regiões) para copiar objetos para o bucket S3 de destino.",
            "D. Carregue os dados de cada site para uma instância do Amazon EC2 na região mais próxima. Armazene os dados em um Amazon Elastic Block Store (Amazon EBS). Em intervalos regulares, faça um snapshot do EBS e copie-o para a região que contém o bucket S3 de destino. Restaure o volume EBS naquela Região."
        ]
    },
    {
        "numb": 2,
        "question": "Uma empresa precisa da capacidade de analisar os arquivos de log de seu aplicativo proprietário. Os logs são armazenados no formato JSON em um bucket do Amazon S3. As consultas serão simples e serão executadas sob demanda. Um arquiteto de soluções precisa executar a análise com alterações mínimas na arquitetura existente. O que o arquiteto de soluções deve fazer para atender a esses requisitos com a MENOR sobrecarga operacional?",
        "answer": "C. Use o Amazon Athena diretamente com o Amazon S3 para executar as consultas conforme necessário.",
        "options": [
            "A. Use o Amazon Redshift para carregar todo o conteúdo em um só lugar e executar as consultas SQL conforme necessário.",
            "B. Use o Amazon CloudWatch Logs para armazenar os logs. Execute consultas SQL conforme necessário no console do Amazon CloudWatch.",
            "C. Use o Amazon Athena diretamente com o Amazon S3 para executar as consultas conforme necessário.",
            "D. Use o AWS Glue para catalogar os logs. Use um cluster Apache Spark temporário no Amazon EMR para executar as consultas SQL conforme necessário."
        ]
    },
    {
        "numb": 3,
        "question": "Uma empresa usa o AWS Organizations para gerenciar várias contas AWS para diferentes departamentos. A conta de gerenciamento tem um bucket do Amazon S3 que contém relatórios de projeto. A empresa quer limitar o acesso a este bucket do S3 somente para usuários de contas dentro da organização no AWS Organizations. Qual solução atende a esses requisitos com a MENOR sobrecarga operacional?",
        "answer": "A. Adicione a chave de condição global aws PrincipalOrgID com uma referência ao ID da organização à política de bucket do S3.",
        "options": [
            "A. Adicione a chave de condição global aws:PrincipalOrgID com uma referência ao ID da organização à política de bucket do S3.",
            "B. Crie uma unidade organizacional (UO) para cada departamento. Adicione a chave de condição global aws:PrincipalOrgPaths à política de bucket do S3.",
            "C. Use o AWS CloudTrail para monitorar os eventos CreateAccount, InviteAccountToOrganization, LeaveOrganization e RemoveAccountFromOrganization. Atualize a política do bucket do S3 adequadamente.",
            "D. Aplique tags em cada usuário que precisa de acesso ao bucket do S3. Adicione a chave de condição global aws:PrincipalTag à política do bucket do S3."
        ]
    },
    {
        "numb": 4,
        "question": "Um aplicativo é executado em uma instância do Amazon EC2 em uma VPC. O aplicativo processa logs que são armazenados em um bucket do Amazon S3. A instância EC2 precisa acessar o bucket S3 sem conectividade com a internet. Qual solução fornecerá conectividade de rede privada ao Amazon S3?",
        "answer": "A. Crie um endpoint de gateway da VPC para o bucket S3.",
        "options": [
            "A. Crie um endpoint de gateway da VPC para o bucket S3.",
            "B. Transmita os logs para o Amazon CloudWatch Logs. Exporte os logs para o bucket S3.",
            "C. Crie um perfil de instância no Amazon EC2 para permitir acesso ao S3.",
            "D. Crie uma API do Amazon API Gateway com um link privado para acessar o endpoint do S3."
        ]
    },
    {
        "numb": 5,
        "question": "Uma empresa está hospedando um aplicativo web na AWS e usa uma única instância do Amazon EC2, que armazena documentos enviados pelo usuário em um volume do Amazon EBS. Para melhor escalabilidade e disponibilidade, a empresa duplicou a arquitetura e criou uma segunda instância EC2 e volume EBS em outra Zona de Disponibilidade, colocando ambos atrás de um Application Load Balancer. Após concluir essa alteração, os usuários relataram que, cada vez que atualizam o site, eles podiam ver um subconjunto de seus documentos ou outro, mas nunca todos os documentos ao mesmo tempo. O que um arquiteto de soluções deve propor para garantir que os usuários vejam todos os seus documentos de uma só vez?",
        "answer": "C. Copie os dados de ambos os volumes do EBS para o Amazon EFS. Modifique o aplicativo para salvar os novos documentos no Amazon EFS.",
        "options": [
            "A. Copie os dados para que ambos os volumes do EBS contenham todos os documentos.",
            "B. Configure o Application Load Balancer para direcionar um usuário ao servidor com os documentos.",
            "C. Copie os dados de ambos os volumes do EBS para o Amazon EFS. Modifique o aplicativo para salvar os novos documentos no Amazon EFS.",
            "D. Configure o Application Load Balancer para enviar a solicitação para ambos os servidores. Retorne cada documento do servidor correto."
        ]
    },
    {
        "numb": 6,
        "question": "Uma empresa usa NFS para armazenar grandes arquivos de vídeo em armazenamento conectado à rede no local. Cada arquivo de vídeo varia em tamanho de 1 MB a 500 GB. O armazenamento total é de 70 TB e não está mais crescendo. A empresa decide migrar os arquivos de vídeo para o Amazon S3. A empresa deve migrar o arquivos de vídeo o mais rápido possível, usando a menor largura de banda de rede possível. Qual solução atenderá a esses requisitos?",
        "answer": "C. Implante um S3 File Gateway no local. Crie um ponto de extremidade de serviço público para se conectar ao S3 File Gateway. Crie um bucket S3. Crie um novo compartilhamento de arquivo NFS no S3 File Gateway. Aponte o novo compartilhamento de arquivo para o bucket S3. Transfira os dados do compartilhamento de arquivo NFS existente para o S3 File Gateway.",
        "options": [
            "A. Crie um bucket S3. Crie uma função IAM que tenha permissões para gravar no bucket S3. Use a AWS CLI para copiar todos os arquivos localmente para o bucket S3.",
            "B. Crie uma tarefa do AWS Snowball Edge. Receba um dispositivo Snowball Edge no local. Use o cliente Snowball Edge para transferir dados para o dispositivo. Retorne o dispositivo para que a AWS possa importar os dados para o Amazon S3.",
            "C. Implante um S3 File Gateway no local. Crie um ponto de extremidade de serviço público para se conectar ao S3 File Gateway. Crie um bucket S3. Crie um novo compartilhamento de arquivo NFS no S3 File Gateway. Aponte o novo compartilhamento de arquivo para o bucket S3. Transfira os dados do compartilhamento de arquivo NFS existente para o S3 File Gateway.",
            "D. Configure uma conexão do AWS Direct Connect entre a rede local e a AWS. Implante um S3 File Gateway localmente. Crie uma interface virtual pública (VIF) para conectar-se ao S3 File Gateway. Crie um bucket S3. Crie um novo compartilhamento de arquivo NFS no S3 File Gateway. Aponte o novo compartilhamento de arquivo para o bucket S3. Transfira os dados do compartilhamento de arquivo NFS existente para o S3 File Gateway."
        ]
    },
    {
        "numb": 7,
        "question": "Uma empresa tem um aplicativo que ingere mensagens recebidas. Dezenas de outros aplicativos e microsserviços consomem rapidamente essas mensagens. mensagens. O número de mensagens varia drasticamente e às vezes aumenta repentinamente para 100.000 a cada segundo. A empresa quer desvincular a solução e aumentar a escalabilidade. Qual solução atende a esses requisitos?",
        "answer": "A. Persista as mensagens para o Amazon Kinesis Data Analytics. Configure os aplicativos do consumidor para ler e processar as mensagens.",
        "options": [
            "A. Persista as mensagens para o Amazon Kinesis Data Analytics. Configure os aplicativos do consumidor para ler e processar as mensagens.",
            "B. Implante o aplicativo de ingestão em instâncias do Amazon EC2 em um grupo de dimensionamento automático para dimensionar o número de instâncias do EC2 com base na CPU métricas.",
            "C. Escreva as mensagens no Amazon Kinesis Data Streams com um único shard. Use uma função AWS Lambda para pré-processar mensagens e armazená-las eles no Amazon DynamoDB. Configure os aplicativos do consumidor para ler do DynamoDB para processar as mensagens.",
            "D. Publique as mensagens em um tópico do Amazon Simple Notification Service (Amazon SNS) com vários Amazon Simple Queue Service (Amazon Assinaturas SOS). Configure os aplicativos do consumidor para processar as mensagens das filas."
        ]
    },
    {
        "numb": 8,
        "question": "Uma empresa está migrando um aplicativo distribuído para a AWS. O aplicativo atende cargas de trabalho variáveis. A plataforma legada consiste em um primário servidor que coordena trabalhos em vários nós de computação. A empresa quer modernizar o aplicativo com uma solução que maximize resiliência e escalabilidade. Como um arquiteto de soluções deve projetar a arquitetura para atender a esses requisitos?",
        "answer": "C. Implemente o servidor primário e os nós de computação com instâncias do Amazon EC2 que são gerenciadas em um grupo de Auto Scaling. Configurar AWS CloudTrail como destino para os trabalhos. Configure o EC2 Auto Scaling com base na carga no servidor primário.",
        "options": [
            "A. Configure uma fila do Amazon Simple Queue Service (Amazon SQS) como um destino para os trabalhos. Implemente os nós de computação com Instâncias do Amazon EC2 que são gerenciadas em um grupo de Auto Scaling. Configure o EC2 Auto Scaling para usar o dimensionamento programado.",
            "B. Configure uma fila do Amazon Simple Queue Service (Amazon SQS) como um destino para os trabalhos. Implemente os nós de computação com o Amazon Instâncias do EC2 que são gerenciadas em um grupo de Auto Scaling. Configure o EC2 Auto Scaling com base no tamanho da fila.",
            "C. Implemente o servidor primário e os nós de computação com instâncias do Amazon EC2 que são gerenciadas em um grupo de Auto Scaling. Configurar AWS CloudTrail como destino para os trabalhos. Configure o EC2 Auto Scaling com base na carga no servidor primário.",
            "D. Implemente o servidor primário e os nós de computação com instâncias do Amazon EC2 que são gerenciadas em um grupo de Auto Scaling. Configurar Amazon EventBridge (Amazon CloudWatch Events) como um destino para os trabalhos. Configure o EC2 Auto Scaling com base na carga no nós de computação."
        ]
    },
    {
        "numb": 9,
        "question": "Uma empresa está executando um servidor de arquivos SMB em seu data center. O servidor de arquivos armazena arquivos grandes que são acessados ​​com frequência nos primeiros dias após os arquivos são criados. Após 7 dias os arquivos raramente são acessados. O tamanho total dos dados está aumentando e está próximo da capacidade total de armazenamento da empresa. Um arquiteto de soluções deve aumentar a capacidade disponível da empresa espaço de armazenamento sem perder o acesso de baixa latência aos arquivos acessados ​​mais recentemente. O arquiteto de soluções também deve fornecer ciclo de vida do arquivo gerenciamento para evitar problemas futuros de armazenamento. Qual solução atenderá a esses requisitos?",
        "answer": "D. Instale um utilitário no computador de cada usuário para acessar o Amazon S3. Crie uma política de ciclo de vida do S3 para fazer a transição dos dados para o S3 Glacier Flexible Recuperação após 7 dias.",
        "options": [
            "A. Use o AWS DataSync para copiar dados com mais de 7 dias do servidor de arquivos SMB para a AWS.",
            "B. Crie um Amazon S3 File Gateway para estender o espaço de armazenamento da empresa. Crie uma política de ciclo de vida S3 para fazer a transição dos dados para o S3 Glacier Arquivo profundo após 7 dias.",
            "C. Crie um sistema de arquivos Amazon FSx for Windows File Server para ampliar o espaço de armazenamento da empresa.",
            "D. Instale um utilitário no computador de cada usuário para acessar o Amazon S3. Crie uma política de ciclo de vida do S3 para fazer a transição dos dados para o S3 Glacier Flexible Recuperação após 7 dias."
        ]
    },
    {
        "numb": 10,
        "question": "Uma empresa está construindo um aplicativo da web de comércio eletrônico na AWS. O aplicativo envia informações sobre novos pedidos para um Amazon API Gateway REST API para processar. A empresa quer garantir que os pedidos sejam processados ​​na ordem em que são recebidos. Qual solução atenderá a esses requisitos?",
        "answer": "A. Use uma integração de API Gateway para publicar uma mensagem em um tópico do Amazon Simple Notification Service (Amazon SNS) quando o aplicativo recebe um pedido. Assine uma função AWS Lambda ao tópico para executar o processamento.",
        "options": [
            "A. Use uma integração de API Gateway para publicar uma mensagem em um tópico do Amazon Simple Notification Service (Amazon SNS) quando o aplicativo recebe um pedido. Assine uma função AWS Lambda ao tópico para executar o processamento.",
            "B. Use uma integração de API Gateway para enviar uma mensagem para uma fila FIFO do Amazon Simple Queue Service (Amazon SQS) quando o aplicativo recebe um pedido. Configure a fila FIFO do SQS para invocar uma função do AWS Lambda para processamento.",
            "C. Use um autorizador do API Gateway para bloquear quaisquer solicitações enquanto o aplicativo processa um pedido.",
            "D. Use uma integração de API Gateway para enviar uma mensagem para uma fila padrão do Amazon Simple Queue Service (Amazon SQS) quando o o aplicativo recebe um pedido. Configure a fila padrão do SQS para invocar uma função do AWS Lambda para processamento."
        ]
    },
    {
        "numb": 11,
        "question": "Uma empresa tem um aplicativo que roda em instâncias do Amazon EC2 e usa um banco de dados Amazon Aurora. As instâncias do EC2 se conectam ao banco de dados usando nomes de usuários e senhas que são armazenados localmente em um arquivo. A empresa quer minimizar a sobrecarga operacional de gerenciamento de credenciais. O que um arquiteto de soluções deve fazer para atingir esse objetivo?",
        "answer": "B. Use o AWS Systems Manager Parameter Store. Ative a rotação automática.",
        "options": [
            "A. Use o AWS Secrets Manager. Ative a rotação automática.",
            "B. Use o AWS Systems Manager Parameter Store. Ative a rotação automática.",
            "C. Crie um bucket do Amazon S3 para armazenar objetos que são criptografados com uma chave de criptografia do AWS Key Management Service (AWS KMS). Migrar o arquivo de credencial para o bucket S3. Aponte o aplicativo para o bucket S3.",
            "D. Crie um volume criptografado do Amazon Elastic Block Store (Amazon EBS) para cada instância do EC2. Anexe o novo volume do EBS a cada instância do EC2. instância. Migre o arquivo de credencial para o novo volume EBS. Aponte o aplicativo para o novo volume EBS."
        ]
    },
    {
        "numb": 12,
        "question": "Uma empresa global hospeda seu aplicativo da web em instâncias do Amazon EC2 por trás de um Application Load Balancer (ALB). O aplicativo da web tem estática dados e dados dinâmicos. A empresa armazena seus dados estáticos em um bucket do Amazon S3. A empresa quer melhorar o desempenho e reduzir latência para os dados estáticos e dinâmicos. A empresa está usando seu próprio nome de domínio registrado com Amazon Route 53. O que um arquiteto de soluções deve fazer para atender a esses requisitos?",
        "answer": "C. Crie uma distribuição do Amazon CloudFront que tenha o bucket S3 como origem. Crie um acelerador padrão do AWS Global Accelerator que tem o ALB e a distribuição do CloudFront como endpoints. Crie um nome de domínio personalizado que aponte para o nome DNS do acelerador. Use o nome de domínio personalizado como um ponto de extremidade para o aplicativo web.",
        "options": [
            "A. Crie uma distribuição do Amazon CloudFront que tenha o bucket S3 e o ALB como origens. Configure o Route 53 para rotear o tráfego para o Distribuição do CloudFront.",
            "B. Crie uma distribuição do Amazon CloudFront que tenha o ALB como origem. Crie um acelerador padrão do AWS Global Accelerator que tenha o bucket S3 como um ponto de extremidade Configure o Route 53 para rotear o tráfego para a distribuição do CloudFront.",
            "C. Crie uma distribuição do Amazon CloudFront que tenha o bucket S3 como origem. Crie um acelerador padrão do AWS Global Accelerator que tem o ALB e a distribuição do CloudFront como endpoints. Crie um nome de domínio personalizado que aponte para o nome DNS do acelerador. Use o nome de domínio personalizado como um ponto de extremidade para o aplicativo web.",
            "D. Crie uma distribuição do Amazon CloudFront que tenha o ALB como origem. Crie um acelerador padrão do AWS Global Accelerator que tenha o bucket S3 como um ponto de extremidade. Crie dois nomes de domínio. Aponte um nome de domínio para o nome DNS do CloudFront para conteúdo dinâmico. Aponte o outro nome de domínio para o nome DNS do acelerador para conteúdo estático. Use os nomes de domínio como endpoints para o aplicativo da web."
        ]
    },
    {
        "numb": 13,
        "question": "Uma empresa realiza manutenção mensal em sua infraestrutura AWS. Durante essas atividades de manutenção, a empresa precisa rotacionar a credenciais para seus bancos de dados Amazon RDS para MySQL em várias regiões da AWS. Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?",
        "answer": "A. Armazene as credenciais como segredos no AWS Secrets Manager. Use a replicação de segredos multirregionais para as regiões necessárias. Configurar segredos Gerente para rotacionar os segredos em um cronograma.",
        "options": [
            "A. Armazene as credenciais como segredos no AWS Secrets Manager. Use a replicação de segredos multirregionais para as regiões necessárias. Configurar segredos Gerente para rotacionar os segredos em um cronograma.",
            "B. Armazene as credenciais como segredos no AWS Systems Manager criando um parâmetro de string seguro. Use a replicação secreta multirregional para o Regiões necessárias. Configure o Systems Manager para rotacionar os segredos em uma programação.",
            "C. Armazene as credenciais em um bucket do Amazon S3 que tenha criptografia do lado do servidor (SSE) habilitada. Use o Amazon EventBridge (Amazon CloudWatch Events) para invocar uma função do AWS Lambda para rotacionar as credenciais.",
            "D. Criptografe as credenciais como segredos usando chaves gerenciadas pelo cliente multirregional do AWS Key Management Service (AWS KMS). Armazene o segredos em uma tabela global do Amazon DynamoDB. Use uma função do AWS Lambda para recuperar os segredos do DynamoDB. Use a API do RDS para gire os segredos."
        ]
    },
    {
        "numb": 14,
        "question": "Uma empresa executa um aplicativo de comércio eletrônico em instâncias do Amazon EC2 por trás de um Application Load Balancer. As instâncias são executadas em um Amazon EC2 Grupo de dimensionamento automático em várias zonas de disponibilidade. O grupo de dimensionamento automático é dimensionado com base nas métricas de utilização da CPU. O e-commerce O aplicativo armazena os dados da transação em um banco de dados MySQL 8.0 hospedado em uma grande instância do EC2. O desempenho do banco de dados degrada rapidamente conforme a carga do aplicativo aumenta. O aplicativo manipula mais solicitações de leitura do que transações de gravação. A empresa quer uma solução que dimensione automaticamente o banco de dados para atender à demanda de cargas de trabalho de leitura imprevisíveis, mantendo alta disponibilidade. Qual solução atenderá a esses requisitos?",
        "answer": "C. Use o Amazon Aurora com uma implantação Multi-AZ. Configure o Aurora Auto Scaling com Aurora Replicas.",
        "options": [
            "A. Use o Amazon Redshift com um único nó para funcionalidade de liderança e computação.",
            "B. Use o Amazon RDS com uma implantação Single-AZ Configure o Amazon RDS para adicionar instâncias de leitor em uma Zona de Disponibilidade diferente.",
            "C. Use o Amazon Aurora com uma implantação Multi-AZ. Configure o Aurora Auto Scaling com Aurora Replicas.",
            "D. Use o Amazon ElastiCache para Memcached com instâncias Spot do EC2."
        ]
    },
    {
        "numb": 15,
        "question": "Uma empresa migrou recentemente para a AWS e quer implementar uma solução para proteger o tráfego que flui para dentro e para fora da VPC de produção. a empresa tinha um servidor de inspeção em seu data center local. O servidor de inspeção executava operações específicas, como fluxo de tráfego inspeção e filtragem de tráfego. A empresa quer ter as mesmas funcionalidades na Nuvem AWS. Qual solução atenderá a esses requisitos?",
        "answer": "C. Use o AWS Network Firewall para criar as regras necessárias para inspeção e filtragem de tráfego para a VPC de produção.",
        "options": [
            "A. Use o Amazon GuardDuty para inspeção e filtragem de tráfego na VPC de produção.",
            "B. Use o Espelhamento de Tráfego para espelhar o tráfego da VPC de produção para inspeção e filtragem de tráfego.",
            "C. Use o AWS Network Firewall para criar as regras necessárias para inspeção e filtragem de tráfego para a VPC de produção.",
            "D. Use o AWS Firewall Manager para criar as regras necessárias para inspeção e filtragem de tráfego para a VPC de produção."
        ]
    },
    {
        "numb": 16,
        "question": "Uma empresa hospeda um data lake na AWS. O data lake consiste em dados no Amazon S3 e Amazon RDS para PostgreSQL. A empresa precisa de um solução de relatórios que fornece visualização de dados e inclui todas as fontes de dados dentro do data lake. Somente a equipe de gestão da empresa deve ter acesso total a todas as visualizações. O resto da empresa deve ter apenas acesso limitado. Qual solução atenderá a esses requisitos?",
        "answer": "D. Crie uma tabela e um crawler do AWS Glue para os dados no Amazon S3. Use o Amazon Athena Federated Query para acessar dados no Amazon RDS para PostgreSQL. Gere relatórios usando o Amazon Athena. Publique os relatórios no Amazon S3. Use as políticas de bucket do S3 para limitar o acesso ao relatórios.",
        "options": [
            "A. Crie uma análise no Amazon QuickSight. Conecte todas as fontes de dados e crie novos conjuntos de dados. Publique painéis para visualizar os dados. Compartilhe os painéis com as funções de IAM apropriadas.",
            "B. Crie uma análise no Amazon QuickSight. Conecte todas as fontes de dados e crie novos conjuntos de dados. Publique painéis para visualizar os dados. Compartilhe os painéis com os usuários e grupos apropriados.",
            "C. Crie uma tabela e um rastreador do AWS Glue para os dados no Amazon S3. Crie um trabalho de extração, transformação e carregamento (ETL) do AWS Glue para produzir relatórios. Publique os relatórios no Amazon S3. Use as políticas de bucket do S3 para limitar o acesso aos relatórios.",
            "D. Crie uma tabela e um crawler do AWS Glue para os dados no Amazon S3. Use o Amazon Athena Federated Query para acessar dados no Amazon RDS para PostgreSQL. Gere relatórios usando o Amazon Athena. Publique os relatórios no Amazon S3. Use as políticas de bucket do S3 para limitar o acesso ao relatórios."
        ]
    },
    {
        "numb": 17,
        "question": "Uma empresa está implementando um novo aplicativo de negócios. O aplicativo é executado em duas instâncias do Amazon EC2 e usa um bucket do Amazon S3 para armazenamento de documentos. Um arquiteto de soluções precisa garantir que as instâncias do EC2 possam acessar o bucket do S3. O que o arquiteto de soluções deve fazer para atender a esse requisito?",
        "answer": "A. Crie uma função IAM que conceda acesso ao bucket S3. Anexe a função às instâncias EC2.",
        "options": [
            "A. Crie uma função IAM que conceda acesso ao bucket S3. Anexe a função às instâncias EC2.",
            "B. Crie uma política do IAM que conceda acesso ao bucket do S3. Anexe a política às instâncias do EC2.",
            "C. Crie um grupo IAM que conceda acesso ao bucket S3. Anexe o grupo às instâncias EC2.",
            "D. Crie um usuário IAM que conceda acesso ao bucket S3. Anexe a conta de usuário às instâncias EC2."
        ]
    },
    {
        "numb": 18,
        "question": "Uma empresa tem um aplicativo da web de três camadas que é implantado na AWS. Os servidores da web são implantados em uma sub-rede pública em uma VPC. O aplicativo servidores e servidores de banco de dados são implantados em sub-redes privadas no mesmo VPC. A empresa implantou um dispositivo de firewall virtual de terceiros do AWS Marketplace em uma VPC de inspeção. O appliance é configurado com uma interface IP que pode aceitar pacotes IP. Um arquiteto de soluções precisa integrar o aplicativo da web com o dispositivo para inspecionar todo o tráfego para o aplicativo antes que ele chegue ao servidor web. Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?",
        "answer": "B. Crie um Application Load Balancer na sub-rede pública da VPC do aplicativo para rotear o tráfego para o dispositivo para inspeção de pacotes.",
        "options": [
            "A. Crie um balanceador de carga de rede na sub-rede pública da VPC do aplicativo para rotear o tráfego para o dispositivo para inspeção de pacotes.",
            "B. Crie um Application Load Balancer na sub-rede pública da VPC do aplicativo para rotear o tráfego para o dispositivo para inspeção de pacotes.",
            "C. Implante um gateway de trânsito nas tabelas de rotas do VPConfigure de inspeção para rotear os pacotes de entrada pelo gateway de trânsito.",
            "D. Implante um Gateway Load Balancer na VPC de inspeção. Crie um endpoint do Gateway Load Balancer para receber os pacotes de entrada e encaminhar os pacotes para o dispositivo."
        ]
    },
    {
        "numb": 19,
        "question": "Uma empresa quer melhorar sua capacidade de clonar grandes quantidades de dados de produção em um ambiente de teste na mesma região da AWS. Os dados são armazenados em instâncias do Amazon EC2 em volumes do Amazon Elastic Block Store (Amazon EBS). As modificações nos dados clonados não devem afetar os ambiente de produção. O software que acessa esses dados requer desempenho de E/S consistentemente alto. Um arquiteto de soluções precisa minimizar o tempo necessário para clonar os dados de produção no ambiente de teste. Qual solução atenderá a esses requisitos?",
        "answer": "D. Tire instantâneos do EBS dos volumes de produção do EBS. Ative o recurso de restauração rápida de instantâneos do EBS nos instantâneos do EBS. Restaure o snapshots em novos volumes EBS. Anexe os novos volumes EBS a instâncias EC2 no ambiente de teste.",
        "options": [
            "A. Tire snapshots do EBS dos volumes de produção do EBS. Restaure os snapshots nos volumes de armazenamento de instância do EC2 no ambiente de teste.",
            "B. Configure os volumes EBS de produção para usar o recurso EBS Multi-Attach. Tire instantâneos do EBS dos volumes EBS de produção. Anexe o volumes de produção do EBS para as instâncias do EC2 no ambiente de teste.",
            "C. Tire snapshots do EBS dos volumes de produção do EBS. Crie e inicialize novos volumes do EBS. Anexe os novos volumes do EBS às instâncias do EC2 no ambiente de teste antes de restaurar os volumes dos snapshots do EBS de produção.",
            "D. Tire instantâneos do EBS dos volumes de produção do EBS. Ative o recurso de restauração rápida de instantâneos do EBS nos instantâneos do EBS. Restaure o snapshots em novos volumes EBS. Anexe os novos volumes EBS a instâncias EC2 no ambiente de teste."
        ]
    },
    {
        "numb": 20,
        "question": "Uma empresa de comércio eletrônico quer lançar um site de uma oferta por dia na AWS. Cada dia apresentará exatamente um produto em promoção por um período de 24 horas. A empresa quer ser capaz de lidar com milhões de solicitações a cada hora com latência de milissegundos durante os horários de pico. Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?",
        "answer": "D. Use um bucket do Amazon S3 para hospedar o conteúdo estático do site. Implante uma distribuição do Amazon CloudFront. Defina o bucket do S3 como a origem. Use as funções Amazon API Gateway e AWS Lambda para as APIs de backend. Armazene os dados no Amazon DynamoDB.",
        "options": [
            "A. Use o Amazon S3 para hospedar o site completo em diferentes buckets do S3. Adicione distribuições do Amazon CloudFront. Defina os buckets do S3 como origens para o distribuições. Armazene os dados do pedido no Amazon S3.",
            "B. Implante o site completo em instâncias do Amazon EC2 que são executadas em grupos de Auto Scaling em várias Zonas de Disponibilidade. Adicione um aplicativo Load Balancer (ALB) para distribuir o tráfego do site. Adicione outro ALB para as APIs de backend. Armazene os dados no Amazon RDS para MySQL.",
            "C. Migre o aplicativo completo para ser executado em contêineres. Hospede os contêineres no Amazon Elastic Kubernetes Service (Amazon EKS). Use o Kubernetes Cluster Autoscaler para aumentar e diminuir o número de pods para processar rajadas no tráfego. Armazene os dados no Amazon RDS para MySQL.",
            "D. Use um bucket do Amazon S3 para hospedar o conteúdo estático do site. Implante uma distribuição do Amazon CloudFront. Defina o bucket do S3 como a origem. Use as funções Amazon API Gateway e AWS Lambda para as APIs de backend. Armazene os dados no Amazon DynamoDB."
        ]
    },
    {
        "numb": 21,
        "question": "Um arquiteto de soluções está usando o Amazon S3 para projetar a arquitetura de armazenamento de um novo aplicativo de mídia digital. Os arquivos de mídia devem ser resilientes a a perda de uma Zona de Disponibilidade. Alguns arquivos são acessados ​​com frequência, enquanto outros raramente são acessados ​​em um padrão imprevisível. As soluções o arquiteto deve minimizar os custos de armazenamento e recuperação dos arquivos de mídia. Qual opção de armazenamento atende a esses requisitos?",
        "answer": "B. S3 Camadas inteligentes",
        "options": [
            "A. Padrão S3",
            "B. S3 Camadas inteligentes",
            "C. S3 Padrão-Acesso Infrequente (S3 Padrão-IA)",
            "D. S3 Uma Zona-Acesso Infrequente (S3 Uma Zona-IA)"
        ]
    },
    {
        "numb": 22,
        "question": "Uma empresa está armazenando arquivos de backup usando o armazenamento Amazon S3 Standard. Os arquivos são acessados ​​com frequência por 1 mês. No entanto, os arquivos não são acessados ​​após 1 mês. A empresa deve manter os arquivos por tempo indeterminado. Qual solução de armazenamento atenderá a esses requisitos com MAIS eficiência econômica?",
        "answer": "B. Crie uma configuração do S3 Lifecycle para fazer a transição de objetos do S3 Standard para o S3 Glacier Deep Archive após 1 mês.",
        "options": [
            "A. Configure o S3 Intelligent-Tiering para migrar objetos automaticamente.",
            "B. Crie uma configuração do S3 Lifecycle para fazer a transição de objetos do S3 Standard para o S3 Glacier Deep Archive após 1 mês.",
            "C. Crie uma configuração do ciclo de vida do S3 para fazer a transição de objetos do S3 Standard para o S3 Standard-Infrequent Access (S3 Standard-IA) após 1 mês.",
            "D. Crie uma configuração do ciclo de vida do S3 para fazer a transição de objetos do S3 Standard para o S3 One Zone-Infrequent Access (S3 One Zone-IA) após 1 mês."
        ]
    },
    {
        "numb": 23,
        "question": "Uma empresa observa um aumento nos custos do Amazon EC2 em sua fatura mais recente. A equipe de cobrança percebe um dimensionamento vertical indesejado de tipos de instância para algumas instâncias do EC2. Um arquiteto de soluções precisa criar um gráfico comparando os últimos 2 meses de custos do EC2 e executar uma análise aprofundada análise para identificar a causa raiz da escala vertical. Como o arquiteto de soluções deve gerar as informações com MENOR sobrecarga operacional?",
        "answer": "C. Use gráficos do painel de gerenciamento de custos e faturamento da AWS para comparar os custos do EC2 com base nos tipos de instância dos últimos 2 meses.",
        "options": [
            "A. Use o AWS Budgets para criar um relatório de orçamento e comparar os custos do EC2 com base nos tipos de instância.",
            "B. Use o recurso de filtragem granular do Cost Explorer para executar uma análise aprofundada dos custos do EC2 com base nos tipos de instância.",
            "C. Use gráficos do painel de gerenciamento de custos e faturamento da AWS para comparar os custos do EC2 com base nos tipos de instância dos últimos 2 meses.",
            "D. Use o AWS Cost and Usage Reports para criar um relatório e enviá-lo para um bucket do Amazon S3. Use o Amazon QuickSight com o Amazon S3 como um fonte para gerar um gráfico interativo com base em tipos de instância."
        ]
    },
    {
        "numb": 24,
        "question": "Uma empresa está projetando um aplicativo. O aplicativo usa uma função AWS Lambda para receber informações por meio do Amazon API Gateway e para armazene as informações em um banco de dados Amazon Aurora PostgreSQL. Durante a fase de prova de conceito, a empresa tem que aumentar significativamente as cotas Lambda para lidar com os altos volumes de dados que o empresa precisa carregar no banco de dados. Um arquiteto de soluções deve recomendar um novo design para melhorar a escalabilidade e minimizar o esforço de configuração. Qual solução atenderá a esses requisitos?",
        "answer": "D. Configure duas funções Lambda. Configure uma função para receber as informações. Configure a outra função para carregar as informações em o banco de dados. Integre as funções Lambda usando uma fila do Amazon Simple Queue Service (Amazon SQS).",
        "options": [
            "A. Refatore o código da função Lambda para o código Apache Tomcat que roda em instâncias Amazon EC2. Conecte o banco de dados usando nativo Drivers de conectividade de banco de dados Java (JDBC).",
            "B. Altere a plataforma de Aurora para Amazon DynamoDProvisione um cluster DynamoDB Accelerator (DAX). Use o SDK do cliente DAX para apontar as chamadas de API existentes do DynamoDB no cluster DAX.",
            "C. Configure duas funções Lambda. Configure uma função para receber as informações. Configure a outra função para carregar as informações em o banco de dados. Integre as funções Lambda usando o Amazon Simple Notification Service (Amazon SNS).",
            "D. Configure duas funções Lambda. Configure uma função para receber as informações. Configure a outra função para carregar as informações em o banco de dados. Integre as funções Lambda usando uma fila do Amazon Simple Queue Service (Amazon SQS)."
        ]
    },
    {
        "numb": 25,
        "question": "Uma empresa precisa revisar sua implantação na Nuvem AWS para garantir que seus buckets do Amazon S3 não tenham alterações de configuração não autorizadas. O que um arquiteto de soluções deve fazer para atingir esse objetivo?",
        "answer": "A. Ative o AWS Config com as regras apropriadas.",
        "options": [
            "A. Ative o AWS Config com as regras apropriadas.",
            "B. Ative o AWS Trusted Advisor com as verificações apropriadas.",
            "C. Ative o Amazon Inspector com o modelo de avaliação apropriado.",
            "D. Ative o registro de acesso ao servidor Amazon S3. Configure o Amazon EventBridge (Amazon Cloud Watch Events)."
        ]
    },
    {
        "numb": 26,
        "question": "Uma empresa está lançando um novo aplicativo e exibirá métricas de aplicativo em um painel do Amazon CloudWatch. O produto da empresa o gerente precisa acessar este painel periodicamente. O gerente de produto não tem uma conta AWS. Um arquiteto de soluções deve fornecer acesso ao gerente de produto seguindo o princípio do menor privilégio. Qual solução atenderá a esses requisitos?",
        "answer": "B. Crie um usuário IAM especificamente para o gerente de produto. Anexe a política gerenciada AWS CloudWatchReadOnlyAccess ao usuário. Compartilhar as novas credenciais de login com o gerente de produto. Compartilhe a URL do navegador do painel correto com o gerente de produto.",
        "options": [
            "A. Compartilhe o painel do console do CloudWatch. Insira o endereço de e-mail do gerente de produto e conclua as etapas de compartilhamento. Forneça um link compartilhável do painel para o gerente de produto.",
            "B. Crie um usuário IAM especificamente para o gerente de produto. Anexe a política gerenciada AWS CloudWatchReadOnlyAccess ao usuário. Compartilhar as novas credenciais de login com o gerente de produto. Compartilhe a URL do navegador do painel correto com o gerente de produto.",
            "C. Crie um usuário do IAM para os funcionários da empresa. Anexe a política gerenciada da AWS ViewOnlyAccess ao usuário do IAM. Compartilhe o novo login credenciais com o gerente de produto. Peça ao gerente de produto para navegar até o console do CloudWatch e localizar o painel pelo nome em a seção Painéis.",
            "D. Implante um servidor bastion em uma sub-rede pública. Quando o gerente de produto exigir acesso ao painel, inicie o servidor e compartilhe o RDP credenciais. No servidor bastion, certifique-se de que o navegador esteja configurado para abrir a URL do painel com credenciais AWS armazenadas em cache que tenham permissões apropriadas para visualizar o painel."
        ]
    },
    {
        "numb": 27,
        "question": "Uma empresa está migrando aplicativos para a AWS. Os aplicativos são implantados em contas diferentes. A empresa gerencia as contas centralmente usando AWS Organizations. A equipe de segurança da empresa precisa de uma solução de logon único (SSO) em todas as contas da empresa. A empresa deve continuar gerenciando os usuários e grupos em seu Microsoft Active Directory autogerenciado local. Qual solução atenderá a esses requisitos?",
        "answer": "A. Habilite o AWS Single Sign-On (AWS SSO) no console do AWS SSO. Crie uma confiança de floresta unidirecional ou uma confiança de domínio unidirecional para conectar o Microsoft Active Directory autogerenciado da empresa com AWS SSO usando o AWS Directory Service para Microsoft Active Directory.",
        "options": [
            "A. Habilite o AWS Single Sign-On (AWS SSO) no console do AWS SSO. Crie uma confiança de floresta unidirecional ou uma confiança de domínio unidirecional para conectar o Microsoft Active Directory autogerenciado da empresa com AWS SSO usando o AWS Directory Service para Microsoft Active Directory.",
            "B. Habilite o AWS Single Sign-On (AWS SSO) no console do AWS SSO. Crie um trust de floresta bidirecional para conectar o self-managed da empresa Microsoft Active Directory com AWS SSO usando o AWS Directory Service para Microsoft Active Directory.",
            "C. Use o AWS Directory Service. Crie um relacionamento de confiança bidirecional com o Microsoft Active Directory autogerenciado da empresa.",
            "D. Implante um provedor de identidade (IdP) no local. Habilite o AWS Single Sign-On (AWS SSO) no console do AWS SSO."
        ]
    },
    {
        "numb": 28,
        "question": "Uma empresa fornece um serviço de Voice over Internet Protocol (VoIP) que usa conexões UDP. O serviço consiste em instâncias do Amazon EC2 que executado em um grupo de Auto Scaling. A empresa tem implantações em várias regiões da AWS. A empresa precisa rotear usuários para a Região com a menor latência. A empresa também precisa de failover automatizado entre Regiões. Qual solução atenderá a esses requisitos?",
        "answer": "C. Implante um Network Load Balancer (NLB) e um grupo de destino associado. Associe o grupo de destino ao grupo Auto Scaling. Crie um Registro de latência do Amazon Route 53 que aponta para aliases para cada NLB. Crie uma distribuição do Amazon CloudFront que use o registro de latência como uma origem.",
        "options": [
            "A. Implante um Network Load Balancer (NLB) e um grupo de destino associado. Associe o grupo de destino ao grupo Auto Scaling. Use o NLB como um ponto final do AWS Global Accelerator em cada região.",
            "B. Implante um Application Load Balancer (ALB) e um grupo de destino associado. Associe o grupo de destino ao grupo Auto Scaling. Use o ALB como um ponto final do AWS Global Accelerator em cada região.",
            "C. Implante um Network Load Balancer (NLB) e um grupo de destino associado. Associe o grupo de destino ao grupo Auto Scaling. Crie um Registro de latência do Amazon Route 53 que aponta para aliases para cada NLB. Crie uma distribuição do Amazon CloudFront que use o registro de latência como uma origem.",
            "D. Implante um Application Load Balancer (ALB) e um grupo de destino associado. Associe o grupo de destino ao grupo Auto Scaling. Crie um registro ponderado do Amazon Route 53 que aponta para aliases para cada ALB. Implante uma distribuição do Amazon CloudFront que usa o registro ponderado registro como origem."
        ]
    },
    {
        "numb": 29,
        "question": "Uma equipe de desenvolvimento executa testes mensais intensivos em recursos em sua instância de banco de dados Amazon RDS para MySQL de uso geral com Performance Insights habilitado. O teste dura 48 horas uma vez por mês e é o único processo que usa o banco de dados. A equipe quer reduzir o custo de executando os testes sem reduzir os atributos de computação e memória da instância do banco de dados. Qual solução atende a esses requisitos com MAIS eficiência de custo?",
        "answer": "C. Crie um snapshot quando os testes forem concluídos. Encerre a instância do DB e restaure o snapshot quando necessário.",
        "options": [
            "A. Pare a instância do BD quando os testes forem concluídos. Reinicie a instância do BD quando necessário.",
            "B. Use uma política de dimensionamento automático com a instância do banco de dados para dimensionar automaticamente quando os testes forem concluídos.",
            "C. Crie um snapshot quando os testes forem concluídos. Encerre a instância do DB e restaure o snapshot quando necessário.",
            "D. Modifique a instância do BD para uma instância de baixa capacidade quando os testes forem concluídos. Modifique a instância do BD novamente quando necessário."
        ]
    },
    {
        "numb": 30,
        "question": "Uma empresa que hospeda seu aplicativo da web na AWS quer garantir todas as instâncias do Amazon EC2. Instâncias do Amazon RDS DB. e Amazon Redshift clusters são configurados com tags. A empresa quer minimizar o esforço de configurar e operar essa verificação. O que um arquiteto de soluções deve fazer para conseguir isso?",
        "answer": "A. Use as regras do AWS Config para definir e detectar recursos que não estão marcados corretamente.",
        "options": [
            "A. Use as regras do AWS Config para definir e detectar recursos que não estão marcados corretamente.",
            "B. Use o Cost Explorer para exibir recursos que não estão devidamente marcados. Marque esses recursos manualmente.",
            "C. Escreva chamadas de API para verificar todos os recursos para alocação de tags adequada. Periodicamente execute o código em uma instância EC2.",
            "D. Escreva chamadas de API para verificar todos os recursos para alocação de tags adequada. Agende uma função AWS Lambda por meio do Amazon CloudWatch para execute o código periodicamente."
        ]
    },
    {
        "numb": 31,
        "question": "Uma equipe de desenvolvimento precisa hospedar um site que será acessado por outras equipes. O conteúdo do site consiste em HTML, CSS, client-side JavaScript e imagens. Qual método é o MAIS econômico para hospedar o site?",
        "answer": "B. Crie um bucket do Amazon S3 e hospede o site nele.",
        "options": [
            "A. Coloque o site em contêineres e hospede-o no AWS Fargate.",
            "B. Crie um bucket do Amazon S3 e hospede o site nele.",
            "C. Implante um servidor web em uma instância do Amazon EC2 para hospedar o site.",
            "D. Configure um Application Load Balancer com um destino AWS Lambda que usa a estrutura Express.js."
        ]
    },
    {
        "numb": 32,
        "question": "Uma empresa executa um aplicativo web de mercado on-line na AWS. O aplicativo atende centenas de milhares de usuários durante os horários de pico. a empresa precisa de uma solução escalável e quase em tempo real para compartilhar os detalhes de milhões de transações financeiras com vários outros aplicativos internos. As transações também precisam ser processadas para remover dados confidenciais antes de serem armazenadas em um banco de dados de documentos para recuperação de baixa latência. O que um arquiteto de soluções deve recomendar para atender a esses requisitos?",
        "answer": "C. Transmita os dados das transações para o Amazon Kinesis Data Streams. Use a integração do AWS Lambda para remover dados confidenciais de cada transação e, em seguida, armazenar os dados de transações no Amazon DynamoDB. Outros aplicativos podem consumir os dados de transações do Kinesis fluxo de dados.",
        "options": [
            "A. Armazene os dados das transações no Amazon DynamoDB. Configure uma regra no DynamoDB para remover dados confidenciais de cada transação escrever. Use o DynamoDB Streams para compartilhar os dados de transações com outros aplicativos.",
            "B. Transmita os dados de transações para o Amazon Kinesis Data Firehose para armazenar dados no Amazon DynamoDB e no Amazon S3. Use o AWS Lambda integração com o Kinesis Data Firehose para remover dados sensíveis. Outros aplicativos podem consumir os dados armazenados no Amazon S3.",
            "C. Transmita os dados das transações para o Amazon Kinesis Data Streams. Use a integração do AWS Lambda para remover dados confidenciais de cada transação e, em seguida, armazenar os dados de transações no Amazon DynamoDB. Outros aplicativos podem consumir os dados de transações do Kinesis fluxo de dados.",
            "D. Armazene os dados de transações em lote no Amazon S3 como arquivos. Use o AWS Lambda para processar cada arquivo e remover dados confidenciais antes atualizando os arquivos no Amazon S3. A função Lambda então armazena os dados no Amazon DynamoDB. Outros aplicativos podem consumir arquivos de transação armazenados no Amazon S3."
        ]
    },
    {
        "numb": 33,
        "question": "Uma empresa hospeda seus aplicativos multicamadas na AWS. Para conformidade, governança, auditoria e segurança, a empresa deve rastrear a configuração alterações em seus recursos da AWS e registrar um histórico de chamadas de API feitas a esses recursos. O que um arquiteto de soluções deve fazer para atender a esses requisitos?",
        "answer": "B. Use o AWS Config para rastrear alterações de configuração e o AWS CloudTrail para registrar chamadas de API.",
        "options": [
            "A. Use o AWS CloudTrail para rastrear alterações de configuração e o AWS Config para registrar chamadas de API.",
            "B. Use o AWS Config para rastrear alterações de configuração e o AWS CloudTrail para registrar chamadas de API.",
            "C. Use o AWS Config para rastrear alterações de configuração e o Amazon CloudWatch para registrar chamadas de API.",
            "D. Use o AWS CloudTrail para rastrear alterações de configuração e o Amazon CloudWatch para registrar chamadas de API."
        ]
    },
    {
        "numb": 34,
        "question": "Uma empresa está se preparando para lançar um aplicativo da web voltado ao público na Nuvem AWS. A arquitetura consiste em instâncias do Amazon EC2 dentro de um VPC por trás de um Elastic Load Balancer (ELB). Um serviço de terceiros é usado para o DNS. O arquiteto de soluções da empresa deve recomendar um solução para detectar e proteger contra ataques DDoS em larga escala. Qual solução atende a esses requisitos?",
        "answer": "D. Habilite o AWS Shield Advanced e atribua o ELB a ele.",
        "options": [
            "A. Habilite o Amazon GuardDuty na conta.",
            "B. Habilite o Amazon Inspector nas instâncias do EC2.",
            "C. Habilite o AWS Shield e atribua o Amazon Route 53 a ele.",
            "D. Habilite o AWS Shield Advanced e atribua o ELB a ele."
        ]
    },
    {
        "numb": 35,
        "question": "Uma empresa está construindo um aplicativo na Nuvem AWS. O aplicativo armazenará dados em buckets do Amazon S3 em duas regiões da AWS. A empresa deve usar uma chave gerenciada pelo cliente do AWS Key Management Service (AWS KMS) para criptografar todos os dados armazenados nos buckets do S3. Os dados em ambos os buckets S3 devem ser criptografados e descriptografados com a mesma chave KMS. Os dados e a chave devem ser armazenados em cada uma das duas Regiões. Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?",
        "answer": "C. Crie uma chave KMS gerenciada pelo cliente e um bucket S3 em cada região. Configure os buckets S3 para usar criptografia do lado do servidor com Chaves de criptografia gerenciadas pelo Amazon S3 (SSE-S3). Configure a replicação entre os buckets do S3.",
        "options": [
            "A. Crie um bucket S3 em cada região. Configure os buckets S3 para usar criptografia do lado do servidor com chaves de criptografia gerenciadas pelo Amazon S3 (SSE-S3). Configure a replicação entre os buckets S3.",
            "B. Crie uma chave KMS multirregional gerenciada pelo cliente. Crie um bucket S3 em cada região. Configure a replicação entre os buckets S3. Configure o aplicativo para usar a chave KMS com criptografia do lado do cliente.",
            "C. Crie uma chave KMS gerenciada pelo cliente e um bucket S3 em cada região. Configure os buckets S3 para usar criptografia do lado do servidor com Chaves de criptografia gerenciadas pelo Amazon S3 (SSE-S3). Configure a replicação entre os buckets do S3.",
            "D. Crie uma chave KMS gerenciada pelo cliente e um bucket S3 em cada região. Configure os buckets S3 para usar criptografia do lado do servidor com AWS Chaves KMS (SSE-KMS). Configure a replicação entre os buckets S3."
        ]
    },
    {
        "numb": 36,
        "question": "Uma empresa lançou recentemente uma variedade de novas cargas de trabalho em instâncias do Amazon EC2 em sua conta AWS. A empresa precisa criar uma estratégia para acessar e administrar as instâncias remotamente e com segurança. A empresa precisa implementar um processo repetível que funcione com AWS nativo serviços e segue o AWS Well-Architected Framework. Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?",
        "answer": "B. Anexe a função IAM apropriada a cada instância existente e nova instância. Use o AWS Systems Manager Session Manager para estabelecer uma sessão SSH remota.",
        "options": [
            "A. Use o console serial do EC2 para acessar diretamente a interface do terminal de cada instância para administração.",
            "B. Anexe a função IAM apropriada a cada instância existente e nova instância. Use o AWS Systems Manager Session Manager para estabelecer uma sessão SSH remota.",
            "C. Crie um par de chaves SSH administrativas. Carregue a chave pública em cada instância EC2. Implante um bastion host em uma sub-rede pública para fornecer um túnel para administração de cada instância.",
            "D. Estabeleça uma conexão VPN AWS ​​Site-to-Site. Instrua os administradores a usar suas máquinas locais no local para se conectar diretamente ao instâncias usando chaves SSH através do túnel VPN."
        ]
    },
    {
        "numb": 37,
        "question": "Uma empresa está hospedando um site estático no Amazon S3 e está usando o Amazon Route 53 para DNS. O site está enfrentando uma demanda crescente de ao redor do mundo. A empresa deve diminuir a latência para os usuários que acessam o site. Qual solução atende a esses requisitos com MAIS eficiência de custo?",
        "answer": "C. Adicione uma distribuição do Amazon CloudFront na frente do bucket do S3. Edite as entradas do Route 53 para apontar para a distribuição do CloudFront.",
        "options": [
            "A. Replique o bucket S3 que contém o site para todas as regiões da AWS. Adicione entradas de roteamento de geolocalização do Route 53.",
            "B. Provisione aceleradores no AWS Global Accelerator. Associe os endereços IP fornecidos ao bucket S3. Edite as entradas do Route 53 para apontam para os endereços IP dos aceleradores.",
            "C. Adicione uma distribuição do Amazon CloudFront na frente do bucket do S3. Edite as entradas do Route 53 para apontar para a distribuição do CloudFront.",
            "D. Habilite o S3 Transfer Acceleration no bucket. Edite as entradas do Route 53 para apontar para o novo endpoint."
        ]
    },
    {
        "numb": 38,
        "question": "Uma empresa mantém um repositório pesquisável de itens em seu site. Os dados são armazenados em uma tabela de banco de dados Amazon RDS for MySQL que contém mais de 10 milhões de linhas. O banco de dados tem 2 TB de armazenamento SSD de uso geral. Há milhões de atualizações desses dados a cada dia através do site da empresa. A empresa notou que algumas operações de inserção estão demorando 10 segundos ou mais. A empresa determinou que o armazenamento do banco de dados o desempenho é o problema. Qual solução aborda esse problema de desempenho?",
        "answer": "B. Altere a instância do banco de dados para uma classe de instância com memória otimizada.",
        "options": [
            "A. Altere o tipo de armazenamento para SSD IOPS provisionado.",
            "B. Altere a instância do banco de dados para uma classe de instância com memória otimizada.",
            "C. Altere a instância do banco de dados para uma classe de instância de desempenho expansível.",
            "D. Habilite réplicas de leitura RDS Multi-AZ com replicação assíncrona nativa do MySQL."
        ]
    },
    {
        "numb": 39,
        "question": "Uma empresa tem milhares de dispositivos de ponta que coletivamente geram 1 TB de alertas de status por dia. Cada alerta tem aproximadamente 2 KB de tamanho. O arquiteto de soluções precisa implementar uma solução para ingerir e armazenar os alertas para análise futura. A empresa quer uma solução altamente disponível. No entanto, a empresa precisa minimizar custos e não quer gerenciar custos adicionais infraestrutura. Além disso, a empresa quer manter 14 dias de dados disponíveis para análise imediata e arquivar quaisquer dados com mais de 14 dias. Qual é a solução operacional MAIS eficiente que atende a esses requisitos?",
        "answer": "A. Crie um fluxo de entrega do Amazon Kinesis Data Firehose para ingerir os alertas. Configure o fluxo do Kinesis Data Firehose para entregar os alertas para um bucket do Amazon S3. Configure uma configuração do S3 Lifecycle para fazer a transição de dados para o Amazon S3 Glacier após 14 dias.",
        "options": [
            "A. Crie um fluxo de entrega do Amazon Kinesis Data Firehose para ingerir os alertas. Configure o fluxo do Kinesis Data Firehose para entregar os alertas para um bucket do Amazon S3. Configure uma configuração do S3 Lifecycle para fazer a transição de dados para o Amazon S3 Glacier após 14 dias.",
            "B. Inicie instâncias do Amazon EC2 em duas Availability Zones e coloque-as atrás de um Elastic Load Balancer para ingerir os alertas. Crie um script nas instâncias do EC2 que armazenarão os alertas em um bucket do Amazon S3. Configure uma configuração do S3 Lifecycle para fazer a transição de dados para Amazon S3 Glacier após 14 dias.",
            "C. Crie um fluxo de entrega do Amazon Kinesis Data Firehose para ingerir os alertas. Configure o fluxo do Kinesis Data Firehose para entregar os alertas. alertas para um cluster do Amazon OpenSearch Service (Amazon Elasticsearch Service). Configure o Amazon OpenSearch Service (Amazon Cluster do Elasticsearch Service) para tirar instantâneos manuais todos os dias e excluir dados do cluster com mais de 14 dias.",
            "D. Crie uma fila padrão do Amazon Simple Queue Service (Amazon SQS) para ingerir os alertas e defina o período de retenção de mensagens para 14 dias. Configure os consumidores para pesquisar a fila SQS, verificar a idade da mensagem e analisar os dados da mensagem conforme necessário. Se a mensagem for Com 14 dias, o consumidor deve copiar a mensagem para um bucket do Amazon S3 e excluir a mensagem da fila do SQS."
        ]
    },
    {
        "numb": 40,
        "question": "O aplicativo de uma empresa integra-se com várias fontes de software como serviço (SaaS) para coleta de dados. A empresa executa o Amazon EC2 instâncias para receber os dados e carregá-los em um bucket do Amazon S3 para análise. A mesma instância do EC2 que recebe e carrega os dados os dados também enviam uma notificação ao usuário quando um upload é concluído. A empresa notou um desempenho lento do aplicativo e quer melhorar o desempenho o máximo possível. Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?",
        "answer": "B. Crie um fluxo do Amazon AppFlow para transferir dados entre cada fonte SaaS e o bucket S3. Configure uma notificação de evento S3 para enviar eventos para um tópico do Amazon Simple Notification Service (Amazon SNS) quando o upload para o bucket do S3 estiver concluído.",
        "options": [
            "A. Crie um grupo de Auto Scaling para que as instâncias do EC2 possam ser dimensionadas horizontalmente. Configure uma notificação de evento do S3 para enviar eventos para um Amazon Simple Tópico do Serviço de Notificação (Amazon SNS) quando o upload para o bucket do S3 for concluído.",
            "B. Crie um fluxo do Amazon AppFlow para transferir dados entre cada fonte SaaS e o bucket S3. Configure uma notificação de evento S3 para enviar eventos para um tópico do Amazon Simple Notification Service (Amazon SNS) quando o upload para o bucket do S3 estiver concluído.",
            "C. Crie uma regra do Amazon EventBridge (Amazon CloudWatch Events) para cada fonte SaaS para enviar dados de saída. Configure o bucket S3 como o alvo da regra. Crie uma segunda regra EventBridge (Cloud Watch Events) para enviar eventos quando o upload para o bucket S3 for concluído. Configure um tópico do Amazon Simple Notification Service (Amazon SNS) como alvo da segunda regra.",
            "D. Crie um contêiner Docker para usar em vez de uma instância EC2. Hospede o aplicativo em contêiner no Amazon Elastic Container Service (Amazon ECS). Configure o Amazon CloudWatch Container Insights para enviar eventos para um Amazon Simple Notification Service (Amazon SNS) tópico quando o upload para o bucket S3 estiver concluído."
        ]
    },
    {
        "numb": 41,
        "question": "Uma empresa executa um aplicativo de processamento de imagem altamente disponível em instâncias do Amazon EC2 em uma única VPC. As instâncias do EC2 são executadas dentro de várias sub-redes em várias Zonas de Disponibilidade. As instâncias EC2 não se comunicam entre si. No entanto, as instâncias EC2 baixam imagens do Amazon S3 e fazer upload de imagens para o Amazon S3 por meio de um único gateway NAT. A empresa está preocupada com as taxas de transferência de dados. Qual é a maneira MAIS econômica para a empresa evitar cobranças de transferência de dados regionais?",
        "answer": "C. Implante um endpoint de VPC de gateway para o Amazon S3.",
        "options": [
            "A. Inicie o gateway NAT em cada Zona de Disponibilidade.",
            "B. Substitua o gateway NAT por uma instância NAT.",
            "C. Implante um endpoint de VPC de gateway para o Amazon S3.",
            "D. Provisione um host dedicado EC2 para executar as instâncias EC2."
        ]
    },
    {
        "numb": 42,
        "question": "Uma empresa tem um aplicativo local que gera uma grande quantidade de dados sensíveis ao tempo que são armazenados em backup no Amazon S3. O aplicativo cresceu e há reclamações de usuários sobre limitações de largura de banda da Internet. Um arquiteto de soluções precisa projetar uma solução de longo prazo que permite backups oportunos no Amazon S3 e com impacto mínimo na conectividade de internet para usuários internos. Qual solução atende a esses requisitos?",
        "answer": "B. Estabeleça uma nova conexão AWS Direct Connect e direcione o tráfego de backup por meio dessa nova conexão.",
        "options": [
            "A. Estabeleça conexões VPN da AWS e faça proxy de todo o tráfego por meio de um ponto de extremidade do gateway VPC.",
            "B. Estabeleça uma nova conexão AWS Direct Connect e direcione o tráfego de backup por meio dessa nova conexão.",
            "C. Peça dispositivos AWS Snowball diariamente. Carregue os dados nos dispositivos Snowball e retorne os dispositivos para a AWS todos os dias.",
            "D. Envie um ticket de suporte por meio do AWS Management Console. Solicite a remoção dos limites de serviço do S3 da conta."
        ]
    },
    {
        "numb": 43,
        "question": "Uma empresa tem um aplicativo que fornece serviços de marketing para lojas. Os serviços são baseados em compras anteriores de clientes da loja. as lojas carregam dados de transações para a empresa por meio de SFTP, e os dados são processados ​​e analisados ​​para gerar novas ofertas de marketing. Alguns de os arquivos podem exceder 200 GB de tamanho. Recentemente, a empresa descobriu que algumas lojas enviaram arquivos que contêm informações de identificação pessoal (PII) que não deveriam foram incluídos. A empresa quer que os administradores sejam alertados se PII for compartilhado novamente. A empresa também quer automatizar a correção. O que um arquiteto de soluções deve fazer para atender a esses requisitos com o MENOR esforço de desenvolvimento?",
        "answer": "B. Use um bucket do Amazon S3 como um ponto de transferência seguro. Use o Amazon Macie para escanear os objetos no bucket. Se os objetos contiverem PII, use Amazon Simple Notification Service (Amazon SNS) para acionar uma notificação aos administradores para remover os objetos que contêm PII.",
        "options": [
            "A. Use um bucket do Amazon S3 como um ponto de transferência seguro. Use o Amazon Inspector para escanear os objetos no bucket. Se os objetos contiverem PII, acione uma política de ciclo de vida S3 para remover os objetos que contêm PII.",
            "B. Use um bucket do Amazon S3 como um ponto de transferência seguro. Use o Amazon Macie para escanear os objetos no bucket. Se os objetos contiverem PII, use Amazon Simple Notification Service (Amazon SNS) para acionar uma notificação aos administradores para remover os objetos que contêm PII.",
            "C. Implemente algoritmos de varredura personalizados em uma função AWS Lambda. Acione a função quando os objetos forem carregados no bucket. Se os objetos contêm PII, use o Amazon Simple Notification Service (Amazon SNS) para acionar uma notificação aos administradores para remover os objetos que contêm PII.",
            "D. Implemente algoritmos de varredura personalizados em uma função AWS Lambda. Acione a função quando os objetos forem carregados no bucket. Se objetos contêm PII, use o Amazon Simple Email Service (Amazon SES) para acionar uma notificação aos administradores e acionar um S3 Lifecycle política para remover as carnes que contêm PII."
        ]
    },
    {
        "numb": 44,
        "question": "Uma empresa precisa de capacidade garantida do Amazon EC2 em três Zonas de Disponibilidade específicas em uma Região AWS específica para um evento futuro que irá última 1 semana. O que a empresa deve fazer para garantir a capacidade do EC2?",
        "answer": "D. Crie uma Reserva de Capacidade Sob Demanda que especifique a Região e três Zonas de Disponibilidade necessárias.",
        "options": [
            "A. Compre Instâncias Reservadas que especifiquem a Região necessária.",
            "B. Crie uma Reserva de Capacidade Sob Demanda que especifique a Região necessária.",
            "C. Compre Instâncias Reservadas que especifiquem a Região e três Zonas de Disponibilidade necessárias.",
            "D. Crie uma Reserva de Capacidade Sob Demanda que especifique a Região e três Zonas de Disponibilidade necessárias."
        ]
    },
    {
        "numb": 45,
        "question": "O site de uma empresa usa uma loja de instâncias do Amazon EC2 para seu catálogo de itens. A empresa quer ter certeza de que o catálogo é altamente disponível e que o catálogo esteja armazenado em um local durável. O que um arquiteto de soluções deve fazer para atender a esses requisitos?",
        "answer": "A. Mova o catálogo para o Amazon ElastiCache para Redis.",
        "options": [
            "A. Mova o catálogo para o Amazon ElastiCache para Redis.",
            "B. Implante uma instância EC2 maior com um armazenamento de instâncias maior.",
            "C. Mova o catálogo do armazenamento de instâncias para o Amazon S3 Glacier Deep Archive.",
            "D. Mova o catálogo para um sistema de arquivos Amazon Elastic File System (Amazon EFS)."
        ]
    },
    {
        "numb": 46,
        "question": "Uma empresa armazena arquivos de transcrição de chamadas mensalmente. Os usuários acessam os arquivos aleatoriamente dentro de 1 ano da chamada, mas os usuários acessam os arquivos raramente após 1 ano. A empresa quer otimizar sua solução dando aos usuários a capacidade de consultar e recuperar arquivos com menos de 1 ano o mais rápido possível. Um atraso na recuperação de arquivos mais antigos é aceitável. Qual solução atenderá a esses requisitos com MAIS eficiência de custos?",
        "answer": "C. Armazene arquivos individuais com tags no armazenamento Amazon S3 Standard. Armazene metadados de pesquisa para cada arquivo no armazenamento Amazon S3 Standard. Use as políticas do S3 Lifecycle para mover os arquivos para o S3 Glacier Instant Retrieval após 1 ano. Consulte e recupere os arquivos pesquisando metadados do Amazon S3.",
        "options": [
            "A. Armazene arquivos individuais com tags no Amazon S3 Glacier Instant Retrieval. Consulte as tags para recuperar os arquivos do S3 Glacier Instant Retrieval.",
            "B. Armazene arquivos individuais no Amazon S3 Intelligent-Tiering. Use as políticas do S3 Lifecycle para mover os arquivos para o S3 Glacier Flexible Retrieval após 1 ano. Consulte e recupere os arquivos que estão no Amazon S3 usando o Amazon Athena. Consulte e recupere os arquivos que estão no S3 Glacier usando o S3 Seleção de geleiras.",
            "C. Armazene arquivos individuais com tags no armazenamento Amazon S3 Standard. Armazene metadados de pesquisa para cada arquivo no armazenamento Amazon S3 Standard. Use as políticas do S3 Lifecycle para mover os arquivos para o S3 Glacier Instant Retrieval após 1 ano. Consulte e recupere os arquivos pesquisando metadados do Amazon S3.",
            "D. Armazene arquivos individuais no armazenamento Amazon S3 Standard. Use as políticas do S3 Lifecycle para mover os arquivos para o S3 Glacier Deep Archive após 1 ano. Armazene metadados de pesquisa no Amazon RDS. Consulte os arquivos do Amazon RDS. Recupere os arquivos do S3 Glacier Deep Archive."
        ]
    },
    {
        "numb": 47,
        "question": "Uma empresa tem uma carga de trabalho de produção que roda em 1.000 instâncias do Amazon EC2 Linux. A carga de trabalho é alimentada por software de terceiros. a empresa precisa corrigir o software de terceiros em todas as instâncias do EC2 o mais rápido possível para corrigir uma vulnerabilidade crítica de segurança. O que um arquiteto de soluções deve fazer para atender a esses requisitos?",
        "answer": "D. Use o AWS Systems Manager Run Command para executar um comando personalizado que aplica o patch a todas as instâncias do EC2.",
        "options": [
            "A. Crie uma função do AWS Lambda para aplicar o patch a todas as instâncias do EC2.",
            "B. Configure o AWS Systems Manager Patch Manager para aplicar o patch a todas as instâncias do EC2.",
            "C. Agende uma janela de manutenção do AWS Systems Manager para aplicar o patch a todas as instâncias do EC2.",
            "D. Use o AWS Systems Manager Run Command para executar um comando personalizado que aplica o patch a todas as instâncias do EC2."
        ]
    },
    {
        "numb": 48,
        "question": "Uma empresa quer migrar seu aplicativo local para a AWS. O aplicativo produz arquivos de saída que variam em tamanho de dezenas de gigabytes a centenas de terabytes. Os dados do aplicativo devem ser armazenados em uma estrutura de sistema de arquivos padrão. A empresa quer uma solução que seja escalável automaticamente. é altamente disponível e requer sobrecarga operacional mínima. Qual solução atenderá a esses requisitos?",
        "answer": "C. Migre o aplicativo para instâncias do Amazon EC2 em um grupo de Auto Scaling Multi-AZ. Use o Amazon Elastic File System (Amazon EFS) para armazenar.",
        "options": [
            "A. Migre o aplicativo para ser executado como contêineres no Amazon Elastic Container Service (Amazon ECS). Use o Amazon S3 para armazenamento.",
            "B. Migre o aplicativo para ser executado como contêineres no Amazon Elastic Kubernetes Service (Amazon EKS). Use o Amazon Elastic Block Store (Amazon EBS) para armazenamento.",
            "C. Migre o aplicativo para instâncias do Amazon EC2 em um grupo de Auto Scaling Multi-AZ. Use o Amazon Elastic File System (Amazon EFS) para armazenar.",
            "D. Migre o aplicativo para instâncias do Amazon EC2 em um grupo de Auto Scaling Multi-AZ. Use o Amazon Elastic Block Store (Amazon EBS) para armazenar."
        ]
    },
    {
        "numb": 49,
        "question": "Uma empresa precisa armazenar seus registros contábeis no Amazon S3. Os registros devem estar imediatamente acessíveis por 1 ano e depois devem ser arquivado por mais 9 anos. Ninguém na empresa, incluindo usuários administrativos e usuários root, pode excluir os registros durante todo o período de 10 anos. Os registros devem ser armazenados com a máxima resiliência. Qual solução atenderá a esses requisitos?",
        "answer": "C. Use uma política de ciclo de vida S3 para fazer a transição dos registros do S3 Standard para o S3 Glacier Deep Archive após 1 ano. Use o S3 Object Lock em modo de conformidade por um período de 10 anos.",
        "options": [
            "A. Armazene os registros no S3 Glacier por todo o período de 10 anos. Use uma política de controle de acesso para negar a exclusão dos registros por um período de 10 anos.",
            "B. Armazene os registros usando o S3 Intelligent-Tiering. Use uma política do IAM para negar a exclusão dos registros. Após 10 anos, altere a política do IAM para permitir exclusão.",
            "C. Use uma política de ciclo de vida S3 para fazer a transição dos registros do S3 Standard para o S3 Glacier Deep Archive após 1 ano. Use o S3 Object Lock em modo de conformidade por um período de 10 anos.",
            "D. Use uma política de ciclo de vida S3 para fazer a transição dos registros do S3 Standard para o S3 One Zone-Infrequent Access (S3 One Zone-IA) após 1 ano. Use Bloqueio de objeto S3 no modo de governança por um período de 10 anos."
        ]
    },
    {
        "numb": 50,
        "question": "Uma empresa executa várias cargas de trabalho do Windows na AWS. Os funcionários da empresa usam compartilhamentos de arquivos do Windows hospedados em dois Amazon EC2 instâncias. Os compartilhamentos de arquivos sincronizam dados entre si e mantêm cópias duplicadas. A empresa quer um ambiente altamente disponível e solução de armazenamento durável que preserva a maneira como os usuários acessam os arquivos atualmente. O que um arquiteto de soluções deve fazer para atender a esses requisitos?",
        "answer": "C. Estenda o ambiente de compartilhamento de arquivos para o Amazon FSx para Windows File Server com uma configuração Multi-AZ. Migre todos os dados para o FSx para Servidor de arquivos do Windows.",
        "options": [
            "A. Migre todos os dados para o Amazon S3. Configure a autenticação do IAM para que os usuários acessem os arquivos.",
            "B. Configure um Amazon S3 File Gateway. Monte o S3 File Gateway nas instâncias EC2 existentes.",
            "C. Estenda o ambiente de compartilhamento de arquivos para o Amazon FSx para Windows File Server com uma configuração Multi-AZ. Migre todos os dados para o FSx para Servidor de arquivos do Windows.",
            "D. Estenda o ambiente de compartilhamento de arquivos para o Amazon Elastic File System (Amazon EFS) com uma configuração Multi-AZ. Migre todos os dados para Amazon EFS."
        ]
    },
    {
        "numb": 51,
        "question": "Um arquiteto de soluções está desenvolvendo uma arquitetura VPC que inclui várias sub-redes. A arquitetura hospedará aplicativos que usam Amazon EC2 instâncias e instâncias do Amazon RDS DB. A arquitetura consiste em seis sub-redes em duas Zonas de Disponibilidade. Cada Zona de Disponibilidade inclui uma sub-rede pública, uma sub-rede privada e uma sub-rede dedicada para bancos de dados. Somente instâncias EC2 que são executadas nas sub-redes privadas podem ter acesso ao Bancos de dados RDS. Qual solução atenderá a esses requisitos?",
        "answer": "C. Crie um grupo de segurança que permita tráfego de entrada do grupo de segurança que é atribuído a instâncias nas sub-redes privadas. Anexe o grupo de segurança para as instâncias do banco de dados.",
        "options": [
            "A. Crie uma nova tabela de rotas que exclua a rota para os blocos CIDR das sub-redes públicas. Associe a tabela de rotas às sub-redes do banco de dados.",
            "B. Crie um grupo de segurança que negue tráfego de entrada do grupo de segurança que é atribuído a instâncias nas sub-redes públicas. Anexe o grupo de segurança para as instâncias do banco de dados.",
            "C. Crie um grupo de segurança que permita tráfego de entrada do grupo de segurança que é atribuído a instâncias nas sub-redes privadas. Anexe o grupo de segurança para as instâncias do banco de dados.",
            "D. Crie uma nova conexão de peering entre as sub-redes públicas e as sub-redes privadas. Crie uma conexão de peering diferente entre as sub-redes privadas e sub-redes de banco de dados."
        ]
    },
    {
        "numb": 52,
        "question": "Uma empresa registrou seu nome de domínio no Amazon Route 53. A empresa usa o Amazon API Gateway na região ca-central-1 como um domínio público interface para suas APIs de microsserviços de backend. Serviços de terceiros consomem as APIs com segurança. A empresa quer projetar sua URL de API Gateway com o nome de domínio da empresa e o certificado correspondente para que os serviços de terceiros possam usar HTTPS. Qual solução atenderá a esses requisitos?",
        "answer": "D. Crie um endpoint do Regional API Gateway. Associe o endpoint do API Gateway ao nome de domínio da empresa. Importe o público certificado associado ao nome de domínio da empresa no AWS Certificate Manager (ACM) na região us-east-1. Anexe o certificado a APIs do API Gateway. Crie registros DNS do Route 53 com o nome de domínio da empresa. Aponte um registro A para o nome de domínio da empresa.",
        "options": [
            "A. Crie variáveis ​​de estágio no API Gateway com Name=\"Endpoint-URL\" e Value=\"Company Domain Name\" para substituir o URL padrão. Importar o certificado público associado ao nome de domínio da empresa no AWS Certificate Manager (ACM).",
            "B. Crie registros DNS do Route 53 com o nome de domínio da empresa. Aponte o registro de alias para o ponto de extremidade do estágio Regional API Gateway. Importar o certificado público associado ao nome de domínio da empresa no AWS Certificate Manager (ACM) na região us-east-1.",
            "C. Crie um endpoint do Regional API Gateway. Associe o endpoint do API Gateway ao nome de domínio da empresa. Importe o público certificado associado ao nome de domínio da empresa no AWS Certificate Manager (ACM) na mesma região. Anexe o certificado ao Ponto de extremidade do API Gateway. Configure o Route 53 para rotear o tráfego para o ponto de extremidade do API Gateway.",
            "D. Crie um endpoint do Regional API Gateway. Associe o endpoint do API Gateway ao nome de domínio da empresa. Importe o público certificado associado ao nome de domínio da empresa no AWS Certificate Manager (ACM) na região us-east-1. Anexe o certificado a APIs do API Gateway. Crie registros DNS do Route 53 com o nome de domínio da empresa. Aponte um registro A para o nome de domínio da empresa."
        ]
    },
    {
        "numb": 53,
        "question": "Uma empresa está executando um site popular de mídia social. O site dá aos usuários a capacidade de carregar imagens para compartilhar com outros usuários. a empresa quer ter certeza de que as imagens não contenham conteúdo inapropriado. A empresa precisa de uma solução que minimize o desenvolvimento esforço. O que um arquiteto de soluções deve fazer para atender a esses requisitos?",
        "answer": "B. Use o Amazon Rekognition para detectar conteúdo inapropriado. Use revisão humana para previsões de baixa confiança.",
        "options": [
            "A. Use o Amazon Comprehend para detectar conteúdo inapropriado. Use revisão humana para previsões de baixa confiança.",
            "B. Use o Amazon Rekognition para detectar conteúdo inapropriado. Use revisão humana para previsões de baixa confiança.",
            "C. Use o Amazon SageMaker para detectar conteúdo inapropriado. Use a verdade básica para rotular previsões de baixa confiança.",
            "D. Use o AWS Fargate para implantar um modelo de machine learning personalizado para detectar conteúdo inapropriado. Use a verdade básica para rotular baixa confiança previsões."
        ]
    },
    {
        "numb": 54,
        "question": "Uma empresa quer executar seus aplicativos críticos em contêineres para atender aos requisitos de escalabilidade e disponibilidade. A empresa prefere se concentrar na manutenção dos aplicativos críticos. A empresa não quer ser responsável pelo provisionamento e gerenciamento dos aplicativos subjacentes infraestrutura que executa a carga de trabalho em contêiner. O que um arquiteto de soluções deve fazer para atender a esses requisitos?",
        "answer": "C. Use o Amazon Elastic Container Service (Amazon ECS) no AWS Fargate.",
        "options": [
            "A. Use instâncias do Amazon EC2 e instale o Docker nas instâncias.",
            "B. Use o Amazon Elastic Container Service (Amazon ECS) em nós de trabalho do Amazon EC2.",
            "C. Use o Amazon Elastic Container Service (Amazon ECS) no AWS Fargate.",
            "D. Use instâncias do Amazon EC2 de uma Amazon Machine Image (AMI) otimizada pelo Amazon Elastic Container Service (Amazon ECS)."
        ]
    },
    {
        "numb": 55,
        "question": "Uma empresa hospeda mais de 300 sites e aplicativos globais. A empresa requer uma plataforma para analisar mais de 30 TB de fluxo de cliques dados todos os dias. O que um arquiteto de soluções deve fazer para transmitir e processar os dados do fluxo de cliques?",
        "answer": "D. Colete os dados do Amazon Kinesis Data Streams. Use o Amazon Kinesis Data Firehose para transmitir os dados para um data lake do Amazon S3. Carregue os dados no Amazon Redshift para análise.",
        "options": [
            "A. Projete um AWS Data Pipeline para arquivar os dados em um bucket do Amazon S3 e executar um cluster do Amazon EMR com os dados para gerar analítica.",
            "B. Crie um grupo de dimensionamento automático de instâncias do Amazon EC2 para processar os dados e enviá-los para um data lake do Amazon S3 para o Amazon Redshift usar para análise.",
            "C. Armazene os dados em cache no Amazon CloudFront. Armazene os dados em um bucket do Amazon S3. Quando um objeto é adicionado ao bucket do S3, execute um AWS Função lambda para processar os dados para análise.",
            "D. Colete os dados do Amazon Kinesis Data Streams. Use o Amazon Kinesis Data Firehose para transmitir os dados para um data lake do Amazon S3. Carregue os dados no Amazon Redshift para análise."
        ]
    },
    {
        "numb": 56,
        "question": "Uma empresa tem um site hospedado na AWS. O site está por trás de um Application Load Balancer (ALB) que está configurado para lidar com HTTP e HTTPS separadamente. A empresa quer encaminhar todas as solicitações para o site para que as solicitações usem HTTPS. O que um arquiteto de soluções deve fazer para atender a esse requisito?",
        "answer": "C. Crie uma regra de ouvinte no ALB para redirecionar o tráfego HTTP para HTTPS.",
        "options": [
            "A. Atualize a ACL de rede do ALB para aceitar somente tráfego HTTPS.",
            "B. Crie uma regra que substitua o HTTP na URL por HTTPS.",
            "C. Crie uma regra de ouvinte no ALB para redirecionar o tráfego HTTP para HTTPS.",
            "D. Substitua o ALB por um balanceador de carga de rede configurado para usar a indicação de nome do servidor (SNI)."
        ]
    },
    {
        "numb": 57,
        "question": "Uma empresa está desenvolvendo um aplicativo web de duas camadas na AWS. Os desenvolvedores da empresa implantaram o aplicativo em um Amazon EC2 instância que se conecta diretamente a um banco de dados Amazon RDS de backend. A empresa não deve codificar credenciais de banco de dados no aplicativo. O a empresa também deve implementar uma solução para rotacionar automaticamente as credenciais do banco de dados regularmente. Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?",
        "answer": "C. Armazene as credenciais do banco de dados como um segredo no AWS Secrets Manager. Ative a rotação automática para o segredo. Anexe o necessário permissão para a função EC2 conceder acesso ao segredo.",
        "options": [
            "A. Armazene as credenciais do banco de dados nos metadados da instância. Use as regras do Amazon EventBridge (Amazon CloudWatch Events) para executar uma Função do AWS Lambda que atualiza as credenciais do RDS e os metadados da instância ao mesmo tempo.",
            "B. Armazene as credenciais do banco de dados em um arquivo de configuração em um bucket criptografado do Amazon S3. Use o Amazon EventBridge (Amazon CloudWatch Regras de eventos) para executar uma função AWS Lambda agendada que atualiza as credenciais do RDS e as credenciais no arquivo de configuração no mesmo tempo. Use o S3 Versioning para garantir a capacidade de retornar aos valores anteriores.",
            "C. Armazene as credenciais do banco de dados como um segredo no AWS Secrets Manager. Ative a rotação automática para o segredo. Anexe o necessário permissão para a função EC2 conceder acesso ao segredo.",
            "D. Armazene as credenciais do banco de dados como parâmetros criptografados no AWS Systems Manager Parameter Store. Ative a rotação automática para o parâmetros criptografados. Anexe a permissão necessária à função EC2 para conceder acesso aos parâmetros criptografados."
        ]
    },
    {
        "numb": 58,
        "question": "Uma empresa está implantando um novo aplicativo web público na AWS. O aplicativo será executado por trás de um Application Load Balancer (ALB). O aplicativo precisa ser criptografado na borda com um certificado SSL/TLS emitido por uma autoridade de certificação externa (CA). O certificado deve ser rotacionado a cada ano antes do certificado expirar. O que um arquiteto de soluções deve fazer para atender a esses requisitos?",
        "answer": "D. Use o AWS Certificate Manager (ACM) para importar um certificado SSL/TLS. Aplique o certificado ao ALB. Use o Amazon EventBridge (Amazon CloudWatch Events) para enviar uma notificação quando o certificado estiver próximo da expiração. Gire o certificado manualmente.",
        "options": [
            "A. Use o AWS Certificate Manager (ACM) para emitir um certificado SSL/TLS. Aplique o certificado ao ALB. Use o recurso de renovação gerenciada para girar automaticamente o certificado.",
            "B. Use o AWS Certificate Manager (ACM) para emitir um certificado SSL/TLS. Importe o material da chave do certificado. Aplique o certificado a o ALUse o recurso de renovação gerenciada para girar o certificado automaticamente.",
            "C. Use a Autoridade de Certificação Privada do AWS Certificate Manager (ACM) para emitir um certificado SSL/TLS da CA raiz. Aplique o certificado a o ALB. Use o recurso de renovação gerenciada para girar o certificado automaticamente.",
            "D. Use o AWS Certificate Manager (ACM) para importar um certificado SSL/TLS. Aplique o certificado ao ALB. Use o Amazon EventBridge (Amazon CloudWatch Events) para enviar uma notificação quando o certificado estiver próximo da expiração. Gire o certificado manualmente."
        ]
    },
    {
        "numb": 59,
        "question": "Uma empresa executa sua infraestrutura na AWS e tem uma base registrada de 700.000 usuários para seu aplicativo de gerenciamento de documentos. A empresa pretende criar um produto que converta grandes arquivos .pdf em arquivos de imagem .jpg. Os arquivos .pdf têm em média 5 MB de tamanho. A empresa precisa armazenar os arquivos originais e os arquivos convertidos. Um arquiteto de soluções deve projetar uma solução escalável para acomodar a demanda que crescerá rapidamente ao longo tempo. Qual solução atende a esses requisitos com MAIS eficiência de custo?",
        "answer": "A. Salve os arquivos .pdf no Amazon S3. Configure um evento S3 PUT para invocar uma função AWS Lambda para converter os arquivos para o formato .jpg e armazená-los eles de volta no Amazon S3.",
        "options": [
            "A. Salve os arquivos .pdf no Amazon S3. Configure um evento S3 PUT para invocar uma função AWS Lambda para converter os arquivos para o formato .jpg e armazená-los eles de volta no Amazon S3.",
            "B. Salve os arquivos .pdf no Amazon DynamoD Use o recurso DynamoDB Streams para invocar uma função AWS Lambda para converter os arquivos em .jpg formatá-los e armazená-los novamente no DynamoDB.",
            "C. Carregue os arquivos .pdf em um aplicativo AWS Elastic Beanstalk que inclua instâncias do Amazon EC2, Amazon Elastic Block Store (Amazon EBS) e um grupo de Auto Scaling. Use um programa nas instâncias EC2 para converter os arquivos para o formato .jpg. Salve os arquivos .pdf e .jpg arquivos no armazenamento EBS.",
            "D. Carregue os arquivos .pdf em um aplicativo AWS Elastic Beanstalk que inclua instâncias do Amazon EC2, Amazon Elastic File System (Amazon EFS) e um grupo de Auto Scaling. Use um programa nas instâncias EC2 para converter o arquivo para o formato .jpg. Salve os arquivos .pdf e .jpg arquivos no armazenamento EBS."
        ]
    },
    {
        "numb": 60,
        "question": "Uma empresa tem mais de 5 TB de dados de arquivo em servidores de arquivo Windows que rodam no local. Usuários e aplicativos interagem com os dados todos os dias. A empresa está movendo suas cargas de trabalho do Windows para a AWS. À medida que a empresa continua esse processo, ela requer acesso à AWS e ao armazenamento de arquivos no local com latência mínima. A empresa precisa de uma solução que minimize a sobrecarga operacional e não exija nenhuma alterações nos padrões de acesso de arquivo existentes. A empresa usa uma conexão AWS Site-to-Site VPN para conectividade com a AWS. O que um arquiteto de soluções deve fazer para atender a esses requisitos?",
        "answer": "A. Implante e configure o Amazon FSx for Windows File Server na AWS. Mova os dados do arquivo local para o FSx for Windows File Server. Reconfigure as cargas de trabalho para usar o FSx for Windows File Server na AWS.",
        "options": [
            "A. Implante e configure o Amazon FSx for Windows File Server na AWS. Mova os dados do arquivo local para o FSx for Windows File Server. Reconfigure as cargas de trabalho para usar o FSx for Windows File Server na AWS.",
            "B. Implante e configure um Amazon S3 File Gateway no local. Mova os dados de arquivo no local para o S3 File Gateway. Reconfigure as cargas de trabalho no local e as cargas de trabalho na nuvem para usar o S3 File Gateway.",
            "C. Implante e configure um Amazon S3 File Gateway no local. Mova os dados do arquivo no local para o Amazon S3. Reconfigure as cargas de trabalho para use o Amazon S3 diretamente ou o S3 File Gateway, dependendo da localização de cada carga de trabalho.",
            "D. Implante e configure o Amazon FSx para Windows File Server na AWS. Implante e configure um Amazon FSx File Gateway no local. Mova os dados do arquivo local para o FSx File Gateway. Configure as cargas de trabalho da nuvem para usar o FSx para Windows File Server na AWS. Configure as cargas de trabalho locais para usar o FSx File Gateway."
        ]
    },
    {
        "numb": 61,
        "question": "Um hospital implantou recentemente uma API RESTful com Amazon API Gateway e AWS Lambda. O hospital usa API Gateway e Lambda para fazer upload relatórios que estão em formato PDF e JPEG. O hospital precisa modificar o código Lambda para identificar informações de saúde protegidas (PHI) em os relatórios. Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?",
        "answer": "C. Use o Amazon Textract para extrair o texto dos relatórios. Use o Amazon Comprehend Medical para identificar o PHI do texto extraído.",
        "options": [
            "A. Use bibliotecas Python existentes para extrair o texto dos relatórios e identificar o PHI do texto extraído.",
            "B. Use o Amazon Textract para extrair o texto dos relatórios. Use o Amazon SageMaker para identificar o PHI do texto extraído.",
            "C. Use o Amazon Textract para extrair o texto dos relatórios. Use o Amazon Comprehend Medical para identificar o PHI do texto extraído.",
            "D. Use o Amazon Rekognition para extrair o texto dos relatórios. Use o Amazon Comprehend Medical para identificar o PHI do texto extraído."
        ]
    },
    {
        "numb": 62,
        "question": "Uma empresa tem um aplicativo que gera um grande número de arquivos, cada um com aproximadamente 5 MB de tamanho. Os arquivos são armazenados no Amazon S3. A política da empresa exige que os arquivos sejam armazenados por 4 anos antes de poderem ser excluídos. Acessibilidade imediata é sempre necessária, pois os arquivos contêm dados comerciais críticos que não são fáceis de reproduzir. Os arquivos são acessados ​​com frequência nos primeiros 30 dias da criação do objeto, mas são raramente acessado após os primeiros 30 dias. Qual solução de armazenamento é MAIS econômica?",
        "answer": "C. Crie uma política de ciclo de vida do bucket S3 para mover arquivos do S3 Standard para o S3 Standard-Infrequent Access (S3 Standard-IA) 30 dias após o objeto criação. Exclua os arquivos 4 anos após a criação do objeto.",
        "options": [
            "A. Crie uma política de ciclo de vida do bucket S3 para mover arquivos do S3 Standard para o S3 Glacier 30 dias após a criação do objeto. Exclua os arquivos 4 anos depois criação de objetos.",
            "B. Crie uma política de ciclo de vida do bucket S3 para mover arquivos do S3 Standard para o S3 One Zone-Infrequent Access (S3 One Zone-IA) 30 dias a partir de criação do objeto. Exclua os arquivos 4 anos após a criação do objeto.",
            "C. Crie uma política de ciclo de vida do bucket S3 para mover arquivos do S3 Standard para o S3 Standard-Infrequent Access (S3 Standard-IA) 30 dias após o objeto criação. Exclua os arquivos 4 anos após a criação do objeto.",
            "D. Crie uma política de ciclo de vida do bucket S3 para mover arquivos do S3 Standard para o S3 Standard-Infrequent Access (S3 Standard-IA) 30 dias após o objeto criação. Mova os arquivos para o S3 Glacier 4 anos após a criação do objeto."
        ]
    },
    {
        "numb": 63,
        "question": "Uma empresa hospeda um aplicativo em várias instâncias do Amazon EC2. O aplicativo processa mensagens de uma fila do Amazon SQS, grava em uma tabela Amazon RDS e exclui a mensagem da fila. Registros duplicados ocasionais são encontrados na tabela RDS. A fila SQS não conter quaisquer mensagens duplicadas. O que um arquiteto de soluções deve fazer para garantir que as mensagens sejam processadas apenas uma vez?",
        "answer": "D. Use a chamada de API ChangeMessageVisibility para aumentar o tempo limite de visibilidade.",
        "options": [
            "A. Use a chamada da API CreateQueue para criar uma nova fila.",
            "B. Use a chamada de API AddPermission para adicionar permissões apropriadas.",
            "C. Use a chamada da API ReceiveMessage para definir um tempo de espera apropriado.",
            "D. Use a chamada de API ChangeMessageVisibility para aumentar o tempo limite de visibilidade."
        ]
    },
    {
        "numb": 64,
        "question": "Um arquiteto de soluções está projetando uma nova arquitetura híbrida para estender a infraestrutura local de uma empresa para a AWS. A empresa requer uma conexão altamente disponível com latência baixa consistente para uma região da AWS. A empresa precisa minimizar custos e está disposta a aceitar velocidades mais lentas tráfego se a conexão primária falhar. O que o arquiteto de soluções deve fazer para atender a esses requisitos?",
        "answer": "A. Provisione uma conexão AWS Direct Connect para uma região. Provisione uma conexão VPN como um backup se a conexão Direct Connect primária falha.",
        "options": [
            "A. Provisione uma conexão AWS Direct Connect para uma região. Provisione uma conexão VPN como um backup se a conexão Direct Connect primária falha.",
            "B. Provisione uma conexão de túnel VPN para uma região para conectividade privada. Provisione um segundo túnel VPN para conectividade privada e como um backup se a conexão VPN primária falhar.",
            "C. Provisione uma conexão AWS Direct Connect para uma região. Provisione uma segunda conexão Direct Connect para a mesma região como um backup se a conexão primária do Direct Connect falha.",
            "D. Provisione uma conexão AWS Direct Connect para uma região. Use o atributo de failover Direct Connect da AWS CLI para criar automaticamente uma conexão de backup se a conexão Direct Connect primária falhar."
        ]
    },
    {
        "numb": 65,
        "question": "Uma empresa está executando um aplicativo da web crítico para os negócios em instâncias do Amazon EC2 por trás de um Application Load Balancer. As instâncias do EC2 são em um grupo de Auto Scaling. O aplicativo usa um banco de dados Amazon Aurora PostgreSQL que é implantado em uma única Zona de Disponibilidade. O a empresa quer que o aplicativo tenha alta disponibilidade com o mínimo de tempo de inatividade e perda mínima de dados. Qual solução atenderá a esses requisitos com MENOR esforço operacional?",
        "answer": "B. Configure o grupo Auto Scaling para usar várias Availability Zones. Configure o banco de dados como Multi-AZ. Configure um Amazon RDS Proxy instância para o banco de dados.",
        "options": [
            "A. Coloque as instâncias do EC2 em diferentes regiões da AWS. Use as verificações de integridade do Amazon Route 53 para redirecionar o tráfego. Use Aurora PostgreSQL CrossRegion Replication.",
            "B. Configure o grupo Auto Scaling para usar várias Availability Zones. Configure o banco de dados como Multi-AZ. Configure um Amazon RDS Proxy instância para o banco de dados.",
            "C. Configure o grupo Auto Scaling para usar uma Availability Zone. Gere snapshots de hora em hora do banco de dados. Recupere o banco de dados do instantâneos em caso de falha.",
            "D. Configure o grupo Auto Scaling para usar várias regiões da AWS. Grave os dados do aplicativo no Amazon S3. Use o S3 Event Notificações para iniciar uma função do AWS Lambda para gravar os dados no banco de dados."
        ]
    },
    {
        "numb": 66,
        "question": "O aplicativo HTTP de uma empresa está por trás de um Network Load Balancer (NLB). O grupo-alvo do NLB está configurado para usar um Amazon EC2 Auto Grupo de dimensionamento com várias instâncias do EC2 que executam o serviço web. A empresa percebe que o NLB não está detectando erros HTTP para o aplicativo. Esses erros exigem uma reinicialização manual das instâncias EC2 que executam o serviço web. A empresa precisa melhorar a disponibilidade do aplicativo sem escrever scripts ou códigos personalizados. O que um arquiteto de soluções deve fazer para atender a esses requisitos?",
        "answer": "C. Substitua o NLB por um Application Load Balancer. Habilite verificações de integridade HTTP fornecendo a URL do aplicativo da empresa. Configure uma ação de dimensionamento automático para substituir instâncias não íntegras.",
        "options": [
            "A. Habilite verificações de integridade HTTP no NLB, fornecendo a URL do aplicativo da empresa.",
            "B. Adicione um cron job às instâncias EC2 para verificar os logs do aplicativo local uma vez a cada minuto. Se erros HTTP forem detectados, o aplicativo irá reiniciar.",
            "C. Substitua o NLB por um Application Load Balancer. Habilite verificações de integridade HTTP fornecendo a URL do aplicativo da empresa. Configure uma ação de dimensionamento automático para substituir instâncias não íntegras.",
            "D. Crie um alarme do Amazon Cloud Watch que monitore a métrica UnhealthyHostCount para o NLB. Configure uma ação de Auto Scaling para substituir instâncias não íntegras quando o alarme estiver no estado ALARME."
        ]
    },
    {
        "numb": 67,
        "question": "Uma empresa executa um aplicativo de compras que usa o Amazon DynamoDB para armazenar informações do cliente. Em caso de corrupção de dados, uma solução O arquiteto precisa projetar uma solução que atenda a um objetivo de ponto de recuperação (RPO) de 15 minutos e um objetivo de tempo de recuperação (RTO) de 1 hora. O que o arquiteto de soluções deve recomendar para atender a esses requisitos?",
        "answer": "B. Configure a recuperação de ponto no tempo do DynamoDB. Para recuperação de RPO, restaure para o ponto no tempo desejado.",
        "options": [
            "A. Configure as tabelas globais do DynamoDB. Para recuperação de RPO, aponte o aplicativo para uma região diferente da AWS.",
            "B. Configure a recuperação de ponto no tempo do DynamoDB. Para recuperação de RPO, restaure para o ponto no tempo desejado.",
            "C. Exporte os dados do DynamoDB para o Amazon S3 Glacier diariamente. Para recuperação de RPO, importe os dados do S3 Glacier para o DynamoDB.",
            "D. Agende snapshots do Amazon Elastic Block Store (Amazon EBS) para a tabela DynamoDB a cada 15 minutos. Para recuperação de RPO, restaure o Tabela do DynamoDB usando o snapshot do EBS."
        ]
    },
    {
        "numb": 68,
        "question": "Uma empresa executa um aplicativo de processamento de fotos que precisa carregar e baixar fotos com frequência de buckets do Amazon S3 localizados na mesma região da AWS. Um arquiteto de soluções notou um aumento no custo das taxas de transferência de dados e precisa implementar uma solução para reduzir esses custos. Como o arquiteto de soluções pode atender a esse requisito?",
        "answer": "D. Implante um ponto de extremidade do gateway S3 VPC na VPC e anexe uma política de ponto de extremidade que permita acesso aos buckets S3.",
        "options": [
            "A. Implante o Amazon API Gateway em uma sub-rede pública e ajuste a tabela de rotas para rotear chamadas S3 por meio dela.",
            "B. Implante um gateway NAT em uma sub-rede pública e anexe uma política de endpoint que permita acesso aos buckets S3.",
            "C. Implante o aplicativo em uma sub-rede pública e permita que ele seja roteado por meio de um gateway de internet para acessar os buckets do S3.",
            "D. Implante um ponto de extremidade do gateway S3 VPC na VPC e anexe uma política de ponto de extremidade que permita acesso aos buckets S3."
        ]
    },
    {
        "numb": 69,
        "question": "Uma empresa quer mover um aplicativo multicamadas de on-premises para a Nuvem AWS para melhorar o desempenho do aplicativo. O aplicativo consiste em camadas de aplicativos que se comunicam entre si por meio de serviços RESTful. As transações são descartadas quando uma camada se torna sobrecarregado. Um arquiteto de soluções deve projetar uma solução que resolva esses problemas e modernize o aplicativo. Qual solução atende a esses requisitos e é a MAIS eficiente operacionalmente?",
        "answer": "A. Use o Amazon API Gateway e direcione as transações para as funções do AWS Lambda como a camada de aplicação. Use o Amazon Simple Queue Service (Amazon SQS) como camada de comunicação entre serviços de aplicativos.",
        "options": [
            "A. Use o Amazon API Gateway e direcione as transações para as funções do AWS Lambda como a camada de aplicação. Use o Amazon Simple Queue Service (Amazon SQS) como camada de comunicação entre serviços de aplicativos.",
            "B. Use as métricas do Amazon CloudWatch para analisar o histórico de desempenho do aplicativo para determinar a utilização máxima dos servidores durante o falhas de desempenho. Aumente o tamanho das instâncias do Amazon EC2 do servidor de aplicativos para atender aos requisitos de pico.",
            "C. Use o Amazon Simple Notification Service (Amazon SNS) para manipular as mensagens entre servidores de aplicativos em execução no Amazon EC2 em um Grupo de Auto Scaling. Use o Amazon CloudWatch para monitorar o comprimento da fila do SNS e aumentar e diminuir conforme necessário.",
            "D. Use o Amazon Simple Queue Service (Amazon SQS) para manipular as mensagens entre servidores de aplicativos em execução no Amazon EC2 em um Auto Grupo de dimensionamento. Use o Amazon CloudWatch para monitorar o comprimento da fila do SQS e dimensionar verticalmente quando falhas de comunicação forem detectadas."
        ]
    },
    {
        "numb": 70,
        "question": "Uma empresa recebe 10 TB de dados de instrumentação todos os dias de várias máquinas localizadas em uma única fábrica. Os dados consistem em arquivos JSON armazenados em uma rede de área de armazenamento (SAN) em um data center local localizado dentro da fábrica. A empresa quer enviar esses dados para a Amazon S3 onde pode ser acessado por vários sistemas adicionais que fornecem análises críticas quase em tempo real. Uma transferência segura é importante porque os dados são considerados sensíveis. Qual solução oferece a transferência de dados MAIS confiável?",
        "answer": "B. AWS DataSync sobre AWS Direct Connect",
        "options": [
            "A. AWS DataSync pela internet pública",
            "B. AWS DataSync sobre AWS Direct Connect",
            "C. AWS Database Migration Service (AWS DMS) pela internet pública",
            "D. Serviço de migração de banco de dados AWS (AWS DMS) sobre AWS Direct Connect"
        ]
    },
    {
        "numb": 71,
        "question": "Uma empresa precisa configurar uma arquitetura de ingestão de dados em tempo real para seu aplicativo. A empresa precisa de uma API, um processo que transforma dados à medida que são transmitidos e uma solução de armazenamento para os dados. Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?",
        "answer": "C. Configure uma API do Amazon API Gateway para enviar dados para um fluxo de dados do Amazon Kinesis. Crie uma entrega do Amazon Kinesis Data Firehose fluxo que usa o fluxo de dados do Kinesis como uma fonte de dados. Use as funções do AWS Lambda para transformar os dados. Use o Kinesis Data Firehose fluxo de entrega para enviar os dados ao Amazon S3.",
        "options": [
            "A. Implante uma instância do Amazon EC2 para hospedar uma API que envia dados para um fluxo de dados do Amazon Kinesis. Crie um fluxo de dados do Amazon Kinesis Fluxo de entrega do Firehose que usa o fluxo de dados do Kinesis como fonte de dados. Use as funções do AWS Lambda para transformar os dados. Use o Fluxo de entrega do Kinesis Data Firehose para enviar os dados ao Amazon S3.",
            "B. Implante uma instância do Amazon EC2 para hospedar uma API que envia dados para o AWS Glue. Pare a verificação de origem/destino na instância do EC2. Use AWS Glue para transformar os dados e enviá-los ao Amazon S3.",
            "C. Configure uma API do Amazon API Gateway para enviar dados para um fluxo de dados do Amazon Kinesis. Crie uma entrega do Amazon Kinesis Data Firehose fluxo que usa o fluxo de dados do Kinesis como uma fonte de dados. Use as funções do AWS Lambda para transformar os dados. Use o Kinesis Data Firehose fluxo de entrega para enviar os dados ao Amazon S3.",
            "D. Configure uma API do Amazon API Gateway para enviar dados para o AWS Glue. Use as funções do AWS Lambda para transformar os dados. Use o AWS Glue para enviar os dados para o Amazon S3."
        ]
    },
    {
        "numb": 72,
        "question": "Uma empresa precisa manter dados de transações de usuários em uma tabela do Amazon DynamoDB. A empresa deve reter os dados por 7 anos. Qual é a solução operacional MAIS eficiente que atende a esses requisitos?",
        "answer": "B. Use o AWS Backup para criar agendamentos de backup e políticas de retenção para a tabela.",
        "options": [
            "A. Use a recuperação de ponto no tempo do DynamoDB para fazer backup da tabela continuamente.",
            "B. Use o AWS Backup para criar agendamentos de backup e políticas de retenção para a tabela.",
            "C. Crie um backup sob demanda da tabela usando o console do DynamoDB. Armazene o backup em um bucket do Amazon S3. Defina um ciclo de vida do S3 configuração para o bucket S3.",
            "D. Crie uma regra do Amazon EventBridge (Amazon CloudWatch Events) para invocar uma função do AWS Lambda. Configure a função do Lambda para faça backup da tabela e armazene o backup em um bucket do Amazon S3. Defina uma configuração do S3 Lifecycle para o bucket do S3."
        ]
    },
    {
        "numb": 73,
        "question": "Uma empresa está planejando usar uma tabela Amazon DynamoDB para armazenamento de dados. A empresa está preocupada com a otimização de custos. A tabela não ser usado na maioria das manhãs. À noite, o tráfego de leitura e gravação geralmente será imprevisível. Quando picos de tráfego ocorrem, eles acontecem muito rapidamente. O que um arquiteto de soluções deve recomendar?",
        "answer": "A. Crie uma tabela do DynamoDB no modo de capacidade sob demanda.",
        "options": [
            "A. Crie uma tabela do DynamoDB no modo de capacidade sob demanda.",
            "B. Crie uma tabela do DynamoDB com um índice secundário global.",
            "C. Crie uma tabela do DynamoDB com capacidade provisionada e dimensionamento automático.",
            "D. Crie uma tabela do DynamoDB no modo de capacidade provisionada e configure-a como uma tabela global."
        ]
    },
    {
        "numb": 74,
        "question": "Uma empresa assinou recentemente um contrato com um parceiro AWS Managed Service Provider (MSP) para obter ajuda com uma iniciativa de migração de aplicativos. O arquiteto de soluções precisa compartilhar uma Amazon Machine Image (AMI) de uma conta AWS existente com a conta AWS do parceiro MSP. A AMI é apoiado pelo Amazon Elastic Block Store (Amazon EBS) e usa uma chave gerenciada pelo cliente do AWS Key Management Service (AWS KMS) para criptografar Instantâneos de volume do EBS. Qual é a maneira MAIS segura para o arquiteto de soluções compartilhar a AMI com a conta AWS do parceiro MSP?",
        "answer": "B. Modifique a propriedade launchPermission da AMI. Compartilhe a AMI somente com a conta AWS do parceiro MSP. Modifique a política de chave para permitir a conta AWS do parceiro MSP para usar a chave.",
        "options": [
            "A. Torne a AMI criptografada e os snapshots publicamente disponíveis. Modifique a política de chave para permitir que a conta AWS do Parceiro MSP use a chave.",
            "B. Modifique a propriedade launchPermission da AMI. Compartilhe a AMI somente com a conta AWS do parceiro MSP. Modifique a política de chave para permitir a conta AWS do parceiro MSP para usar a chave.",
            "C. Modifique a propriedade launchPermission da AMI. Compartilhe a AMI somente com a conta AWS do parceiro MSP. Modifique a política de chave para confiar em um nova chave KMS de propriedade do Parceiro MSP para criptografia.",
            "D. Exporte a AMI da conta de origem para um bucket do Amazon S3 na conta AWS do parceiro MSP, criptografe o bucket do S3 com um novo KMS chave que é de propriedade do Parceiro MSP. Copie e inicie a AMI na conta AWS do Parceiro MSP."
        ]
    },
    {
        "numb": 75,
        "question": "Um arquiteto de soluções está projetando a arquitetura de nuvem para um novo aplicativo que está sendo implantado na AWS. O processo deve ser executado em paralelo enquanto adicionando e removendo nós de aplicativo conforme necessário com base no número de trabalhos a serem processados. O aplicativo do processador é sem estado. O O arquiteto de soluções deve garantir que o aplicativo esteja fracamente acoplado e que os itens de trabalho sejam armazenados de forma durável. Qual design o arquiteto de soluções deve usar?",
        "answer": "C. Crie uma fila do Amazon SQS para armazenar os trabalhos que precisam ser processados. Crie uma Amazon Machine Image (AMI) que consiste em aplicativo do processador. Crie um modelo de inicialização que use a AMI. Crie um grupo de dimensionamento automático usando o modelo de inicialização. Defina o dimensionamento política para o grupo de dimensionamento automático para adicionar e remover nós com base no número de itens na fila do SQS.",
        "options": [
            "A. Crie um tópico do Amazon SNS para enviar os trabalhos que precisam ser processados. Crie uma Amazon Machine Image (AMI) que consiste em aplicativo do processador. Crie uma configuração de inicialização que use a AMI. Crie um grupo de dimensionamento automático usando a configuração de inicialização. Defina o política de dimensionamento para o grupo de dimensionamento automático para adicionar e remover nós com base no uso da CPU.",
            "B. Crie uma fila do Amazon SQS para armazenar os trabalhos que precisam ser processados. Crie uma Amazon Machine Image (AMI) que consiste em aplicativo do processador. Crie uma configuração de inicialização que use a AMI. Crie um grupo de dimensionamento automático usando a configuração de inicialização. Defina o política de dimensionamento para o grupo de dimensionamento automático para adicionar e remover nós com base no uso da rede.",
            "C. Crie uma fila do Amazon SQS para armazenar os trabalhos que precisam ser processados. Crie uma Amazon Machine Image (AMI) que consiste em aplicativo do processador. Crie um modelo de inicialização que use a AMI. Crie um grupo de dimensionamento automático usando o modelo de inicialização. Defina o dimensionamento política para o grupo de dimensionamento automático para adicionar e remover nós com base no número de itens na fila do SQS.",
            "D. Crie um tópico do Amazon SNS para enviar os trabalhos que precisam ser processados. Crie uma Amazon Machine Image (AMI) que consiste no aplicativo do processador. Crie um modelo de inicialização que use a AMI. Crie um grupo de dimensionamento automático usando o modelo de inicialização. Defina o dimensionamento política para o grupo de dimensionamento automático para adicionar e remover nós com base no número de mensagens publicadas no tópico do SNS."
        ]
    },
    {
        "numb": 76,
        "question": "Uma empresa hospeda seus aplicativos da web na Nuvem AWS. A empresa configura Elastic Load Balancers para usar certificados que são importados para AWS Certificate Manager (ACM). A equipe de segurança da empresa deve ser notificada 30 dias antes da expiração de cada certificado. O que um arquiteto de soluções deve recomendar para atender a esse requisito?",
        "answer": "D. Crie uma regra do Amazon EventBridge (Amazon CloudWatch Events) para detectar quaisquer certificados que irão expirar dentro de 30 dias. Configure o regra para invocar uma função AWS Lambda. Configure a função Lambda para enviar um alerta personalizado por meio do Amazon Simple Notification Service (Amazon SNS).",
        "options": [
            "A. Adicione uma regra no ACM para publicar uma mensagem personalizada em um tópico do Amazon Simple Notification Service (Amazon SNS) todos os dias, começando em 30 dias antes de qualquer certificado expirar.",
            "B. Crie uma regra AWS Config que verifique se há certificados que expirarão em 30 dias. Configure o Amazon EventBridge (Amazon CloudWatch Eventos) para invocar um alerta personalizado por meio do Amazon Simple Notification Service (Amazon SNS) quando o AWS Config relata um evento não compatível recurso.",
            "C. Use o AWS Trusted Advisor para verificar se há certificados que irão expirar em 30 dias. Crie um alarme do Amazon CloudWatch baseado em Métricas do Trusted Advisor para alterações de status de verificação. Configure o alarme para enviar um alerta personalizado por meio do Amazon Simple Notification Service (Amazon SNS).",
            "D. Crie uma regra do Amazon EventBridge (Amazon CloudWatch Events) para detectar quaisquer certificados que irão expirar dentro de 30 dias. Configure o regra para invocar uma função AWS Lambda. Configure a função Lambda para enviar um alerta personalizado por meio do Amazon Simple Notification Service (Amazon SNS)."
        ]
    },
    {
        "numb": 77,
        "question": "O site dinâmico de uma empresa é hospedado usando servidores locais nos Estados Unidos. A empresa está lançando seu produto na Europa e quer otimizar os tempos de carregamento do site para novos usuários europeus. O backend do site deve permanecer nos Estados Unidos. O produto está sendo lançado em poucos dias, e uma solução imediata é necessária. O que o arquiteto de soluções deve recomendar?",
        "answer": "C. Use o Amazon CloudFront com uma origem personalizada apontando para os servidores locais.",
        "options": [
            "A. Inicie uma instância do Amazon EC2 em us-east-1 e migre o site para ela.",
            "B. Mova o site para o Amazon S3. Use Cross-Region Replication entre regiões.",
            "C. Use o Amazon CloudFront com uma origem personalizada apontando para os servidores locais.",
            "D. Use uma política de roteamento de geoproximidade do Amazon Route 53 apontando para servidores locais."
        ]
    },
    {
        "numb": 78,
        "question": "Uma empresa quer reduzir o custo de sua arquitetura web de três camadas existente. Os servidores web, de aplicativo e de banco de dados estão sendo executados na Amazon Instâncias EC2 para ambientes de desenvolvimento, teste e produção. As instâncias EC2 têm uma média de 30% de utilização da CPU durante os horários de pico e 10% Utilização da CPU fora dos horários de pico. As instâncias de produção do EC2 rodam 24 horas por dia. As instâncias de desenvolvimento e teste do EC2 rodam por pelo menos 8 horas por dia. A empresa planeja implementar automação para interromper o desenvolvimento e testar instâncias do EC2 quando elas não estiverem em uso. Qual solução de compra de instância EC2 atenderá aos requisitos da empresa com MAIS economia?",
        "answer": "B. Use Instâncias Reservadas para as instâncias EC2 de produção. Use Instâncias On-Demand para as instâncias EC2 de desenvolvimento e teste.",
        "options": [
            "A. Use Spot Instances para as instâncias de produção do EC2. Use Reserved Instances para as instâncias de desenvolvimento e teste do EC2.",
            "B. Use Instâncias Reservadas para as instâncias EC2 de produção. Use Instâncias On-Demand para as instâncias EC2 de desenvolvimento e teste.",
            "C. Use blocos Spot para as instâncias EC2 de produção. Use Instâncias Reservadas para as instâncias EC2 de desenvolvimento e teste.",
            "D. Use On-Demand Instances para as instâncias EC2 de produção. Use Spot blocks para as instâncias EC2 de desenvolvimento e teste."
        ]
    },
    {
        "numb": 79,
        "question": "Uma empresa tem um aplicativo web de produção no qual os usuários carregam documentos por meio de uma interface web ou um aplicativo móvel. De acordo com um novo exigência regulatória. novos documentos não podem ser modificados ou excluídos depois de armazenados. O que um arquiteto de soluções deve fazer para atender a esse requisito?",
        "answer": "A. Armazene os documentos enviados em um bucket do Amazon S3 com o controle de versão do S3 e o bloqueio de objeto do S3 habilitados.",
        "options": [
            "A. Armazene os documentos enviados em um bucket do Amazon S3 com o controle de versão do S3 e o bloqueio de objeto do S3 habilitados.",
            "B. Armazene os documentos enviados em um bucket do Amazon S3. Configure uma política de ciclo de vida do S3 para arquivar os documentos periodicamente.",
            "C. Armazene os documentos enviados em um bucket do Amazon S3 com o S3 Versioning habilitado. Configure uma ACL para restringir todo o acesso a somente leitura.",
            "D. Armazene os documentos enviados em um volume do Amazon Elastic File System (Amazon EFS). Acesse os dados montando o volume no modo somente leitura."
        ]
    },
    {
        "numb": 80,
        "question": "Uma empresa tem vários servidores web que precisam acessar com frequência uma instância comum do Amazon RDS MySQL Multi-AZ DB. A empresa quer um método seguro para os servidores web se conectarem ao banco de dados, ao mesmo tempo em que atendem a um requisito de segurança para alternar as credenciais do usuário com frequência. Qual solução atende a esses requisitos?",
        "answer": "A. Armazene as credenciais do usuário do banco de dados no AWS Secrets Manager. Conceda as permissões de IAM necessárias para permitir que os servidores da Web acessem o AWS Gerente de Segredos.",
        "options": [
            "A. Armazene as credenciais do usuário do banco de dados no AWS Secrets Manager. Conceda as permissões de IAM necessárias para permitir que os servidores da Web acessem o AWS Gerente de Segredos.",
            "B. Armazene as credenciais do usuário do banco de dados no AWS Systems Manager OpsCenter. Conceda as permissões de IAM necessárias para permitir que os servidores da web acessar o OpsCenter.",
            "C. Armazene as credenciais do usuário do banco de dados em um bucket seguro do Amazon S3. Conceda as permissões de IAM necessárias para permitir que os servidores da web recuperar credenciais e acessar o banco de dados.",
            "D. Armazene as credenciais do usuário do banco de dados em arquivos criptografados com o AWS Key Management Service (AWS KMS) no sistema de arquivos do servidor web. O servidor web deve ser capaz de descriptografar os arquivos e acessar o banco de dados."
        ]
    },
    {
        "numb": 81,
        "question": "Uma empresa hospeda um aplicativo nas funções AWS Lambda que são invocadas por uma API do Amazon API Gateway. As funções Lambda salvam dados do cliente para um banco de dados Amazon Aurora MySQL. Sempre que a empresa atualiza o banco de dados, as funções Lambda falham em estabelecer conexões de banco de dados até que a atualização seja concluída. O resultado é que os dados do cliente não são registrados para alguns dos eventos. Um arquiteto de soluções precisa projetar uma solução que armazene dados do cliente criados durante atualizações de banco de dados. Qual solução atenderá a esses requisitos?",
        "answer": "A. Provisione um proxy Amazon RDS para ficar entre as funções Lambda e o banco de dados. Configure as funções Lambda para se conectar ao Proxy RDS.",
        "options": [
            "A. Provisione um proxy Amazon RDS para ficar entre as funções Lambda e o banco de dados. Configure as funções Lambda para se conectar ao Proxy RDS.",
            "B. Aumente o tempo de execução das funções Lambda ao máximo. Crie um mecanismo de repetição no código que armazene os dados do cliente no banco de dados.",
            "C. Persista os dados do cliente no armazenamento local do Lambda. Configure novas funções do Lambda para escanear o armazenamento local para salvar os dados do cliente o banco de dados.",
            "D. Armazene os dados do cliente em uma fila FIFO do Amazon Simple Queue Service (Amazon SQS). Crie uma nova função Lambda que pesquise os fila e armazena os dados do cliente no banco de dados."
        ]
    },
    {
        "numb": 82,
        "question": "Uma empresa de pesquisa coletou dados por vários anos de áreas nos Estados Unidos. A empresa hospeda os dados em um bucket do Amazon S3 que tem 3 TB de tamanho e está crescendo. A empresa começou a compartilhar os dados com uma empresa de marketing europeia que tem buckets S3. A empresa quer para garantir que seus custos de transferência de dados permaneçam os mais baixos possíveis. Qual solução atenderá a esses requisitos?",
        "answer": "B. Configure a replicação entre regiões do S3 do bucket S3 da empresa para um dos buckets S3 da empresa de marketing.",
        "options": [
            "A. Configure o recurso Pagamento do Solicitante no bucket S3 da empresa.",
            "B. Configure a replicação entre regiões do S3 do bucket S3 da empresa para um dos buckets S3 da empresa de marketing.",
            "C. Configure o acesso entre contas para a empresa de marketing para que ela tenha acesso ao bucket S3 da empresa.",
            "D. Configure o bucket S3 da empresa para usar o S3 Intelligent-Tiering. Sincronize o bucket S3 com um dos buckets S3 da empresa de marketing."
        ]
    },
    {
        "numb": 83,
        "question": "Uma empresa usa o Amazon S3 para armazenar seus documentos confidenciais de auditoria. O bucket do S3 usa políticas de bucket para restringir o acesso ao IAM da equipe de auditoria credenciais do usuário de acordo com o princípio do menor privilégio. Os gerentes da empresa estão preocupados com a exclusão acidental de documentos no S3 balde e deseja uma solução mais segura. O que um arquiteto de soluções deve fazer para proteger os documentos de auditoria?",
        "answer": "A. Habilite os recursos de controle de versão e exclusão de MFA no bucket do S3.",
        "options": [
            "A. Habilite os recursos de controle de versão e exclusão de MFA no bucket do S3.",
            "B. Habilite a autenticação multifator (MFA) nas credenciais de usuário do IAM para cada conta de usuário do IAM da equipe de auditoria.",
            "C. Adicione uma política de ciclo de vida do S3 às contas de usuário do IAM da equipe de auditoria para negar a ação s3:DeleteObject durante as datas de auditoria.",
            "D. Use o AWS Key Management Service (AWS KMS) para criptografar o bucket S3 e restringir o acesso das contas de usuário do IAM da equipe de auditoria ao KMS chave."
        ]
    },
    {
        "numb": 84,
        "question": "Uma empresa está usando um banco de dados SQL para armazenar dados de filmes que são publicamente acessíveis. O banco de dados é executado em uma instância do Amazon RDS Single-AZ DB. Um script executa consultas em intervalos aleatórios a cada dia para registrar o número de novos filmes que foram adicionados ao banco de dados. O script deve relatar um total final durante o horário comercial. A equipe de desenvolvimento da empresa percebe que o desempenho do banco de dados é inadequado para tarefas de desenvolvimento quando o script está em execução. A O arquiteto de soluções deve recomendar uma solução para resolver esse problema. Qual solução atenderá a esse requisito com a MENOR sobrecarga operacional?",
        "answer": "D. Use o Amazon ElastiCache para armazenar em cache as consultas comuns que o script executa no banco de dados.",
        "options": [
            "A. Modifique a instância do banco de dados para ser uma implantação Multi-AZ.",
            "B. Crie uma réplica de leitura do banco de dados. Configure o script para consultar somente a réplica de leitura.",
            "C. Instrua a equipe de desenvolvimento a exportar manualmente as entradas no banco de dados no final de cada dia.",
            "D. Use o Amazon ElastiCache para armazenar em cache as consultas comuns que o script executa no banco de dados."
        ]
    },
    {
        "numb": 85,
        "question": "Uma empresa tem aplicativos que rodam em instâncias do Amazon EC2 em uma VPC. Um dos aplicativos precisa chamar a API do Amazon S3 para armazenar e ler objetos. De acordo com os regulamentos de segurança da empresa, nenhum tráfego dos aplicativos tem permissão para viajar pela internet. Qual solução atenderá a esses requisitos?",
        "answer": "A. Configure um ponto de extremidade do gateway S3.",
        "options": [
            "A. Configure um ponto de extremidade do gateway S3.",
            "B. Crie um bucket S3 em uma sub-rede privada.",
            "C. Crie um bucket S3 na mesma região da AWS que as instâncias do EC2.",
            "D. Configure um gateway NAT na mesma sub-rede das instâncias do EC2."
        ]
    },
    {
        "numb": 86,
        "question": "Uma empresa executa um aplicativo local que é alimentado por um banco de dados MySQL. A empresa está migrando o aplicativo para a AWS para aumentar a elasticidade e a disponibilidade da aplicação. A arquitetura atual mostra atividade de leitura pesada no banco de dados durante os períodos de operação normal. A cada 4 horas, o desenvolvimento da empresa a equipe extrai uma exportação completa do banco de dados de produção para preencher um banco de dados no ambiente de preparação. Durante esse período, os usuários experimentam latência de aplicação inaceitável. A equipe de desenvolvimento não consegue usar o ambiente de preparação até que o procedimento seja concluído. Um arquiteto de soluções deve recomendar uma arquitetura de substituição que alivie o problema de latência do aplicativo. A arquitetura de substituição também deve dar à equipe de desenvolvimento a capacidade de continuar usando o ambiente de preparação sem demora. Qual solução atende a esses requisitos?",
        "answer": "B. Use o Amazon Aurora MySQL com Multi-AZ Aurora Replicas para produção. Use clonagem de banco de dados para criar o banco de dados de preparação sob demanda.",
        "options": [
            "A. Use o Amazon Aurora MySQL com réplicas Aurora Multi-AZ para produção. Preencha o banco de dados de preparação implementando um backup e processo de restauração que usa o utilitário mysqldump.",
            "B. Use o Amazon Aurora MySQL com Multi-AZ Aurora Replicas para produção. Use clonagem de banco de dados para criar o banco de dados de preparação sob demanda.",
            "C. Use o Amazon RDS para MySQL com uma implantação Multi-AZ e leia réplicas para produção. Use a instância standby para o staging banco de dados.",
            "D. Use o Amazon RDS para MySQL com uma implantação Multi-AZ e leia réplicas para produção. Preencha o banco de dados de preparação implementando um processo de backup e restauração que usa o utilitário mysqldump."
        ]
    },
    {
        "numb": 87,
        "question": "Uma empresa está projetando um aplicativo onde os usuários carregam pequenos arquivos no Amazon S3. Depois que um usuário carrega um arquivo, o arquivo requer um único simples processamento para transformar os dados e salvá-los no formato JSON para análise posterior. Cada arquivo deve ser processado o mais rápido possível após ser carregado. A demanda pode variar. Em alguns dias, os usuários carregarão um alto número de arquivos. Em outros dias, os usuários farão upload de alguns arquivos ou nenhum arquivo. Qual solução atende a esses requisitos com a MENOR sobrecarga operacional?",
        "answer": "C. Configure o Amazon S3 para enviar uma notificação de evento para uma fila do Amazon Simple Queue Service (Amazon SQS). Use um AWS Lambda função para ler da fila e processar os dados. Armazene o arquivo JSON resultante no Amazon DynamoDB.",
        "options": [
            "A. Configure o Amazon EMR para ler arquivos de texto do Amazon S3. Execute scripts de processamento para transformar os dados. Armazene o arquivo JSON resultante em um Cluster de banco de dados do Amazon Aurora.",
            "B. Configure o Amazon S3 para enviar uma notificação de evento para uma fila do Amazon Simple Queue Service (Amazon SQS). Use instâncias do Amazon EC2 para ler da fila e processar os dados. Armazene o arquivo JSON resultante no Amazon DynamoDB.",
            "C. Configure o Amazon S3 para enviar uma notificação de evento para uma fila do Amazon Simple Queue Service (Amazon SQS). Use um AWS Lambda função para ler da fila e processar os dados. Armazene o arquivo JSON resultante no Amazon DynamoDB.",
            "D. Configure o Amazon EventBridge (Amazon CloudWatch Events) para enviar um evento ao Amazon Kinesis Data Streams quando um novo arquivo for carregado. Use uma função AWS Lambda para consumir o evento do fluxo e processar os dados. Armazene o arquivo JSON resultante em um Cluster de banco de dados do Amazon Aurora."
        ]
    },
    {
        "numb": 88,
        "question": "Um aplicativo permite que usuários na sede de uma empresa acessem dados do produto. Os dados do produto são armazenados em um Amazon RDS MySQL DB instância. A equipe de operações isolou uma desaceleração no desempenho do aplicativo e deseja separar o tráfego de leitura do tráfego de gravação. Uma solução O arquiteto precisa otimizar o desempenho do aplicativo rapidamente. O que o arquiteto de soluções deve recomendar?",
        "answer": "D. Crie réplicas de leitura para o banco de dados. Configure as réplicas de leitura com os mesmos recursos de computação e armazenamento do banco de dados de origem.",
        "options": [
            "A. Altere o banco de dados existente para uma implantação Multi-AZ. Atenda às solicitações de leitura da Zona de Disponibilidade primária.",
            "B. Altere o banco de dados existente para uma implantação Multi-AZ. Atenda às solicitações de leitura da Availability Zone secundária.",
            "C. Crie réplicas de leitura para o banco de dados. Configure as réplicas de leitura com metade dos recursos de computação e armazenamento como o banco de dados de origem.",
            "D. Crie réplicas de leitura para o banco de dados. Configure as réplicas de leitura com os mesmos recursos de computação e armazenamento do banco de dados de origem."
        ]
    },
    {
        "numb": 89,
        "question": "Um administrador do Amazon EC2 criou a seguinte política associada a um grupo do IAM contendo vários usuários: Qual é o efeito desta política?",
        "answer": "C. Os usuários podem encerrar uma instância EC2 na região us-east-1 quando o IP de origem do usuário for 10.100.100.254.",
        "options": [
            "A. Os usuários podem encerrar uma instância do EC2 em qualquer região da AWS, exceto us-east-1.",
            "B. Os usuários podem encerrar uma instância do EC2 com o endereço IP 10.100.100.1 na região us-east-1.",
            "C. Os usuários podem encerrar uma instância EC2 na região us-east-1 quando o IP de origem do usuário for 10.100.100.254.",
            "D. Os usuários não podem encerrar uma instância EC2 na região us-east-1 quando o IP de origem do usuário for 10.100.100.254."
        ]
    },
    {
        "numb": 90,
        "question": "Uma empresa tem uma grande implantação do Microsoft SharePoint em execução no local que requer armazenamento de arquivos compartilhados do Microsoft Windows. A empresa quer migrar essa carga de trabalho para a Nuvem AWS e está considerando várias opções de armazenamento. A solução de armazenamento deve ser altamente disponível e integrado ao Active Directory para controle de acesso. Qual solução atenderá a esses requisitos?",
        "answer": "D. Crie um sistema de arquivos Amazon FSx for Windows File Server na AWS e defina o domínio do Active Directory para autenticação.",
        "options": [
            "A. Configure o armazenamento do Amazon EFS e defina o domínio do Active Directory para autenticação.",
            "B. Crie um compartilhamento de arquivos SMB em um gateway de arquivos do AWS Storage Gateway em duas Zonas de Disponibilidade.",
            "C. Crie um bucket do Amazon S3 e configure o Microsoft Windows Server para montá-lo como um volume.",
            "D. Crie um sistema de arquivos Amazon FSx for Windows File Server na AWS e defina o domínio do Active Directory para autenticação."
        ]
    },
    {
        "numb": 91,
        "question": "Uma empresa de processamento de imagens tem um aplicativo da web que os usuários usam para carregar imagens. O aplicativo carrega as imagens em um Amazon S3 bucket. A empresa configurou notificações de eventos S3 para publicar os eventos de criação de objetos em um Amazon Simple Queue Service (Amazon SQS) fila padrão. A fila SQS serve como fonte de eventos para uma função AWS Lambda que processa as imagens e envia os resultados para usuários por e-mail. Os usuários relatam que estão recebendo várias mensagens de e-mail para cada imagem carregada. Um arquiteto de soluções determina que as mensagens SQS são invocar a função Lambda mais de uma vez, resultando em várias mensagens de e-mail. O que o arquiteto de soluções deve fazer para resolver esse problema com a MENOR sobrecarga operacional?",
        "answer": "A. Configure uma pesquisa longa na fila do SQS aumentando o tempo de espera do ReceiveMessage para 30 segundos.",
        "options": [
            "A. Configure uma pesquisa longa na fila do SQS aumentando o tempo de espera do ReceiveMessage para 30 segundos.",
            "B. Altere a fila padrão SQS para uma fila FIFO SQS. Use o ID de deduplicação de mensagem para descartar mensagens duplicadas.",
            "C. Aumente o tempo limite de visibilidade na fila SQS para um valor maior que o total do tempo limite da função e da janela do lote tempo esgotado.",
            "D. Modifique a função Lambda para excluir cada mensagem da fila SQS imediatamente após a mensagem ser lida antes do processamento."
        ]
    },
    {
        "numb": 92,
        "question": "Uma empresa está implementando uma solução de armazenamento compartilhado para um aplicativo de jogo que é hospedado em um data center local. A empresa precisa a capacidade de usar clientes Lustre para acessar dados. A solução deve ser totalmente gerenciada. Qual solução atende a esses requisitos?",
        "answer": "D. Crie um sistema de arquivos Amazon FSx for Lustre. Anexe o sistema de arquivos ao servidor de origem. Conecte o servidor de aplicativos ao sistema de arquivos.",
        "options": [
            "A. Crie um gateway de arquivo do AWS Storage Gateway. Crie um compartilhamento de arquivo que use o protocolo de cliente necessário. Conecte o servidor de aplicativos a o compartilhamento de arquivos.",
            "B. Crie uma instância do Amazon EC2 Windows. Instale e configure uma função de compartilhamento de arquivos do Windows na instância. Conecte o servidor de aplicativos a o compartilhamento de arquivos.",
            "C. Crie um sistema de arquivos Amazon Elastic File System (Amazon EFS) e configure-o para suportar Lustre. Anexe o sistema de arquivos à origem servidor. Conecte o servidor de aplicativos ao sistema de arquivos.",
            "D. Crie um sistema de arquivos Amazon FSx for Lustre. Anexe o sistema de arquivos ao servidor de origem. Conecte o servidor de aplicativos ao sistema de arquivos."
        ]
    },
    {
        "numb": 93,
        "question": "O aplicativo em contêiner de uma empresa é executado em uma instância do Amazon EC2. O aplicativo precisa baixar certificados de segurança antes de poder comunicar com outros aplicativos de negócios. A empresa quer uma solução altamente segura para criptografar e descriptografar os certificados em quase real tempo. A solução também precisa armazenar dados em armazenamento altamente disponível após os dados serem criptografados. Qual solução atenderá a esses requisitos com a MENOR sobrecarga operacional?",
        "answer": "D. Crie uma chave gerenciada pelo cliente do AWS Key Management Service (AWS KMS). Permita que a função EC2 use a chave KMS para criptografia operações. Armazene os dados criptografados em volumes do Amazon Elastic Block Store (Amazon EBS).",
        "options": [
            "A. Crie segredos do AWS Secrets Manager para certificados criptografados. Atualize manualmente os certificados conforme necessário. Controle o acesso aos dados por usando acesso IAM de baixa granularidade.",
            "B. Crie uma função AWS Lambda que use a biblioteca de criptografia Python para receber e executar operações de criptografia. Armazene a função em um bucket do Amazon S3.",
            "C. Crie uma chave gerenciada pelo cliente do AWS Key Management Service (AWS KMS). Permita que a função EC2 use a chave KMS para criptografia operações. Armazene os dados criptografados no Amazon S3.",
            "D. Crie uma chave gerenciada pelo cliente do AWS Key Management Service (AWS KMS). Permita que a função EC2 use a chave KMS para criptografia operações. Armazene os dados criptografados em volumes do Amazon Elastic Block Store (Amazon EBS)."
        ]
    },
    {
        "numb": 94,
        "question": "Um arquiteto de soluções está projetando uma VPC com sub-redes públicas e privadas. A VPC e as sub-redes usam blocos CIDR IPv4. Há uma sub-rede pública e uma sub-rede privada em cada uma das três Zonas de Disponibilidade (AZs) para alta disponibilidade. Um gateway de internet é usado para fornecer acesso à internet para o sub-redes públicas. As sub-redes privadas exigem acesso à internet para permitir que instâncias do Amazon EC2 baixem atualizações de software. O que o arquiteto de soluções deve fazer para habilitar o acesso à Internet para as sub-redes privadas?",
        "answer": "A. Crie três gateways NAT, um para cada sub-rede pública em cada AZ. Crie uma tabela de rotas privada para cada AZ que encaminhe tráfego não VPC para o gateway NAT em sua AZ.",
        "options": [
            "A. Crie três gateways NAT, um para cada sub-rede pública em cada AZ. Crie uma tabela de rotas privada para cada AZ que encaminhe tráfego não VPC para o gateway NAT em sua AZ.",
            "B. Crie três instâncias NAT, uma para cada sub-rede privada em cada AZ. Crie uma tabela de rotas privada para cada AZ que encaminha tráfego não VPC para a instância NAT em sua AZ.",
            "C. Crie um segundo gateway de internet em uma das sub-redes privadas. Atualize a tabela de rotas para as sub-redes privadas que encaminham tráfego não-VPC para o gateway de internet privado.",
            "D. Crie um gateway de internet somente de saída em uma das sub-redes públicas. Atualize a tabela de rotas para as sub-redes privadas que encaminham não-VPC tráfego para o gateway de Internet somente de saída."
        ]
    },    
    {
        "numb": 95,
        "question": "Uma empresa tem um trabalho de extração, transformação e carregamento (ETL) do AWS Glue que é executado todos os dias no mesmo horário. O trabalho processa dados XML que estão em um Bucket do Amazon S3. Novos dados são adicionados ao bucket do S3 todos os dias. Um arquiteto de soluções percebe que o AWS Glue está processando todos os dados durante cada corrida. O que o arquiteto de soluções deve fazer para evitar que o AWS Glue reprocesse dados antigos?",
        "answer": "A. Edite o trabalho para usar marcadores de trabalho.",
        "options": [
            "A. Edite o trabalho para usar marcadores de trabalho.",
            "B. Edite o trabalho para excluir dados depois que eles forem processados.",
            "C. Edite o trabalho definindo o campo NumberOfWorkers como 1.",
            "D. Use uma transformação de aprendizado de máquina (ML) FindMatches."
        ]
    },    
    {
        "numb": 96,
        "question": "Uma empresa está se preparando para implantar uma nova carga de trabalho sem servidor. Um arquiteto de soluções deve usar o princípio do menor privilégio para configurar permissões que serão usadas para executar uma função do AWS Lambda. Uma regra do Amazon EventBridge (Amazon CloudWatch Events) invocará a função. Qual solução atende a esses requisitos?",
        "answer": "D. Adicione uma política baseada em recursos à função com lambda:InvokeFunction como a ação e Service: events.amazonaws.com como o principal.",
        "options": [
            "A. Adicione uma função de execução à função com lambda:InvokeFunction como a ação e * como o principal.",
            "B. Adicione uma função de execução à função com lambda:InvokeFunction como ação e Service: lambda.amazonaws.com como principal.",
            "C. Adicione uma política baseada em recursos à função com lambda:* como ação e Service: events.amazonaws.com como principal.",
            "D. Adicione uma política baseada em recursos à função com lambda:InvokeFunction como a ação e Service: events.amazonaws.com como o principal."
        ]
    },
    {
        "numb": 97,
        "question": "Uma empresa está se preparando para armazenar dados confidenciais no Amazon S3. Por motivos de conformidade, os dados devem ser criptografados em repouso. Chave de criptografia o uso deve ser registrado para fins de auditoria. As chaves devem ser rotacionadas todo ano. Qual solução atende a esses requisitos e é a MAIS eficiente operacionalmente?",
        "answer": "D. Criptografia do lado do servidor com chaves AWS KMS (SSE-KMS) com rotação automática",
        "options": [
            "A. Criptografia do lado do servidor com chaves fornecidas pelo cliente (SSE-C)",
            "B. Criptografia do lado do servidor com chaves gerenciadas pelo Amazon S3 (SSE-S3)",
            "C. Criptografia do lado do servidor com chaves AWS KMS (SSE-KMS) com rotação manual",
            "D. Criptografia do lado do servidor com chaves AWS KMS (SSE-KMS) com rotação automática"
        ]
    },
    {
        "numb": 98,
        "question": "Uma empresa de compartilhamento de bicicletas está desenvolvendo uma arquitetura multicamadas para rastrear a localização de suas bicicletas durante os horários de pico de operação. A empresa quer usar esses pontos de dados em sua plataforma analítica existente. Um arquiteto de soluções deve determinar a opção multicamadas mais viável para dar suporte esta arquitetura. Os pontos de dados devem ser acessíveis a partir da API REST. Qual ação atende a esses requisitos para armazenar e recuperar dados de localização?",
        "answer": "D. Use o Amazon API Gateway com o Amazon Kinesis Data Analytics.",
        "options": [
            "A. Use o Amazon Athena com o Amazon S3.",
            "B. Use o Amazon API Gateway com o AWS Lambda.",
            "C. Use o Amazon QuickSight com o Amazon Redshift.",
            "D. Use o Amazon API Gateway com o Amazon Kinesis Data Analytics."
        ]
    },
    {
        "numb": 99,
        "question": "Uma empresa tem um site de vendas de automóveis que armazena suas listagens em um banco de dados no Amazon RDS. Quando um automóvel é vendido, a listagem precisa para serem removidos do site e os dados devem ser enviados para vários sistemas de destino. Qual design um arquiteto de soluções deve recomendar?",
        "answer": "C. Assine uma notificação de evento RDS e envie uma fila do Amazon Simple Queue Service (Amazon SQS) distribuída para vários Amazon Tópicos do Simple Notification Service (Amazon SNS). Use funções do AWS Lambda para atualizar os alvos.",
        "options": [
            "A. Crie uma função AWS Lambda acionada quando o banco de dados no Amazon RDS for atualizado para enviar as informações para um Amazon Simple Fila do Serviço de Fila (Amazon SQS) para os destinos consumirem.",
            "B. Crie uma função AWS Lambda acionada quando o banco de dados no Amazon RDS for atualizado para enviar as informações para um Amazon Simple Fila FIFO do Serviço de Fila (Amazon SQS) para os destinos consumirem.",
            "C. Assine uma notificação de evento RDS e envie uma fila do Amazon Simple Queue Service (Amazon SQS) distribuída para vários Amazon Tópicos do Simple Notification Service (Amazon SNS). Use funções do AWS Lambda para atualizar os alvos.",
            "D. Assine uma notificação de evento RDS e envie um tópico do Amazon Simple Notification Service (Amazon SNS) distribuído para vários Amazon Filas do Simple Queue Service (Amazon SQS). Use funções do AWS Lambda para atualizar os alvos."
        ]
    },
    {
        "numb": 100,
        "question": "Uma empresa tem um grande conjunto de dados para seu negócio de publicidade on-line armazenado em uma instância do Amazon RDS para MySQL DB em uma única Zona de Disponibilidade. A empresa quer que as consultas de relatórios comerciais sejam executadas sem afetar as operações de gravação na instância do banco de dados de produção. Qual solução atende a esses requisitos?",
        "answer": "D. Implante a instância do banco de dados em várias zonas de disponibilidade para processar as consultas de relatórios comerciais.",
        "options": [
            "A. Implante réplicas de leitura do RDS para processar as consultas de relatórios comerciais.",
            "B. Escale a instância do banco de dados horizontalmente colocando-a atrás de um Elastic Load Balancer.",
            "C. Amplie a instância do banco de dados para um tipo de instância maior para lidar com operações de gravação e consultas.",
            "D. Implante a instância do banco de dados em várias zonas de disponibilidade para processar as consultas de relatórios comerciais."
        ]
    },
];