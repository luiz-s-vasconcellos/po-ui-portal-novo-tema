import{Da as pe,Fa as rg,Ii as b,Ja as we,Ki as dy,Mr as I1,Ra as ue,Ya as wg,et as P5,ga as m_,ki as Zn,ma as lO,mt as Tze,no as y_,pt as Tt,sa as jc,si as T$1,ui as UE,xa as nu,xi as Ww}from"./chunk-VuVfKKNQ.js";import{t as M$1}from"./main-CK5CTZT7.js";var S=(()=>{class a{constructor(){}getMenus(r){return new Array({label:`Guia de implementação de APIs`,link:`guides/api`},{label:`Compatibilidade com os navegadores`,link:`guides/browser-support`},{label:`Depreciações`,link:`guides/deprecations`},{label:`Contribuindo para o PO UI`,link:`guides/development-flow`},{label:`Primeiros passos`,link:`guides/getting-started`},{label:`Guia de uso para Gráficos`,link:`guides/guide-charts`},{label:`Migração do PO UI para V2`,link:`guides/migration-poui-v2`},{label:`Migração do PO UI`,link:`guides/migration-poui`},{label:`Migração do THF para o PO UI v1.x`,link:`guides/migration-thf-to-po-ui`},{label:`Press Kit`,link:`guides/press-kit`},{label:`Lançamentos e suporte`,link:`guides/release-schedule`},{label:`Releases`,link:`guides/releases`},{label:`Schematics`,link:`guides/schematics`},{label:`Fundamentos do PO Sync`,link:`guides/sync-fundamentals`},{label:`Começando com o PO Sync`,link:`guides/sync-get-started`},{label:`Customização de Temas usando o serviço PO-UI`,link:`guides/theme-service`},{label:`Criando um tema para o PO UI`,link:`guides/create-theme-customization`},{label:`Grid System`,link:`guides/grid-system`},{label:`Espaçamento`,link:`guides/spacing`},{label:`Personalizando o Tema Padrão com Tokens CSS`,link:`guides/theme-customization`},{label:`Tipografia`,link:`guides/typography`})}static ɵfac=function(o){return new(o||a)};static ɵprov=T$1({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var F=(()=>{class a{menuGuidesService;http;menus=[];constructor(r,o){this.menuGuidesService=r,this.http=o}ngOnInit(){this.http.get(`./assets/json/api-list.json`).subscribe(r=>{this.menus=this.menuGuidesService.getMenus(r).map(o=>(o.link=o.link.replace(`guides/`,``),o))},r=>console.error(r))}static ɵfac=function(o){return new(o||a)(b(S),b(Ww))};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,features:[we([S])],decls:4,vars:1,consts:[[`userMenu`,``],[1,`po-wrapper`],[`p-filter`,``,3,`p-menus`]],template:function(o,s){o&1&&(jc(0,`div`,1),nu(1,`po-menu`,2,0)(3,`router-outlet`),wg()),o&2&&(rg(),UE(`p-menus`,s.menus))},dependencies:[P5,dy],encapsulation:2,changeDetection:1})}return a})();var T=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:225,vars:0,consts:[[`p-title`,`Guia de implementação de APIs`,1,`guides`,`app-portal`],[`href`,`guides/api#introduction`],[`href`,`guides/api#responseMessage`],[`href`,`guides/api#errorMessages`],[`href`,`guides/api#successMessages`],[`href`,`guides/api#successMessagesForCollections`],[`href`,`guides/api#collections`],[`href`,`guides/api#order`],[`href`,`guides/api#filters`],[`href`,`guides/api#pagination`],[`id`,`introduction`],[`id`,`responseMessage`],[`id`,`errorMessages`],[`id`,`successMessages`],[`id`,`successMessagesForCollections`],[`id`,`collections`],[`id`,`order`],[`id`,`filters`],[`id`,`pagination`],[`href`,`#successMessagesForCollections`]],template:function(o,s){o&1&&(jc(0,`po-page-default`,0)(1,`h2`),lO(2,`Conteúdo`),wg(),jc(3,`ul`)(4,`li`)(5,`a`,1),lO(6,`Introdução`),wg()(),jc(7,`li`)(8,`a`,2),lO(9,`Formato das mensagens de resposta`),wg(),jc(10,`ul`)(11,`li`)(12,`a`,3),lO(13,`Mensagens de erro`),wg()(),jc(14,`li`)(15,`a`,4),lO(16,`Mensagens de sucesso`),wg()(),jc(17,`li`)(18,`a`,5),lO(19,`Mensagens de sucesso para coleções`),wg()()()(),jc(20,`li`)(21,`a`,6),lO(22,`Formato das requisições para coleções`),wg(),jc(23,`ul`)(24,`li`)(25,`a`,7),lO(26,`Ordenação`),wg()(),jc(27,`li`)(28,`a`,8),lO(29,`Filtros`),wg()(),jc(30,`li`)(31,`a`,9),lO(32,`Paginação`),wg()()()()(),jc(33,`p`),nu(34,`a`,10),wg(),jc(35,`h2`),lO(36,`Introdução`),wg(),jc(37,`p`),lO(38,`Este guia tem a finalidade de exibir os modelos de requisições e respostas HTTP que o PO UI utiliza em seus componentes e `),jc(39,`em`),lO(40,`interceptors`),wg(),lO(41,`.`),wg(),jc(42,`p`),nu(43,`a`,11),wg(),jc(44,`h2`),lO(45,`Formato das mensagens de resposta`),wg(),jc(46,`p`),lO(47,`Alguns componentes utilizam `),jc(48,`code`),lO(49,`endpoints`),wg(),lO(50,` para poder buscar os itens. Para isso, é necessário que o formato no qual estes itens serão devolvidos seja padronizado, para uma comunicação mais efetiva. A seguir serão apresentados o formato de mensagem de resposta esperado pelos `),jc(51,`code`),lO(52,`endpoints`),wg(),lO(53,`.`),wg(),jc(54,`p`),nu(55,`a`,12),wg(),jc(56,`h3`),lO(57,`Mensagens de erro`),wg(),jc(58,`p`),lO(59,`Para todas as mensagens que representam um erro (códigos HTTP 4xx e 5xx) deve-se retornar obrigatoriamente os campos a seguir, caso deseje apresentá-las:`),wg(),jc(60,`pre`)(61,`code`),lO(62,`{
    code: "C\xF3digo identificador do erro",
    message: "Literal no idioma da requisi\xE7\xE3o descrevendo o erro para o cliente",
    detailedMessage: "Mensagem t\xE9cnica e mais detalhada do erro"
}
`),wg()(),jc(63,`p`),lO(64,`Opcionalmente pode-se retornar os campos:`),wg(),jc(65,`ul`)(66,`li`)(67,`code`),lO(68,`helpUrl`),wg(),lO(69,`: link para a documentação do erro;`),wg(),jc(70,`li`)(71,`code`),lO(72,`type`),wg(),lO(73,`: pode ser informado os seguintes valores: `),jc(74,`code`),lO(75,`error`),wg(),lO(76,`, `),jc(77,`code`),lO(78,`warning`),wg(),lO(79,` e `),jc(80,`code`),lO(81,`information`),wg(),lO(82,`;`),wg(),jc(83,`li`)(84,`code`),lO(85,`details`),wg(),lO(86,`: lista de objetos de erro (recursiva) com mais detalhes sobre o erro principal.`),wg()(),jc(87,`pre`)(88,`code`),lO(89,`{
    code: "C\xF3digo identificador do erro",
    type: "error"
    message: "Literal no idioma da requisi\xE7\xE3o descrevendo o erro para o cliente",
    detailedMessage: "Mensagem t\xE9cnica e mais detalhada do erro",
    helpUrl: "link para a documenta\xE7\xE3o do error",
    details [
        {
            code: "C\xF3digo identificador do erro",
            message: "Literal no idioma da requisi\xE7\xE3o descrevendo o erro para o cliente",
            detailedMessage: "Mensagem t\xE9cnica e mais detalhada do erro"
        },
        {
            code: "C\xF3digo identificador do erro",
            message: "Literal no idioma da requisi\xE7\xE3o descrevendo o erro para o cliente",
            detailedMessage: "Mensagem t\xE9cnica e mais detalhada do erro"
        },
        {
            code: "C\xF3digo identificador do erro",
            message: "Literal no idioma da requisi\xE7\xE3o descrevendo o erro para o cliente",
            detailedMessage: "Mensagem t\xE9cnica e mais detalhada do erro"
        }
    ]
}
`),wg()(),jc(90,`p`),nu(91,`a`,13),wg(),jc(92,`h3`),lO(93,`Mensagens de sucesso`),wg(),jc(94,`p`),lO(95,`Mensagens de sucesso (código HTTP 2xx) devem retornar diretamente a entidade que representa o objeto resultante da operação do `),jc(96,`em`),lO(97,`endpoint`),wg(),lO(98,`. Exemplo:`),wg(),jc(99,`pre`)(100,`code`),lO(101,`GET https://example.com.br/api/users/10

{
    id: 10,
    name: "John",
    surname: "Doe",
    age: 25,
    country: "US"
}
`),wg()(),jc(102,`p`),lO(103,`Opcionalmente, o atributo `),jc(104,`code`),lO(105,`_messages`),wg(),lO(106,` pode ser incluído no objeto retornado para fornecer alguma informação complementar ao processamento realizado (mensagens de aviso, de negócio, etc). `),wg(),jc(107,`p`),lO(108,`O formato do objeto de mensagem segue o padrão anteriormente descrito, para mensagens de erro.`),wg(),jc(109,`pre`)(110,`code`),lO(111,`GET https://example.com.br/api/users/10
 
{
    id: 10,
    name: "John",
    surname: "Doe",
    age: 25,
    country: "US",
    _messages: [{
      code: "INFO",
      type: "information",
      message: "Esta \xE9 uma mensagem informativa",
      detailedMessage: "Mais detalhes sobre esta mensagem podem ser vistos aqui."
    }]
}
`),wg()(),jc(112,`p`),nu(113,`a`,14),wg(),jc(114,`h4`),lO(115,`Mensagens de sucesso para coleções`),wg(),jc(116,`p`),lO(117,`Nos casos em que o resultado da operação do `),jc(118,`em`),lO(119,`endpoint`),wg(),lO(120,` representa uma coleção (lista de itens), os itens devem estar agrupados em um objeto com as propriedades `),jc(121,`code`),lO(122,`hasNext`),wg(),lO(123,`, indicando se existe uma próxima página com mais registros para aquela coleção e `),jc(124,`code`),lO(125,`items`),wg(),lO(126,` que representam a lista de itens retornados.`),wg(),jc(127,`pre`)(128,`code`),lO(129,`{
  hasNext: true,
  items: [
    {},
    {},
    ...
  ]
}
`),wg()(),jc(130,`p`),lO(131,`Para o retorno de coleções, também é possível incluir o atributo `),jc(132,`code`),lO(133,`_messages`),wg(),lO(134,`, conforme segue:`),wg(),jc(135,`pre`)(136,`code`),lO(137,`{
  hasNext: true,
  items: [
    {},
    {},
    ...
  ],
  _messages: [{
    code: "INFO",
    type: "information",
    message: "Uma mensagem informativa.",
    detailedMessage: "Detalhes relativos a mensagem."
  }]
}
`),wg()(),jc(138,`p`),nu(139,`a`,15),wg(),jc(140,`h2`),lO(141,`Formato das requisições para as coleções`),wg(),jc(142,`p`),lO(143,`Os `),jc(144,`em`),lO(145,`endpoints`),wg(),lO(146,` também podem receber parâmetros na requisição que servem para especificar o tipo de resposta desejada, por exemplo: ordenação. A seguir, serão apresentados os parâmetros que poderão ser enviados nessas requisições.`),wg(),jc(147,`p`),nu(148,`a`,16),wg(),jc(149,`h3`),lO(150,`Ordenação`),wg(),jc(151,`p`),lO(152,`Quando algum componente, como `),jc(153,`code`),lO(154,`po-lookup`),wg(),lO(155,`, realizar alguma ordenação será enviado o parâmetro `),jc(156,`code`),lO(157,`order`),wg(),lO(158,`, com as seguintes características:`),wg(),jc(159,`ul`)(160,`li`),lO(161,`campos precedidos por um sinal de subtração (-) devem ser ordenados de forma decrescente;`),wg(),jc(162,`li`),lO(163,`campos que omitirem o sinal (subtração) devem ser ordenados de forma crescente.`),wg()(),jc(164,`p`),lO(165,`Por exemplo, a seguinte requisição deve retornar a lista de usuários ordenados pelo nome de forma crescente e então pela idade de forma decrescente e pelo sobrenome de forma crescente:`),wg(),jc(166,`pre`)(167,`code`),lO(168,`GET https://example.com.br/api/users?order=name,-age,surname
`),wg()(),jc(169,`p`),nu(170,`a`,17),wg(),jc(171,`h3`),lO(172,`Filtros`),wg(),jc(173,`p`),lO(174,`Aos realizar um filtro será enviado um parâmetro no formato `),jc(175,`code`),lO(176,`property=value`),wg(),lO(177,`:`),wg(),jc(178,`p`)(179,`code`),lO(180,`GET https://example.com.br/api/users?name=john&surname=doe`),wg()(),jc(181,`p`),nu(182,`a`,18),wg(),jc(183,`h3`),lO(184,`Paginação`),wg(),jc(185,`p`),lO(186,`A paginação é definida pelos parâmetros `),jc(187,`code`),lO(188,`page`),wg(),lO(189,` e `),jc(190,`code`),lO(191,`pageSize`),wg(),lO(192,`, respeitando as seguintes regras: `),wg(),jc(193,`ul`)(194,`li`),lO(195,`o valor do parâmetro `),jc(196,`code`),lO(197,`page`),wg(),lO(198,` deve ser um valor numérico (maior que zero) representando a página solicitada;`),wg(),jc(199,`li`),lO(200,`o valor do parâmetro `),jc(201,`code`),lO(202,`pageSize`),wg(),lO(203,` deve ser um valor numérico (maior que zero) representando o total de registros retornados na consulta;`),wg(),jc(204,`li`),lO(205,`os parâmetros de paginação devem obedecer a semântica de multiplicador, ou seja, se o cliente solicitou `),jc(206,`code`),lO(207,`page=2`),wg(),lO(208,` com um `),jc(209,`code`),lO(210,`pageSize=20`),wg(),lO(211,` deve-se retornar os registros de 21 até 40;`),wg(),jc(212,`li`),lO(213,`a resposta de uma requisição com paginação deve retornar um atributo indicando se existe uma próxima página disponível conforme descrito na `),jc(214,`a`,19),lO(215,`mensagem de sucesso de coleções`),wg(),lO(216,` e esse atributo deve ter o nome `),jc(217,`code`),lO(218,`hasNext`),wg(),lO(219,`.`),wg()(),jc(220,`p`),lO(221,`Por exemplo, a seguinte requisição deve retornar a quarta página de registros (dos registros 31 a 40 inclusive) de usuários:`),wg(),jc(222,`p`)(223,`code`),lO(224,`GET https://example.com.br/api/users/?page=4&pageSize=10`),wg()()())},dependencies:[Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var O=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:72,vars:0,consts:[[`p-title`,`Compatibilidade com os navegadores`,1,`guides`,`app-portal`],[1,`po-row`],[1,`po-xl-6`,`po-lg-8`,`po-md-10`,`po-sm-12`],[1,`po-table`,`po-text-color-neutral-dark-40`],[1,`po-table-header`],[1,`po-table-header-ellipsis`],[1,`po-table-row`],[1,`po-table-column`],[`href`,`https://angular.dev/reference/versions#browser-support`],[`href`,`https://angular.io/guide/deployment#local-development-in-older-browsers`]],template:function(o,s){o&1&&(jc(0,`po-page-default`,0)(1,`p`),lO(2,`Atualmente o PO está homologado para os seguintes navegadores:`),wg(),jc(3,`div`,1)(4,`div`,2)(5,`table`,3)(6,`thead`)(7,`tr`,4)(8,`th`,5),lO(9,`Navegadores`),wg(),jc(10,`th`,5),lO(11,`Versões`),wg()()(),jc(12,`tbody`)(13,`tr`,6)(14,`th`,7),lO(15,`Chrome`),wg(),jc(16,`td`,7),lO(17,`2 versões mais recentes`),wg()(),jc(18,`tr`,6)(19,`th`,7),lO(20,`Firefox`),wg(),jc(21,`td`,7),lO(22,`versão mais recente e versão de suporte estendido (ESR)`),wg()(),jc(23,`tr`,6)(24,`th`,7),lO(25,`Edge`),wg(),jc(26,`td`,7),lO(27,`2 últimas versões principais`),wg()(),jc(28,`tr`,6)(29,`th`,7),lO(30,`Android`),wg(),jc(31,`td`,7),lO(32,`2 últimas versões principais`),wg()()()()()(),jc(33,`blockquote`)(34,`p`),lO(35,`Nossa homologa\xE7\xE3o tem como base os navegadores que o Angular suporta nativamente. Para saber mais, acesse o guia
`),jc(36,`a`,8)(37,`em`),lO(38,`Browser support`),wg()(),lO(39,` do Angular.`),wg()(),jc(40,`blockquote`)(41,`p`),lO(42,`Caso precise de algum `),jc(43,`em`),lO(44,`polyfill`),wg(),lO(45,` em sua aplicação ou precisa de mais informação sobre como funciona um `),jc(46,`em`),lO(47,`polyfill`),wg(),lO(48,` acesse a documentação `),jc(49,`a`,8)(50,`em`),lO(51,`Browser support`),wg()(),lO(52,` do Angular.`),wg()(),jc(53,`h2`),lO(54,`Executando a aplicação localmente`),wg(),jc(55,`p`),lO(56,`A partir do Angular CLI v8, os comandos `),jc(57,`em`),lO(58,`ng serve`),wg(),lO(59,`, `),jc(60,`em`),lO(61,`ng test`),wg(),lO(62,` e `),jc(63,`em`),lO(64,`ng e2e`),wg(),lO(65,` são executados com ES2015, não sendo suportado para navegadores como Internet Explorer.`),wg(),jc(66,`p`),lO(67,`Para conseguir executar a aplicação localmente no Internet Explorer, veja a documentação`),nu(68,`br`),jc(69,`a`,9),lO(70,`Desenvolvendo localmente em navegadores antigos`),wg(),lO(71,`.`),wg()())},dependencies:[Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var D=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:865,vars:0,consts:[[`p-title`,`Depreciações`,1,`guides`,`app-portal`],[`href`,`https://github.com/po-ui/po-angular/blob/master/CHANGELOG.md`],[1,`po-row`],[1,`po-xl-6`,`po-lg-8`,`po-md-10`,`po-sm-12`],[1,`po-table`,`po-text-color-neutral-dark-40`],[1,`po-table-header`],[1,`po-table-header-ellipsis`],[1,`po-table-row`],[1,`po-table-column`],[`href`,`documentation/po-navbar`],[1,`po-table-column`,2,`text-align`,`center`],[`href`,`documentation/po-gauge`],[`href`,`documentation/po-tabs`],[`href`,`documentation/po-tag`],[`href`,`documentation/po-button`],[`href`,`documentation/po-button-group`],[`href`,`documentation/po-container`],[`href`,`documentation/po-table`],[`href`,`documentation/po-chart`],[`href`,`/icons`],[`href`,`documentation/po-header`],[`href`,`documentation/po-input`],[`href`,`documentation/po-dynamic-form`],[`href`,`documentation/po-select`],[`href`,`documentation/po-switch`],[`href`,`documentation`],[`href`,`https://animaliads.notion.site/Bot-o-fb3a921e8ba54bd38b39758c24613368`],[`href`,`documentation/po-page-list`],[`href`,`documentation/po-page-login`],[`href`,`documentation/po-sync`],[`href`,`documentation/po-upload`],[`href`,`documentation/po-lookup`],[`href`,`documentation/po-http-interceptor`],[`href`,`documentation/po-page-detail`],[`href`,`documentation/po-page-edit`]],template:function(o,s){o&1&&(jc(0,`po-page-default`,0)(1,`p`),lO(2,`Às vezes as mudanças são necessárias para inovar e se manter atualizado, e para tornar essas transições o mais fácil possível, assumimos o compromisso de minimizar o número de mudanças significativas e fornecer ferramentas de migração, além disso, seguimos uma política de suspensão de uso para que você tenha tempo hábil para atualizar suas aplicações com as funcionalidades mais recentes.`),wg(),jc(3,`h2`),lO(4,`Descontinuidade`),wg(),jc(5,`p`),lO(6,`Anunciamos os recursos obsoletos no nosso `),jc(7,`a`,1),lO(8,`CHANGELOG`),wg(),lO(9,`. Esses recursos obsoletos aparecem na documentação com uma marcação de `),jc(10,`em`)(11,`code`),lO(12,`Deprecated`),wg()(),lO(13,` e não são mais exemplificados nos `),jc(14,`em`),lO(15,`samples`),wg(),lO(16,` do portal. Quando anunciamos uma suspensão de uso, sempre anunciamos também um caminho de atualização recomendado. Neste documento teremos um resumo desses recursos depreciados.`),wg(),jc(17,`p`),lO(18,`Quando um recurso é descontinuado ele ainda se mantém presente geralmente pelas próximas `),jc(19,`code`),lO(20,`duas`),wg(),lO(21,` versões principais. Depois disso esses recursos serão removidos. Uma descontinuação pode ser anunciada em qualquer versão, mas a sua remoção acontecerá apenas na versão principal. Até um recurso depreciado ser removido, manteremos o suporte a problemas críticos e de segurança e também temos ferramentas de migração que geralmente automatizam a maior parte das atualizações.`),wg(),jc(22,`h2`),lO(23,`Índice`),wg(),jc(24,`p`),lO(25,`A tabela a seguir lista todos os recursos depreciados, organizados pelo release em que serão removidos. Cada item contém um link para a seção que descreve o motivo da suspensão de uso e as opções de substituição.`),wg(),jc(26,`div`,2)(27,`div`,3)(28,`table`,4)(29,`thead`)(30,`tr`,5)(31,`th`,6),lO(32,`Área`),wg(),jc(33,`th`,6),lO(34,`API ou Funcionalidade`),wg(),jc(35,`th`,6),lO(36,`Removida em`),wg()()(),jc(37,`tbody`)(38,`tr`,7)(39,`th`,8)(40,`a`,9),lO(41,`PoNavbar`),wg()(),jc(42,`td`,8),lO(43,`Componente descontinuado`),wg(),jc(44,`td`,10),lO(45,`v23`),wg()(),jc(46,`tr`,7)(47,`th`,8)(48,`a`,11),lO(49,`PoGauge`),wg()(),jc(50,`td`,8),lO(51,`Componente descontinuado`),wg(),jc(52,`td`,10),lO(53,`v22`),wg()(),jc(54,`tr`,7)(55,`th`,8)(56,`a`,12),lO(57,`PoTabs`),wg()(),jc(58,`td`,8),lO(59,`p-small`),wg(),jc(60,`td`,10),lO(61,`v18`),wg()(),jc(62,`tr`,7)(63,`th`,8)(64,`a`,13),lO(65,`PoTag`),wg()(),jc(66,`td`,8),lO(67,`p-inverse`),wg(),jc(68,`td`,10),lO(69,`v18`),wg()(),jc(70,`tr`,7)(71,`th`,8)(72,`a`,14),lO(73,`PoButton`),wg()(),jc(74,`td`,8),lO(75,`p-small`),wg(),jc(76,`td`,10),lO(77,`v17`),wg()(),jc(78,`tr`,7)(79,`th`,8)(80,`a`,15),lO(81,`PoButtonGroup`),wg()(),jc(82,`td`,8),lO(83,`p-small`),wg(),jc(84,`td`,10),lO(85,`v17`),wg()(),jc(86,`tr`,7)(87,`th`,8)(88,`a`,16),lO(89,`PoContainer`),wg()(),jc(90,`td`,8),lO(91,`p-no-shadow`),wg(),jc(92,`td`,10),lO(93,`v17`),wg()(),jc(94,`tr`,7)(95,`th`,8)(96,`a`,17),lO(97,`PoTable`),wg()(),jc(98,`td`,8),lO(99,`p-hide-text-overflow`),wg(),jc(100,`td`,10),lO(101,`v17`),wg()()()()()(),jc(102,`blockquote`)(103,`p`),lO(104,`Ver mais detalhes no nosso `),jc(105,`a`,1),lO(106,`CHANGELOG`),wg(),lO(107,` e na nossa documentação das ferramentas de migração que automatizam a maioria dos breaking changes.`),wg()(),jc(108,`h2`),lO(109,`Depreciações`),wg(),jc(110,`p`),lO(111,`Esta seção contém uma lista completa de todos os recursos obsoletos com detalhes para ajudá-lo a planejar sua migração.`),wg(),jc(112,`h3`),lO(113,`PoGauge`),wg(),jc(114,`div`,2)(115,`div`,3)(116,`table`,4)(117,`thead`)(118,`tr`,5)(119,`th`,6),lO(120,`Recurso`),wg(),jc(121,`th`,6),lO(122,`Substituição`),wg(),jc(123,`th`,6),lO(124,`Anúncio da Depreciação`),wg(),jc(125,`th`,6),lO(126,`Removido em`),wg()()(),jc(127,`tbody`)(128,`tr`,7)(129,`th`,8),lO(130,`Componente po-gauge`),wg(),jc(131,`td`,8)(132,`a`,18),lO(133,`po-chart (type=gauge)`),wg()(),jc(134,`td`,10),lO(135,`v19`),wg(),jc(136,`td`,10),lO(137,`v22`),wg()()()()()(),jc(138,`p`),lO(139,`O componente `),jc(140,`code`),lO(141,`po-gauge`),wg(),lO(142,` foi removido. Utilize o `),jc(143,`code`),lO(144,`po-chart`),wg(),lO(145,` com `),jc(146,`code`),lO(147,`p-type="gauge"`),wg(),lO(148,` como alternativa.`),wg(),jc(149,`p`),lO(150,`Antes:`),wg(),jc(151,`pre`)(152,`code`),lO(153,`<po-gauge [p-value]="72" [p-ranges]="ranges"></po-gauge>
`),wg()(),jc(154,`p`),lO(155,`Depois:`),wg(),jc(156,`pre`)(157,`code`),lO(158,`<po-chart p-type="gauge" [p-options]="gaugeOptions" [p-series]="gaugeSeries"></po-chart>
`),wg()(),jc(159,`h3`),lO(160,`PoButton`),wg(),jc(161,`div`,2)(162,`div`,3)(163,`table`,4)(164,`thead`)(165,`tr`,5)(166,`th`,6),lO(167,`Recurso`),wg(),jc(168,`th`,6),lO(169,`Substituição`),wg(),jc(170,`th`,6),lO(171,`Anúncio da Depreciação`),wg(),jc(172,`th`,6),lO(173,`Removido em`),wg()()(),jc(174,`tbody`)(175,`tr`,7)(176,`th`,8),lO(177,`p-type`),wg(),jc(178,`td`,8)(179,`a`,14),lO(180,`p-kind`),wg()(),jc(181,`td`,10),lO(182,`v6`),wg(),jc(183,`td`,10),lO(184,`v15`),wg()()()()()(),jc(185,`h4`),lO(186,`Deprecia p-type default`),wg(),jc(187,`p`),lO(188,`Indicamos o uso da propriedade `),jc(189,`code`),lO(190,`p-kind`),wg(),lO(191,` secondary`),wg(),jc(192,`p`),lO(193,`Antes:`),wg(),jc(194,`pre`)(195,`code`),lO(196,`// html
<po-button [p-type]="default" ...></po-button>
`),wg()(),jc(197,`p`),lO(198,`Depois:`),wg(),jc(199,`pre`)(200,`code`),lO(201,`// html
<po-button p-kind="secondary" ...></po-button>
`),wg()(),jc(202,`h4`),lO(203,`Deprecia p-type primary`),wg(),jc(204,`p`),lO(205,`Indicamos o uso da propriedade `),jc(206,`code`),lO(207,`p-kind`),wg(),lO(208,` primary`),wg(),jc(209,`p`),lO(210,`Antes:`),wg(),jc(211,`pre`)(212,`code`),lO(213,`// html
<po-button [p-type]="primary" ...></po-button>
`),wg()(),jc(214,`p`),lO(215,`Depois:`),wg(),jc(216,`pre`)(217,`code`),lO(218,`// html
<po-button p-kind="primary" ...></po-button>
`),wg()(),jc(219,`h4`),lO(220,`Deprecia p-type link`),wg(),jc(221,`p`),lO(222,`Indicamos o uso da propriedade `),jc(223,`code`),lO(224,`p-kind`),wg(),lO(225,` tertiary`),wg(),jc(226,`p`),lO(227,`Antes:`),wg(),jc(228,`pre`)(229,`code`),lO(230,`// html
<po-button [p-type]="link" ...></po-button>
`),wg()(),jc(231,`p`),lO(232,`Depois:`),wg(),jc(233,`pre`)(234,`code`),lO(235,`// html
<po-button p-kind="tertiary" ...></po-button>
`),wg()(),jc(236,`h4`),lO(237,`Deprecia p-type danger`),wg(),jc(238,`p`),lO(239,`Indicamos o uso da propriedade `),jc(240,`code`),lO(241,`p-danger`),wg(),lO(242,` true`),wg(),jc(243,`p`),lO(244,`Antes:`),wg(),jc(245,`pre`)(246,`code`),lO(247,`// html
<po-button [p-type]="danger" ...></po-button>
`),wg()(),jc(248,`p`),lO(249,`Depois:`),wg(),jc(250,`pre`)(251,`code`),lO(252,`// html
<po-button [p-danger]="true" ...></po-button>
`),wg()(),jc(253,`h3`),lO(254,`HttpClientModule`),wg(),jc(255,`blockquote`)(256,`p`),lO(257,`O módulo HttpClientModule foi removido do projeto não sendo mais importado diretamente nos componentes que o utilizavam e por motivos de boas práticas é necessário importar o HttpClientModule apenas no módulo principal da aplicação.`),wg()(),jc(258,`p`),lO(259,`Exemplo:`),wg(),jc(260,`pre`)(261,`code`),lO(262,`// app.module.ts
...
import { HttpClientModule } from '@angular/common/http';
...

@NgModule({
  declarations: [
    ...
    AppComponent
    ...
  ],
  imports: [
    ...
    HttpClientModule,
    ...
  ],
  providers: [],
  bootstrap: [
    ...
    AppComponent
    ...
    ]
})
export class AppModule { }
`),wg()(),jc(263,`h3`),lO(264,`Remoção da biblioteca POIcon`),wg(),jc(265,`p`),lO(266,`A partir da v21, a biblioteca de ícones POIcon foi removida. O conjunto padrão de ícones passa a ser a lib Animalia Icons.`),wg(),jc(267,`p`),lO(268,`Antes - PO Icon (legado)`),wg(),jc(269,`pre`)(270,`code`),lO(271,`//html
<i class="po-icon po-icon-user"></i>
`),wg()(),jc(272,`p`),lO(273,`Depois - Animalia Icons (atual)`),wg(),jc(274,`pre`)(275,`code`),lO(276,`//html
<i class="an an-user"></i>
`),wg()(),jc(277,`blockquote`)(278,`p`),lO(279,`Para saber como utilizar, veja em `),jc(280,`a`,19),lO(281,`Biblioteca de ícones`),wg(),lO(282,` do PO UI.`),wg()(),jc(283,`h2`),lO(284,`Breaking Changes`),wg(),jc(285,`div`,2)(286,`div`,3)(287,`table`,4)(288,`thead`)(289,`tr`,5)(290,`th`,6),lO(291,`Área`),wg(),jc(292,`th`,6),lO(293,`Funcionalidade`),wg(),jc(294,`th`,6),lO(295,`Substituição`),wg(),jc(296,`th`,6),lO(297,`Removida em`),wg()()(),jc(298,`tbody`)(299,`tr`,7)(300,`th`,8)(301,`a`,11),lO(302,`PoGauge`),wg()(),jc(303,`td`,8),lO(304,`Componente descontinuado`),wg(),jc(305,`td`,8)(306,`a`,18),lO(307,`PoChart (type=gauge)`),wg()(),jc(308,`td`,10),lO(309,`v22`),wg()(),jc(310,`tr`,7)(311,`th`,8)(312,`a`,9),lO(313,`PoNavbar`),wg()(),jc(314,`td`,8),lO(315,`Componente descontinuado`),wg(),jc(316,`td`,8)(317,`a`,20),lO(318,`PoHeader`),wg()(),jc(319,`td`,10),lO(320,`v23`),wg()(),jc(321,`tr`,7)(322,`th`,8)(323,`a`,21),lO(324,`Campos de formulários`),wg()(),jc(325,`td`,8),lO(326,`p-additional-help-tooltip`),wg(),jc(327,`td`,8),lO(328,`p-helper`),wg(),jc(329,`td`,10),lO(330,`v23`),wg()(),jc(331,`tr`,7)(332,`th`,8)(333,`a`,22),lO(334,`PoDynamicForm`),wg()(),jc(335,`td`,8),lO(336,`p-additional-help-tooltip`),wg(),jc(337,`td`,8),lO(338,`p-helper`),wg(),jc(339,`td`,10),lO(340,`v23`),wg()(),jc(341,`tr`,7)(342,`th`,8)(343,`a`,19),lO(344,`POIcon`),wg()(),jc(345,`td`,8),lO(346,`Biblioteca de ícones`),wg(),jc(347,`td`,8),lO(348,`Animalia Icons`),wg(),jc(349,`td`,10),lO(350,`v21`),wg()(),jc(351,`tr`,7)(352,`th`,8)(353,`a`,12),lO(354,`PoTabs`),wg()(),jc(355,`td`,8),lO(356,`p-small`),wg(),jc(357,`td`,8),lO(358,`-`),wg(),jc(359,`td`,10),lO(360,`v18`),wg()(),jc(361,`tr`,7)(362,`th`,8)(363,`a`,13),lO(364,`PoTag`),wg()(),jc(365,`td`,8),lO(366,`p-inverse`),wg(),jc(367,`td`,8),lO(368,`-`),wg(),jc(369,`td`,10),lO(370,`v18`),wg()(),jc(371,`tr`,7)(372,`th`,8)(373,`a`,14),lO(374,`PoButton`),wg()(),jc(375,`td`,8),lO(376,`p-small`),wg(),jc(377,`td`,8),lO(378,`-`),wg(),jc(379,`td`,10),lO(380,`v17`),wg()(),jc(381,`tr`,7)(382,`th`,8)(383,`a`,15),lO(384,`PoButtonGroup`),wg()(),jc(385,`td`,8),lO(386,`p-small`),wg(),jc(387,`td`,8),lO(388,`-`),wg(),jc(389,`td`,10),lO(390,`v17`),wg()(),jc(391,`tr`,7)(392,`th`,8)(393,`a`,16),lO(394,`PoContainer`),wg()(),jc(395,`td`,8),lO(396,`p-no-shadow`),wg(),jc(397,`td`,8),lO(398,`-`),wg(),jc(399,`td`,10),lO(400,`v17`),wg()(),jc(401,`tr`,7)(402,`th`,8)(403,`a`,17),lO(404,`PoTable`),wg()(),jc(405,`td`,8),lO(406,`p-hide-text-overflow`),wg(),jc(407,`td`,8),lO(408,`-`),wg(),jc(409,`td`,10),lO(410,`v17`),wg()(),jc(411,`tr`,7)(412,`th`,8)(413,`a`,14),lO(414,`PoButton`),wg()(),jc(415,`td`,8),lO(416,`p-type`),wg(),jc(417,`td`,8),lO(418,`-`),wg(),jc(419,`td`,10),lO(420,`v15`),wg()(),jc(421,`tr`,7)(422,`th`,8),lO(423,`Build`),wg(),jc(424,`td`,8),lO(425,`HttpClientModule`),wg(),jc(426,`td`,8),lO(427,`-`),wg(),jc(428,`td`,10),lO(429,`v15`),wg()(),jc(430,`tr`,7)(431,`th`,8)(432,`a`,21),lO(433,`PoDynamicFormFields`),wg()(),jc(434,`td`,8),lO(435,`p-auto-focus`),wg(),jc(436,`td`,8),lO(437,`-`),wg(),jc(438,`td`,10),lO(439,`v14`),wg()(),jc(440,`tr`,7)(441,`th`,8)(442,`a`,23),lO(443,`PoSelect`),wg()(),jc(444,`td`,8),lO(445,`p-auto-focus`),wg(),jc(446,`td`,8),lO(447,`-`),wg(),jc(448,`td`,10),lO(449,`v14`),wg()(),jc(450,`tr`,7)(451,`th`,8)(452,`a`,24),lO(453,`PoSwitch`),wg()(),jc(454,`td`,8),lO(455,`p-auto-focus`),wg(),jc(456,`td`,8),lO(457,`-`),wg(),jc(458,`td`,10),lO(459,`v14`),wg()(),jc(460,`tr`,7)(461,`th`,8)(462,`a`,14),lO(463,`PoButton`),wg()(),jc(464,`td`,8),lO(465,`p-auto-focus`),wg(),jc(466,`td`,8),lO(467,`-`),wg(),jc(468,`td`,10),lO(469,`v14`),wg()(),jc(470,`tr`,7)(471,`th`,8)(472,`a`,21),lO(473,`PoSelectOptionTemplate`),wg()(),jc(474,`td`,8),lO(475,`-`),wg(),jc(476,`td`,8),lO(477,`PoComboOptionTemplate`),wg(),jc(478,`td`,10),lO(479,`v14`),wg()(),jc(480,`tr`,7)(481,`th`,8)(482,`a`,25),lO(483,`Components`),wg()(),jc(484,`td`,8),lO(485,`diminuição da altura em pequenas resoluções. `),jc(486,`a`,26),lO(487,`Ver mais`),wg()(),jc(488,`td`,8),lO(489,`-`),wg(),jc(490,`td`,10),lO(491,`v14`),wg()(),jc(492,`tr`,7)(493,`th`,8)(494,`a`,18),lO(495,`PoChart`),wg()(),jc(496,`td`,8),lO(497,`PoChartGaugeSerie`),wg(),jc(498,`td`,8)(499,`a`,11),lO(500,`PoGauge`),wg()(),jc(501,`td`,10),lO(502,`v6`),wg()(),jc(503,`tr`,7)(504,`th`,8)(505,`a`,18),lO(506,`PoChart`),wg()(),jc(507,`td`,8),lO(508,`PoChartSerie.category`),wg(),jc(509,`td`,8),lO(510,`PoChartSerie.label`),wg(),jc(511,`td`,10),lO(512,`v6`),wg()(),jc(513,`tr`,7)(514,`th`,8)(515,`a`,18),lO(516,`PoChart`),wg()(),jc(517,`td`,8),lO(518,`PoChartSerie.value`),wg(),jc(519,`td`,8),lO(520,`PoChartSerie.data`),wg(),jc(521,`td`,10),lO(522,`v6`),wg()(),jc(523,`tr`,7)(524,`th`,8)(525,`a`,18),lO(526,`PoChart`),wg()(),jc(527,`td`,8),lO(528,`PoChartType.Gauge`),wg(),jc(529,`td`,8)(530,`a`,11),lO(531,`PoGauge`),wg()(),jc(532,`td`,10),lO(533,`v6`),wg()(),jc(534,`tr`,7)(535,`th`,8)(536,`a`,9),lO(537,`PoNavBar`),wg()(),jc(538,`td`,8),lO(539,`p-menu`),wg(),jc(540,`td`,8),lO(541,`-`),wg(),jc(542,`td`,10),lO(543,`v6`),wg()(),jc(544,`tr`,7)(545,`th`,8)(546,`a`,18),lO(547,`PoChart`),wg()(),jc(548,`td`,8),lO(549,`PoPieChartSeries`),wg(),jc(550,`td`,8),lO(551,`PoChartSerie`),wg(),jc(552,`td`,10),lO(553,`v5`),wg()(),jc(554,`tr`,7)(555,`th`,8)(556,`a`,18),lO(557,`PoChart`),wg()(),jc(558,`td`,8),lO(559,`PoDonutChartSeries`),wg(),jc(560,`td`,8),lO(561,`PoChartSerie`),wg(),jc(562,`td`,10),lO(563,`v5`),wg()(),jc(564,`tr`,7)(565,`th`,8)(566,`a`,18),lO(567,`PoChart`),wg()(),jc(568,`td`,8),lO(569,`PoBarChartSeries`),wg(),jc(570,`td`,8),lO(571,`PoChartSerie`),wg(),jc(572,`td`,10),lO(573,`v5`),wg()(),jc(574,`tr`,7)(575,`th`,8)(576,`a`,18),lO(577,`PoChart`),wg()(),jc(578,`td`,8),lO(579,`PoColumnChartSeries`),wg(),jc(580,`td`,8),lO(581,`PoChartSerie`),wg(),jc(582,`td`,10),lO(583,`v5`),wg()(),jc(584,`tr`,7)(585,`th`,8)(586,`a`,18),lO(587,`PoChart`),wg()(),jc(588,`td`,8),lO(589,`PoLineChartSeries`),wg(),jc(590,`td`,8),lO(591,`PoChartSerie`),wg(),jc(592,`td`,10),lO(593,`v5`),wg()(),jc(594,`tr`,7)(595,`th`,8)(596,`a`,17),lO(597,`PoTable`),wg()(),jc(598,`td`,8),lO(599,`p-single-select`),wg(),jc(600,`td`,8),lO(601,`[p-single-select]="false"`),wg(),jc(602,`td`,10),lO(603,`v5`),wg()(),jc(604,`tr`,7)(605,`th`,8)(606,`a`,17),lO(607,`PoTable`),wg()(),jc(608,`td`,8),lO(609,`p-hide-select-all`),wg(),jc(610,`td`,8),lO(611,`[p-hide-select-all]="false"`),wg(),jc(612,`td`,10),lO(613,`v5`),wg()(),jc(614,`tr`,7)(615,`th`,8)(616,`a`,17),lO(617,`PoTable`),wg()(),jc(618,`td`,8),lO(619,`p-striped`),wg(),jc(620,`td`,8),lO(621,`[p-striped]="false"`),wg(),jc(622,`td`,10),lO(623,`v5`),wg()(),jc(624,`tr`,7)(625,`th`,8)(626,`a`,17),lO(627,`PoTable`),wg()(),jc(628,`td`,8),lO(629,`p-show-more-disabled`),wg(),jc(630,`td`,8),lO(631,`[p-show-more-disabled]="false"`),wg(),jc(632,`td`,10),lO(633,`v5`),wg()(),jc(634,`tr`,7)(635,`th`,8)(636,`a`,17),lO(637,`PoTable`),wg()(),jc(638,`td`,8),lO(639,`p-sort`),wg(),jc(640,`td`,8),lO(641,`[p-sort]="false"`),wg(),jc(642,`td`,10),lO(643,`v5`),wg()(),jc(644,`tr`,7)(645,`th`,8)(646,`a`,27),lO(647,`PoPageList`),wg()(),jc(648,`td`,8),lO(649,`PoPageFilter.ngModel`),wg(),jc(650,`td`,8),lO(651,`-`),wg(),jc(652,`td`,10),lO(653,`v4`),wg()(),jc(654,`tr`,7)(655,`th`,8)(656,`a`,27),lO(657,`PoPageList`),wg()(),jc(658,`td`,8),lO(659,`PoPageFilter.action: string`),wg(),jc(660,`td`,8),lO(661,`PoPageFilter.action: Function`),wg(),jc(662,`td`,10),lO(663,`v4`),wg()(),jc(664,`tr`,7)(665,`th`,8)(666,`a`,27),lO(667,`PoPageList`),wg()(),jc(668,`td`,8),lO(669,`PoPageFilter.advancedAction: string`),wg(),jc(670,`td`,8),lO(671,`PoPageFilter.advancedAction: Function`),wg(),jc(672,`td`,10),lO(673,`v4`),wg()(),jc(674,`tr`,7)(675,`th`,8)(676,`a`,28),lO(677,`PoPageLogin`),wg()(),jc(678,`td`,8),lO(679,`PoPageLoginLiterals.title`),wg(),jc(680,`td`,8),lO(681,`p-product-name`),wg(),jc(682,`td`,10),lO(683,`v4`),wg()(),jc(684,`tr`,7)(685,`th`,8)(686,`a`,18),lO(687,`PoChart`),wg()(),jc(688,`td`,8),lO(689,`PoChartOptions.axis.axisXGridLines`),wg(),jc(690,`td`,8),lO(691,`PoChartOptions.axis.gridLines`),wg(),jc(692,`td`,10),lO(693,`v4`),wg()(),jc(694,`tr`,7)(695,`th`,8)(696,`a`,29),lO(697,`PoSync`),wg()(),jc(698,`td`,8),lO(699,`portinari_sync_date`),wg(),jc(700,`td`,8),lO(701,`po_sync_date`),wg(),jc(702,`td`,10),lO(703,`v3`),wg()(),jc(704,`tr`,7)(705,`th`,8)(706,`a`,30),lO(707,`PoUpload`),wg()(),jc(708,`td`,8),lO(709,`PoUploadLiterals.cancel`),wg(),jc(710,`td`,8),lO(711,`-`),wg(),jc(712,`td`,10),lO(713,`v3`),wg()(),jc(714,`tr`,7)(715,`th`,8)(716,`a`,30),lO(717,`PoUpload`),wg()(),jc(718,`td`,8),lO(719,`PoUploadLiterals.deleteFile`),wg(),jc(720,`td`,8),lO(721,`-`),wg(),jc(722,`td`,10),lO(723,`v3`),wg()(),jc(724,`tr`,7)(725,`th`,8)(726,`a`,30),lO(727,`PoUpload`),wg()(),jc(728,`td`,8),lO(729,`PoUploadLiterals.tryAgain`),wg(),jc(730,`td`,8),lO(731,`-`),wg(),jc(732,`td`,10),lO(733,`v3`),wg()(),jc(734,`tr`,7)(735,`th`,8)(736,`a`,31),lO(737,`PoLookup`),wg()(),jc(738,`td`,8),lO(739,`getFilteredData`),wg(),jc(740,`td`,8),lO(741,`getFilteredItems`),wg(),jc(742,`td`,10),lO(743,`v3`),wg()(),jc(744,`tr`,7)(745,`th`,8)(746,`a`,17),lO(747,`PoTable`),wg()(),jc(748,`td`,8),lO(749,`p-checkbox`),wg(),jc(750,`td`,8),lO(751,`p-selectable`),wg(),jc(752,`td`,10),lO(753,`v3`),wg()(),jc(754,`tr`,7)(755,`th`,8)(756,`a`,21),lO(757,`PoField`),wg()(),jc(758,`td`,8),lO(759,`p-focus`),wg(),jc(760,`td`,8),lO(761,`p-auto-focus`),wg(),jc(762,`td`,10),lO(763,`v2`),wg()(),jc(764,`tr`,7)(765,`th`,8),lO(766,`Packages`),wg(),jc(767,`td`,8),lO(768,`@portinari/portinari-ui`),wg(),jc(769,`td`,8),lO(770,`@po-ui/ng-components`),wg(),jc(771,`td`,10),lO(772,`v2`),wg()(),jc(773,`tr`,7)(774,`th`,8),lO(775,`Packages`),wg(),jc(776,`td`,8),lO(777,`@portinari/portinari-templates`),wg(),jc(778,`td`,8),lO(779,`@po-ui/ng-templates`),wg(),jc(780,`td`,10),lO(781,`v2`),wg()(),jc(782,`tr`,7)(783,`th`,8),lO(784,`Packages`),wg(),jc(785,`td`,8),lO(786,`@portinari/portinari-code-editor`),wg(),jc(787,`td`,8),lO(788,`@po-ui/ng-code-editor`),wg(),jc(789,`td`,10),lO(790,`v2`),wg()(),jc(791,`tr`,7)(792,`th`,8),lO(793,`Packages`),wg(),jc(794,`td`,8),lO(795,`@portinari/portinari-storage`),wg(),jc(796,`td`,8),lO(797,`@po-ui/ng-storage`),wg(),jc(798,`td`,10),lO(799,`v2`),wg()(),jc(800,`tr`,7)(801,`th`,8),lO(802,`Packages`),wg(),jc(803,`td`,8),lO(804,`@portinari/portinari-sync`),wg(),jc(805,`td`,8),lO(806,`@po-ui/ng-sync`),wg(),jc(807,`td`,10),lO(808,`v2`),wg()(),jc(809,`tr`,7)(810,`th`,8)(811,`a`,32),lO(812,`PoHttpInterceptor`),wg()(),jc(813,`td`,8),lO(814,`X-Portinari-No-Message`),wg(),jc(815,`td`,8),lO(816,`X-PO-No-Message`),wg(),jc(817,`td`,10),lO(818,`v2`),wg()(),jc(819,`tr`,7)(820,`th`,8)(821,`a`,32),lO(822,`PoHttpInterceptor`),wg()(),jc(823,`td`,8),lO(824,`X-Portinari-SCREEN-LOCK`),wg(),jc(825,`td`,8),lO(826,`X-PO-SCREEN-LOCK`),wg(),jc(827,`td`,10),lO(828,`v2`),wg()(),jc(829,`tr`,7)(830,`th`,8)(831,`a`,32),lO(832,`PoHttpInterceptor`),wg()(),jc(833,`td`,8),lO(834,`X-Portinari-No-Count-Pending-Requests`),wg(),jc(835,`td`,8),lO(836,`X-PO-No-Count-Pending-Requests`),wg(),jc(837,`td`,10),lO(838,`v2`),wg()(),jc(839,`tr`,7)(840,`th`,8)(841,`a`,33),lO(842,`PoPageDetail`),wg()(),jc(843,`td`,8),lO(844,`reconhecimento das ações via funções no typescript`),wg(),jc(845,`td`,8),lO(846,`utilização das propriedades p-back, p-edit e p-remove`),wg(),jc(847,`td`,10),lO(848,`v2`),wg()(),jc(849,`tr`,7)(850,`th`,8)(851,`a`,34),lO(852,`PoPageEdit`),wg()(),jc(853,`td`,8),lO(854,`reconhecimento das ações via funções no typescript`),wg(),jc(855,`td`,8),lO(856,`utilização das propriedades p-save, p-save-new e p-cancel`),wg(),jc(857,`td`,10),lO(858,`v2`),wg()()()()()(),jc(859,`blockquote`)(860,`p`),lO(861,`Ver mais detalhes no nosso `),jc(862,`a`,1),lO(863,`CHANGELOG`),wg(),lO(864,` e na nossa documentação das ferramentas de migração que automatizam a maioria dos breaking changes.`),wg()()())},dependencies:[Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var M=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:423,vars:0,consts:[[`p-title`,`Contribuindo para o PO UI`,1,`guides`,`app-portal`],[`href`,`guides/development-flow#code-of-conduct`],[`href`,`guides/development-flow#flow`],[`href`,`guides/development-flow#create-issue`],[`href`,`guides/development-flow#code-reproduction`],[`href`,`guides/development-flow#contribute`],[`href`,`guides/development-flow#setup`],[`href`,`guides/development-flow#modifying-components`],[`href`,`guides/development-flow#preview-changes`],[`href`,`guides/development-flow#tests`],[`href`,`guides/development-flow#lint`],[`href`,`guides/development-flow#po-style`],[`href`,`guides/development-flow#build`],[`href`,`guides/development-flow#pr`],[`id`,`code-of-conduct`],[`href`,`https://github.com/po-ui/po-angular/blob/master/CODE_OF_CONDUCT.md`],[`id`,`flow`],[1,`card-list-item`],[`id`,`create-issue`],[1,`po-row`],[1,`po-pl-md-5`,`po-pr-lg-5`],[`src`,`./assets/graphics/contribute/bug.png`,1,`card-list-icon`],[1,`po-font-subtitle`,`po-pb-1`],[`href`,`https://github.com/po-ui/po-angular/issues/439`],[`href`,`https://github.com/po-ui/po-angular/pulls`],[`id`,`code-reproduction`],[`src`,`./assets/graphics/contribute/ambiente_teste.png`,1,`card-list-icon`],[`href`,`https://stackblitz.com/edit/poui-module`],[`id`,`contribute`],[`src`,`./assets/graphics/contribute/colabore.png`,1,`card-list-icon`],[1,`po-font-text`],[`id`,`setup`],[`src`,`./assets/graphics/contribute/setup.png`,1,`card-list-icon`],[1,`po-text-color-neutral-dark-40`],[`href`,`https://git-scm.com/book/en/v2`],[`href`,`https://github.com/po-ui/po-angular`],[`id`,`modifying-components`],[`src`,`./assets/graphics/contribute/modificando.png`,1,`card-list-icon`],[`href`,`https://github.com/po-ui/po-angular/blob/master/STYLEGUIDE.md`],[`href`,`https://github.com/po-ui/po-angular/blob/master/HOW_TO_DOCUMENT.md`],[`id`,`preview-changes`],[`src`,`./assets/graphics/contribute/rodando_local.png`,1,`card-list-icon`],[`id`,`tests`],[`src`,`./assets/graphics/contribute/teste_unitario.png`,1,`card-list-icon`],[`id`,`lint`],[`src`,`./assets/graphics/contribute/lint.png`,1,`card-list-icon`],[`id`,`po-style`],[`src`,`./assets/graphics/contribute/css.png`,1,`card-list-icon`],[`href`,`https://github.com/po-ui/po-style`],[`href`,`https://github.com/po-ui/po-style/blob/master/README.md`],[`id`,`build`],[`src`,`./assets/graphics/contribute/build.png`,1,`card-list-icon`],[`href`,`https://github.com/po-ui/po-angular/blob/master/CONTRIBUTING.md#commits`],[`id`,`pr`],[1,`po-pl-sm-5`,`po-pl-md-5`,`po-pr-lg-5`],[`src`,`./assets/graphics/contribute/pr.png`,1,`card-list-icon`],[`href`,`https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork`],[`href`,`https://github.com/po-ui/po-angular/blob/master/CONTRIBUTING.md#pull-requests`]],template:function(o,s){o&1&&(jc(0,`po-page-default`,0)(1,`h4`),lO(2,`Obrigado pelo interesse em contribuir para a biblioteca PO UI!`),wg(),jc(3,`h2`),lO(4,`Conteúdo`),wg(),jc(5,`ul`)(6,`li`)(7,`a`,1),lO(8,`Código de conduta`),wg()(),jc(9,`li`)(10,`a`,2),lO(11,`Fluxo`),wg(),jc(12,`ul`)(13,`li`)(14,`a`,3),lO(15,`Criando `),jc(16,`em`),lO(17,`issue`),wg(),lO(18,` no GitHub`),wg()(),jc(19,`li`)(20,`a`,4),lO(21,`Criando reprodução de código para nova `),jc(22,`em`),lO(23,`issue`),wg()()(),jc(24,`li`)(25,`a`,5),lO(26,`Colaborando com o PO UI`),wg()(),jc(27,`li`)(28,`a`,6),lO(29,`Setup Inicial`),wg()(),jc(30,`li`)(31,`a`,7),lO(32,`Modificando Componentes`),wg()(),jc(33,`li`)(34,`a`,8),lO(35,`Subindo as modificações localmente`),wg()(),jc(36,`li`)(37,`a`,9),lO(38,`Testes Unitários`),wg()(),jc(39,`li`)(40,`a`,10),lO(41,`ES Lint`),wg()(),jc(42,`li`)(43,`a`,11),lO(44,`Po Style`),wg()(),jc(45,`li`)(46,`a`,12),lO(47,`Build das modificações`),wg()(),jc(48,`li`)(49,`a`,13),lO(50,`Criando Pull Request`),wg()()()()(),jc(51,`p`),nu(52,`a`,14),wg(),jc(53,`h3`),lO(54,`Código de conduta`),wg(),jc(55,`p`),lO(56,`Primeiramente, pedimos para que leiam com atenção nosso `),jc(57,`a`,15),lO(58,`Código de Conduta`),wg(),lO(59,` para se inteirarem sobre nossas regras.`),wg(),jc(60,`p`),nu(61,`a`,16),wg(),jc(62,`h2`),lO(63,`Fluxo`),wg(),jc(64,`p`),lO(65,`Este guia tem por objetivo definir as regras para criação de `),jc(66,`em`),lO(67,`Issues`),wg(),lO(68,` relacionadas à melhorias ou defeitos na biblioteca, assim como orientar no interesse em colaborar com o PO UI, definindo premissas para criação de novas `),jc(69,`em`),lO(70,`Branchs`),wg(),lO(71,`, `),jc(72,`em`),lO(73,`Pull Requests`),wg(),lO(74,` e `),jc(75,`em`),lO(76,`Commits`),wg(),lO(77,` no projeto PO UI. `),wg(),jc(78,`div`)(79,`div`,17),nu(80,`a`,18),jc(81,`div`,19)(82,`div`,20),nu(83,`img`,21),jc(84,`h3`,22),lO(85,`Criando uma `),jc(86,`em`),lO(87,`issue`),wg(),lO(88,` no GitHub`),wg(),jc(89,`ul`)(90,`li`),lO(91,`Antes de tudo, se você possui alguma questão relacionada ao uso da biblioteca, bem como dúvidas relacionadas a componentes, bibliotecas PO UI, por favor pergunte nos nossos `),jc(92,`a`,23),lO(93,`canais de comunicação`),wg(),lO(94,`.`),wg(),jc(95,`li`),lO(96,`A lista de `),jc(97,`em`),lO(98,`issues`),wg(),lO(99,` do repositório PO UI é de uso exclusivo para informe de `),jc(100,`em`),lO(101,`bugs`),wg(),lO(102,` e requisições de melhorias. `),jc(103,`em`),lO(104,`Issues`),wg(),lO(105,` que não se enquadrarem nisso serão fechadas imediatamente.`),wg(),jc(106,`li`),lO(107,`Se você tem uma nova `),jc(108,`em`),lO(109,`feature`),wg(),lO(110,` para nos sugerir ou então deseja reportar um bug, por favor avalie se nas `),jc(111,`a`,24)(112,`em`),lO(113,`Pull Requests`),wg(),lO(114,` do PO UI`),wg(),lO(115,` não tem nenhuma submissão anterior que resolva o problema, eliminando assim a eventual hipótese de duplicidade.`),wg(),jc(116,`li`),lO(117,`É requerido que você descreva de maneira clara os passos necessários para reproduzir a `),jc(118,`em`),lO(119,`issue`),wg(),lO(120,` reportada. Entenda que, apesar de sermos sempre solícitos e darmos o pronto-apoio em nossos canais, reproduzir erros sem evidências diretas tomam um grande tempo da equipe.`),wg(),jc(121,`li`),lO(122,`As `),jc(123,`em`),lO(124,`issues`),wg(),lO(125,` que não tiverem uma descrição detalhada e um passo-a-passo para reprodução terão menor prioridade. Se em caso de solicitação do `),jc(126,`em`),lO(127,`core team`),wg(),lO(128,` por maiores evidências, o autor da `),jc(129,`em`),lO(130,`issue`),wg(),lO(131,` terá 30 dias para resposta. Se neste período não houver qualquer resposta, então a `),jc(132,`em`),lO(133,`issue`),wg(),lO(134,` será fechada.`),wg()()()()(),jc(135,`div`,17),nu(136,`a`,25),jc(137,`div`,19)(138,`div`,20),nu(139,`img`,26),jc(140,`h3`,22),lO(141,`Criando reprodução de código para nova `),jc(142,`em`),lO(143,`issue`),wg()(),jc(144,`ul`)(145,`li`),lO(146,`Crie uma nova aplicação em Angular incluindo o componente e o comportamento reportado para nossa análise.`),wg(),jc(147,`li`),lO(148,`Adicione o mínimo de código necessário para reprodução do bug, facilitando assim a verificação da situação.`),wg(),jc(149,`li`),lO(150,`Publique a aplicação no GitHub e inclua o link ao criar a issue.`),wg(),jc(151,`li`),lO(152,`Pode-se também usar o `),jc(153,`a`,27),lO(154,`Stackblitz`),wg(),lO(155,` para reproduzir o `),jc(156,`em`),lO(157,`bug`),wg(),lO(158,` relatado na `),jc(159,`em`),lO(160,`issue`),wg(),lO(161,`.`),wg(),jc(162,`li`),lO(163,`Certifique-se de incluir os passos para reprodução da issue. Estes passos devem ser claros e simples de seguir.`),wg()()()()(),jc(164,`div`,17),nu(165,`a`,28),jc(166,`div`,19)(167,`div`,20),nu(168,`img`,29),jc(169,`h3`,22),lO(170,`Colaborando com o PO UI`),wg(),jc(171,`p`,30),lO(172,`Mais uma vez agradecemos por dedicar seu tempo para contribuir com o PO UI! Antes de submeter uma `),jc(173,`em`),lO(174,`pull request`),wg(),lO(175,`, pedimos pra que você crie uma `),jc(176,`em`),lO(177,`issue`),wg(),lO(178,` reportando uma eventual sugestão de melhoria, nova funcionalidade ou correção de bug e nos deixe ciente de que deseja criar uma `),jc(179,`em`),lO(180,`pull request`),wg(),lO(181,` para isso. Caso se trate de uma `),jc(182,`em`),lO(183,`issue`),wg(),lO(184,` já existente, por favor comente na `),jc(185,`em`),lO(186,`issue`),wg(),lO(187,`. Isso nos ajuda a acompanhar as `),jc(188,`em`),lO(189,`pull requests`),wg(),lO(190,` e também evitar duplicidades.`),wg()()()(),jc(191,`div`,17),nu(192,`a`,31),jc(193,`div`,19)(194,`div`,20),nu(195,`img`,32),jc(196,`h3`,22),lO(197,`Setup Inicial`),wg(),jc(198,`blockquote`,33),lO(199,`Para seguir o guia é fundamental o conhecimento da `),jc(200,`a`,34),lO(201,`ferramenta Git.`),wg()(),jc(202,`ul`)(203,`li`),lO(204,`Para utilizar o PO UI, é pré-requisito ter o `),jc(205,`code`),lO(206,`Node.js`),wg(),lO(207,` instalado (versão 18.13.0 ou acima) e o seu gerenciador de pacote favorito na versão mais atual.`),wg(),jc(208,`li`)(209,`p`),lO(210,`É importante que tenha a versão equivalente do Angular instalada. Instale-o via `),jc(211,`code`),lO(212,`npm`),wg(),lO(213,` ou `),jc(214,`code`),lO(215,`yarn`),wg(),lO(216,`:`),wg(),jc(217,`p`),lO(218,`Instalando com npm:`),wg(),jc(219,`pre`)(220,`code`),lO(221,`npm i -g @angular/cli`),wg()(),jc(222,`p`),lO(223,`Caso opte pelo yarn:`),wg(),jc(224,`pre`)(225,`code`),lO(226,`yarn global add @angular/cli`),wg()()(),jc(227,`li`),lO(228,`Faça um `),jc(229,`a`,35)(230,`em`),lO(231,`fork`),wg(),lO(232,` do repositório PO UI`),wg(),lO(233,`. `),jc(234,`blockquote`),lO(235,`Membros do `),jc(236,`em`),lO(237,`Core Team`),wg(),lO(238,` devem gerar uma nova `),jc(239,`em`),lO(240,`branch`),wg(),lO(241,` ao invés do `),jc(242,`em`),lO(243,`fork`),wg(),lO(244,`.`),wg()(),jc(245,`li`),lO(246,`Faça `),jc(247,`em`),lO(248,`clone`),wg(),lO(249,` do `),jc(250,`em`),lO(251,`fork`),wg(),lO(252,` gerado.`),wg(),jc(253,`li`),lO(254,`Execute `),jc(255,`code`),lO(256,`npm install`),wg(),lO(257,` para instalar as dependências.`),wg()()()()(),jc(258,`div`,17),nu(259,`a`,36),jc(260,`div`,19)(261,`div`,20),nu(262,`img`,37),jc(263,`h3`,22),lO(264,`Modificando componentes`),wg(),jc(265,`ul`)(266,`li`),lO(267,`Localize o componente em `),jc(268,`code`),lO(269,`projects/<projeto>/src/lib`),wg()(),jc(270,`li`),lO(271,`É muito importante que analise nossa documentação sobre `),jc(272,`a`,38),lO(273,`boas práticas`),wg(),lO(274,` para entender a implementação dos componentes PO UI.`),wg(),jc(275,`li`),lO(276,`Modifique a documentação com base em nosso `),jc(277,`a`,39),lO(278,`guia detalhado de documentação`),wg(),lO(279,`.`),wg(),jc(280,`li`),lO(281,`Se as implementações também contemplarem estilo, note que deverá modificá-las no repositório `),jc(282,`a`,11),lO(283,`PO UI Style`),wg(),lO(284,`.`),wg(),jc(285,`li`),lO(286,`Faça as implementações desejadas, seja um novo componente, correção ou melhoria, e `),jc(287,`a`,8),lO(288,`verifique no portal`),wg(),lO(289,` as modificações realizadas tanto nos `),jc(290,`em`),lO(291,`samples`),wg(),lO(292,` quanto na documentação.`),wg()()()()(),jc(293,`div`,17),nu(294,`a`,40),jc(295,`div`,19)(296,`div`,20),nu(297,`img`,41),jc(298,`h3`,22),lO(299,`Subindo as modificações localmente`),wg(),jc(300,`ul`)(301,`li`)(302,`p`),lO(303,`As modificações de código e documentação realizadas podem ser conferidas executando os comandos:`),wg(),jc(304,`pre`)(305,`code`),lO(306,`npm run build:portal && ng serve portal`),wg()()(),jc(307,`li`),lO(308,`O navegador exibirá o portal na url `),jc(309,`code`),lO(310,`http://localhost:4200/`),wg(),lO(311,`.`),wg(),jc(312,`li`),lO(313,`A partir disso, navegue até o componente para verificação das modificações.`),wg(),jc(314,`li`),lO(315,`Pedimos para que atente para a inclusão da melhoria em nossos `),jc(316,`em`),lO(317,`samples`),wg(),lO(318,`, em especial no sample `),jc(319,`code`),lO(320,`labs`),wg(),lO(321,`. Na inviabilidade de usar os `),jc(322,`em`),lO(323,`samples`),wg(),lO(324,` já existentes, considere a necessidade de criar um novo `),jc(325,`em`),lO(326,`sample`),wg(),lO(327,` de uso.`),wg()()()()(),jc(328,`div`,17),nu(329,`a`,42),jc(330,`div`,19)(331,`div`,20),nu(332,`img`,43),jc(333,`h3`,22),lO(334,`Testes Unitários`),wg(),jc(335,`p`),lO(336,`A cobertura de testes do PO UI é total. Isso significa que, obrigatoriamente, as modificações devem ser totalmente testadas. Para tal, execute os testes nos arquivos `),jc(337,`em`),lO(338,`.spec`),wg(),lO(339,` contidos no mesmo diretório do componente.`),wg(),jc(340,`p`),lO(341,`Para rodar os testes, rode o comando:`),wg(),jc(342,`pre`)(343,`code`),lO(344,`npm run test`),wg()(),jc(345,`p`),lO(346,`A cobertura de testes pode ser avaliada no arquivo `),jc(347,`code`),lO(348,`index.html`),wg(),lO(349,` existente no diretório `),jc(350,`code`),lO(351,`./coverage`),wg(),lO(352,`. `),wg()()()(),jc(353,`div`,17),nu(354,`a`,44),jc(355,`div`,19)(356,`div`,20),nu(357,`img`,45),jc(358,`h3`,22),lO(359,`ESLint`),wg(),jc(360,`p`),lO(361,`O PO UI utiliza o ESLint como linter padrão. Execute `),jc(362,`code`),lO(363,`ng lint`),wg(),lO(364,` para fazer a checagem de código-fonte e verificar eventuais erros programáticos, estilísticos, construções suspeitas, entre outros.`),wg()()()(),jc(365,`div`,17),nu(366,`a`,46),jc(367,`div`,19)(368,`div`,20),nu(369,`img`,47),jc(370,`h3`,22),lO(371,`PO Style`),wg(),jc(372,`p`),lO(373,`As implementações de estilo do PO UI são armazenadas no `),jc(374,`a`,48),lO(375,`repositório PO Style`),wg(),lO(376,`.`),wg(),jc(377,`p`),lO(378,`O desenvolvimento dos estilos é aberto para todos os desenvolvedores e agradecemos aos desenvolvedores que contribuem com melhorias e correções de erros.`),wg(),jc(379,`p`),lO(380,`Para saber como você pode pode participar na melhoria dos estilos, acesse o `),jc(381,`a`,49),lO(382,`guia de implementação de estilo`),wg(),lO(383,`.`),wg()()()(),jc(384,`div`,17),nu(385,`a`,50),jc(386,`div`,19)(387,`div`,20),nu(388,`img`,51),jc(389,`h3`,22),lO(390,`Build das modificações`),wg(),jc(391,`p`),lO(392,`Uma vez em que as modificações desejadas forem concluidas e a documentação esteja atualizada, execute os comandos abaixo para testagem no Portal PO UI.`),wg(),jc(393,`pre`)(394,`code`),lO(395,`npm run build
npm run build:portal
ng serve portal`),wg()(),jc(396,`p`),lO(397,`Revisadas as novas funcionalidades/correções, é chegada a hora da geração de commit. Confira as `),jc(398,`a`,52),lO(399,`regras para criação de commit`),wg(),lO(400,`.`),wg()()()(),jc(401,`div`,17),nu(402,`a`,53),jc(403,`div`,19)(404,`div`,54),nu(405,`img`,55),jc(406,`h3`,22),lO(407,`Criando Pull Request`),wg(),jc(408,`p`),lO(409,`Crie uma nova pull request com a master branch como base. Confira `),jc(410,`a`,56),lO(411,`como criar pull request a partir de um fork`),wg(),lO(412,`.`),wg(),jc(413,`p`),lO(414,`É importante que siga guia contendo as `),jc(415,`a`,57),lO(416,`regras para geração de Pull Requests`),wg(),lO(417,`.`),wg(),jc(418,`p`),lO(419,`Ao abrir a `),jc(420,`em`),lO(421,`pull request`),wg(),lO(422,`, uma análise automática comenta na PR os componentes alterados, os componentes que os consomem, o risco estimado e onde testar. Use esse relatório como ponto de partida para o teste integrado.`),wg()()()()()())},dependencies:[Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var I=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:213,vars:0,consts:[[`p-title`,`Primeiros passos`,1,`guides`,`app-portal`],[`href`,`https://cli.angular.io/`],[1,`language-json`],[`href`,`https://angular.dev/tools/cli/build-system-migration`],[`href`,`http://localhost:4200`],[1,`po-text-center`],[`src`,`./assets/graphics/app-running.png`,`width`,`660px`],[`href`,`/documentation/po-page-login`],[`href`,`/documentation/po-modal-password-recovery`],[`href`,`/documentation/po-page-blocked-user`],[`href`,`/documentation/po-page-dynamic-table`],[`href`,`/documentation`]],template:function(o,s){o&1&&(jc(0,`po-page-default`,0)(1,`h3`),lO(2,`Pré-requisitos`),wg(),jc(3,`p`),lO(4,`Para começar a utilizar o `),jc(5,`strong`),lO(6,`PO UI`),wg(),lO(7,` é pré-requisito ter o `),jc(8,`code`),lO(9,`Node.js`),wg(),lO(10,` instalado (versão 24.22.1 e acima) e o seu gerenciador de pacote favorito na versão mais atual. Caso você ainda não tenha instalado o pacote `),jc(11,`code`),lO(12,`@angular/cli`),wg(),lO(13,`, instale-o via `),jc(14,`code`),lO(15,`npm`),wg(),lO(16,` ou `),jc(17,`code`),lO(18,`yarn`),wg(),lO(19,`.`),wg(),jc(20,`p`),lO(21,`Instalando com npm:`),wg(),jc(22,`pre`)(23,`code`),lO(24,`npm i -g @angular/cli@22
`),wg()(),jc(25,`p`),lO(26,`Caso prefira instalar com o yarn:`),wg(),jc(27,`pre`)(28,`code`),lO(29,`yarn global add @angular/cli@22
`),wg()(),jc(30,`h3`),lO(31,`Passo 1 - Crie o seu primeiro projeto`),wg(),jc(32,`blockquote`)(33,`p`),lO(34,`Caso você já tenha um projeto criado e deseje apenas incluir o `),jc(35,`strong`),lO(36,`Po`),wg(),lO(37,`, pule esta etapa e vá para o `),jc(38,`strong`),lO(39,`Passo 1.1`),wg(),lO(40,`.`),wg()(),jc(41,`p`),lO(42,`O `),jc(43,`a`,1),lO(44,`Angular CLI`),wg(),lO(45,` se encarrega de construir toda estrutura inicial do projeto. Para isso, execute o seguinte comando:`),wg(),jc(46,`pre`)(47,`code`),lO(48,`ng new my-po-project --skip-install
`),wg()(),jc(49,`blockquote`)(50,`p`),lO(51,`O parâmetro `),jc(52,`code`),lO(53,`--skip-install`),wg(),lO(54,` permite criar o projeto, contudo, não instalará as dependências automaticamente.`),wg()(),jc(55,`h4`),lO(56,`Passo 1.1 - Instalando as dependências`),wg(),jc(57,`p`),lO(58,`Antes de executar a instalação ou inserir o `),jc(59,`strong`),lO(60,`Po`),wg(),lO(61,` no seu projeto existente, é necessário verificar as dependências do seu projeto, algumas delas precisam estar de acordo com a versão do `),jc(62,`strong`),lO(63,`Po`),wg(),lO(64,` e Angular (elas podem ser encontradas no arquivo `),jc(65,`code`),lO(66,`package.json`),wg(),lO(67,` localizado na raiz da aplicação).`),wg(),jc(68,`p`),lO(69,`Veja abaixo a lista de dependências e as versões compatíveis, elas devem ser conferidas e se necessário, ajustadas no seu projeto.`),wg(),jc(70,`pre`)(71,`code`,2),lO(72,`  "dependencies": {
    "@angular/common": "~22.2.1",
    "@angular/compiler": "~22.2.1",
    "@angular/core": "~22.2.1",
    "@angular/forms": "~22.2.1",
    "@angular/platform-browser": "~22.2.1",
    "@angular/router": "~22.2.1",
    "rxjs": "~7.8.1",
    "tslib": "^2.6.2",
    "zone.js": "~0.15.0"
    ...
  },
  "devDependencies": {
    "@angular-devkit/schematics": "~22.2.1",
    "@angular/build": "~22.2.1",
    "@angular/cli": "~22.2.1",
    "@angular/compiler-cli": "~22.2.1",
    ...
    "typescript": "~6.0.3"
  }
`),wg()(),jc(73,`p`),lO(74,`Após verificar se estas dependências do seu projeto estão com as versões compatíveis declaradas acima, acesse a pasta raiz do seu projeto e execute o comando abaixo:`),wg(),jc(75,`p`),lO(76,`Instalando com npm:`),wg(),jc(77,`pre`)(78,`code`),lO(79,`npm install
`),wg()(),jc(80,`p`),lO(81,`Caso prefira instalar com o yarn:`),wg(),jc(82,`pre`)(83,`code`),lO(84,`yarn install
`),wg()(),jc(85,`h3`),lO(86,`Observação para Angular 19+`),wg(),jc(87,`p`),lO(88,`Em versões mais recentes do Angular, o projeto utiliza, por padrão, novo build system baseado em `),jc(89,`strong`),lO(90,`@angular/build`),wg(),lO(91,`. `),wg(),jc(92,`p`),lO(93,`Verifique se o pacote está declarado em `),jc(94,`strong`),lO(95,`devDependencies`),wg(),lO(96,`. Além disso, valide no arquivo angular.json se o builder está configurado para `),jc(97,`strong`),lO(98,`@angular/build:`),wg(),lO(99,`*:`),wg(),jc(100,`pre`)(101,`code`),lO(102,`"projects": {
  "app-name": {
    "architect": {
      "build": {
        "builder": "@angular/build:application"
      } ,
      "serve": {
        "builder": "@angular/build:dev-server"
      }
    }
  }
}
`),wg()(),jc(103,`p`),lO(104,`Para maiores informações veja na documentação oficial do `),jc(105,`a`,3),lO(106,`Angular`),wg(),lO(107,`.`),wg(),jc(108,`h3`),lO(109,`Passo 2 - Adicionando o pacote @po-ui/ng-components`),wg(),jc(110,`p`),lO(111,`Utilizando o comando `),jc(112,`code`),lO(113,`ng add`),wg(),lO(114,` do `),jc(115,`a`,1),lO(116,`Angular CLI`),wg(),lO(117,`, vamos adicionar o `),jc(118,`strong`),lO(119,`Po`),wg(),lO(120,` em seu projeto e o mesmo se encarregará de configurar o tema, instalar o pacote e importar o módulo do `),jc(121,`strong`),lO(122,`Po`),wg(),lO(123,`. Além de importar também o modulo `),jc(124,`strong`),lO(125,`HttpClientModule`),wg(),lO(126,`.`),wg(),jc(127,`p`),lO(128,`Execute o comando abaixo na pasta raiz do seu projeto:`),wg(),jc(129,`pre`)(130,`code`),lO(131,`ng add @po-ui/ng-components@next
`),wg()(),jc(132,`blockquote`)(133,`p`),lO(134,`Ao executar o comando acima, será perguntado se deseja incluir uma estrutura inicial em seu projeto com menu lateral, página e toolbar, utilizando componentes do `),jc(135,`strong`),lO(136,`Po`),wg(),lO(137,`, `),jc(138,`strong`),lO(139,`caso desejar, apenas informe: `),jc(140,`code`),lO(141,`Y`),wg()(),lO(142,`.`),wg()(),jc(143,`h3`),lO(144,`Passo 3 - Rode o seu projeto`),wg(),jc(145,`p`),lO(146,`Agora basta executar mais um comando para subir a aplicação e ver o seu projeto rodando no `),jc(147,`em`),lO(148,`browser`),wg(),lO(149,` ;).`),wg(),jc(150,`pre`)(151,`code`),lO(152,`ng serve
`),wg()(),jc(153,`p`),lO(154,`Abra o `),jc(155,`em`),lO(156,`browser`),wg(),lO(157,` e acesse a url `),jc(158,`a`,4),lO(159,`http://localhost:4200`),wg(),lO(160,`. Pronto! Se você escolheu incluir uma estrutura inicial em seu projeto, ele deve estar parecido com essa imagem:`),wg(),jc(161,`p`,5),nu(162,`img`,6),wg(),nu(163,`hr`),jc(164,`h3`),lO(165,`E agora?`),wg(),jc(166,`p`),lO(167,`Agora é só abrir seu `),jc(168,`strong`),lO(169,`editor / IDE`),wg(),lO(170,` favorito e começar a trabalhar no seu projeto.`),wg(),jc(171,`p`),lO(172,`Caso você queira utilizar nossos componentes de templates, como o `),jc(173,`strong`)(174,`a`,7),lO(175,`po-page-login`),wg()(),lO(176,`, `),jc(177,`strong`)(178,`a`,8),lO(179,`po-modal-password-recovery`),wg()(),lO(180,`, `),jc(181,`strong`)(182,`a`,9),lO(183,`po-page-blocked-user`),wg()(),lO(184,`, `),jc(185,`strong`)(186,`a`,10),lO(187,`po-page-dynamic-table`),wg()(),lO(188,` entre outros, basta adicionar o pacote `),jc(189,`code`),lO(190,`@po-ui/ng-templates`),wg(),lO(191,` executando o comando abaixo:`),wg(),jc(192,`pre`)(193,`code`),lO(194,`ng add @po-ui/ng-templates@next
`),wg()(),jc(195,`blockquote`)(196,`p`),lO(197,`Ao executar este comando, será instalado o pacote `),jc(198,`code`),lO(199,`@po-ui/ng-templates`),wg(),lO(200,` e configurado o `),jc(201,`code`),lO(202,`PoTemplatesModules`),wg(),lO(203,` no `),jc(204,`code`),lO(205,`app.module`),wg(),lO(206,` somente se sua aplicação for configurada com módulos.`),wg()(),jc(207,`p`),lO(208,`A partir dai o seu projeto está preparado para receber outros componentes do `),jc(209,`strong`)(210,`a`,11),lO(211,`Po`),wg()(),lO(212,`! \\o/`),wg()())},dependencies:[Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var j=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:257,vars:0,consts:[[`p-title`,`Guia de uso para Gráficos`,1,`guides`,`app-portal`],[`href`,`guides/guide-charts#area`],[`href`,`guides/guide-charts#bar`],[`href`,`guides/guide-charts#column`],[`href`,`guides/guide-charts#column-line`],[`href`,`guides/guide-charts#gauge-semicircle`],[`href`,`guides/guide-charts#line`],[`href`,`guides/guide-charts#pie`],[`href`,`guides/guide-charts#donut`],[`href`,`guides/guide-charts#radar`],[`href`,`guides/guide-charts#guide-colors`],[`id`,`area`],[`id`,`bar`],[`id`,`column`],[`id`,`column-line`],[`id`,`gauge-semicircle`],[`id`,`line`],[`id`,`pie`],[`id`,`donut`],[`id`,`radar`],[`id`,`guide-colors`]],template:function(o,s){o&1&&(jc(0,`po-page-default`,0)(1,`p`),lO(2,`Este guia tem o objetivo de informar práticas de uso para cada tipo de gráfico do PO UI, o que devemos evitar ao utilizar determinado gráfico e também as boas práticas relacionadas às cores nos gráficos.`),wg(),jc(3,`p`),lO(4,`Gráficos em geral têm a função de garantir que as pessoas de qualquer cultura ou país tenham entendimento claro para tomar as melhores decisões com base nas suas visualizações.`),wg(),jc(5,`h2`),lO(6,`Conteúdo`),wg(),jc(7,`ul`)(8,`li`)(9,`a`,1),lO(10,`Gráfico de área`),wg()(),jc(11,`li`)(12,`a`,2),lO(13,`Gráfico de barra`),wg()(),jc(14,`li`)(15,`a`,3),lO(16,`Gráfico de coluna`),wg()(),jc(17,`li`)(18,`a`,4),lO(19,`Gráfico de coluna com linha`),wg()(),jc(20,`li`)(21,`a`,5),lO(22,`Gráfico de gauge semicircular`),wg()(),jc(23,`li`)(24,`a`,6),lO(25,`Gráfico de linha`),wg()(),jc(26,`li`)(27,`a`,7),lO(28,`Gráfico de pizza`),wg()(),jc(29,`li`)(30,`a`,8),lO(31,`Gráfico de rosca`),wg()(),jc(32,`li`)(33,`a`,9),lO(34,`Gráfico de radar`),wg()(),jc(35,`li`)(36,`a`,10),lO(37,`Guia de cores`),wg()()(),nu(38,`br`),jc(39,`p`),nu(40,`a`,11),wg(),jc(41,`h2`),lO(42,`Gráfico de área (Area Chart)`),wg(),jc(43,`p`),lO(44,`O gráfico de área combina o gráfico de linhas e o gráfico de barras para mostrar como os valores numéricos de um ou mais grupos mudam ao longo da progressão de uma segunda variável, normalmente a do tempo. Um gráfico de área se distingue de um gráfico de linha pela adição de sombreamento entre as linhas e uma linha de base, como em um gráfico de barras.`),wg(),jc(45,`p`),lO(46,`A versão disponível no PO UI é o gráfico de área de sobreposição ou em inglês, `),jc(47,`em`),lO(48,`overlapping area chart`),wg(),lO(49,`.`),wg(),jc(50,`h4`),lO(51,`Quando usar?`),wg(),jc(52,`ul`)(53,`li`),lO(54,`Para representar os totais acumulados usando números ou porcentagens (gráficos de área empilhados, neste caso) ao longo do tempo;`),wg(),jc(55,`li`),lO(56,`Mostrar tendências ao longo do tempo entre os atributos relacionados.`),wg()(),nu(57,`br`),jc(58,`p`),nu(59,`a`,12),wg(),jc(60,`h2`),lO(61,`Gráfico de barra (Bar Chart)`),wg(),jc(62,`p`),lO(63,`O gráfico de barra é organizado de forma temporal ou por tópicos ao longo do eixo vertical (y) e seus valores têm variação ao longo do eixo vertical (x). É uma variação direta da estrutura do gráfico de coluna.`),wg(),jc(64,`h4`),lO(65,`Quando usar?`),wg(),jc(66,`ul`)(67,`li`),lO(68,`Demonstrar as variações de dados em um período de tempo;`),wg(),jc(69,`li`),lO(70,`Ilustrar comparações entre tópicos diretamente relacionados.`),wg()(),jc(71,`h4`),lO(72,`Boas práticas`),wg(),jc(73,`p`),lO(74,`Prefira utilizar o gráfico de barra quando for necessário muitos itens temporais ou de tópicos.`),wg(),nu(75,`br`),jc(76,`p`),nu(77,`a`,13),wg(),jc(78,`h2`),lO(79,`Gráfico de coluna (Column Chart)`),wg(),jc(80,`p`),lO(81,`O gráfico de coluna é organizado de forma temporal ou por tópicos ao longo do eixo horizontal (x) e seus valores têm variação ao longo do eixo vertical (y).`),wg(),jc(82,`h4`),lO(83,`Quando usar?`),wg(),jc(84,`ul`)(85,`li`),lO(86,`Demonstrar as variações de dados em um período de tempo;`),wg(),jc(87,`li`),lO(88,`Ilustrar comparações entre tópicos diretamente relacionados.`),wg()(),jc(89,`h4`),lO(90,`Boas práticas`),wg(),jc(91,`p`),lO(92,`Prefira utilizar o gr\xE1fico de barras caso seja necess\xE1rio muitos itens,
pois o gr\xE1fico de coluna cont\xE9m menos espa\xE7o para que sejam exibidos os r\xF3tulos no eixo horizontal.`),wg(),nu(93,`br`),jc(94,`p`),nu(95,`a`,14),wg(),jc(96,`h2`),lO(97,`Gráfico de pareto / coluna com linha (Column and Line Chart)`),wg(),jc(98,`p`),lO(99,`O gráfico de pareto contém colunas e um gráfico de linhas, onde os valores individuais são representados em ordem decrescente por colunas e o total acumulado é representado pela linha.`),wg(),jc(100,`h4`),lO(101,`Quando usar?`),wg(),jc(102,`ul`)(103,`li`),lO(104,`Destacar o mais importante entre um conjunto de fatores, por exemplo:`),jc(105,`ul`)(106,`li`),lO(107,`Sempre que uma equipe não estiver certa sobre onde direcionar seus esforços de melhoria deve usar uma análise de pareto.`),wg()()()(),nu(108,`br`),jc(109,`p`),nu(110,`a`,15),wg(),jc(111,`h2`),lO(112,`Gráfico de gauge semicircular (Semi Circle Gauge Chart)`),wg(),jc(113,`p`),lO(114,`O gráfico de gauge semicircular é uma variação direta do gauge tradicional.`),wg(),jc(115,`h4`),lO(116,`Quando usar?`),wg(),jc(117,`ul`)(118,`li`),lO(119,`Demonstrar cálculos de desempenho por um certo período (em andamento ou como histórico), por exemplo: `),jc(120,`ul`)(121,`li`),lO(122,`Desempenho de vendas de uma equipe em relação a meta.`),wg()()()(),nu(123,`br`),jc(124,`p`),nu(125,`a`,16),wg(),jc(126,`h2`),lO(127,`Gráfico de linha (Line Chart)`),wg(),jc(128,`p`),lO(129,`O gráfico de linha pode exibir dados contínuos ao longo de um período de tempo, definidos em relação a uma escala comum. Os dados de categorias são comumente distribuídos uniformemente ao longo do eixo horizontal e todos os dados de valores que tem variação são subdivididos igualmente ao longo do eixo vertical. `),wg(),jc(130,`h4`),lO(131,`Quando usar?`),wg(),jc(132,`ul`)(133,`li`),lO(134,`Quando deseja exibir tendências nos dados ao longo do tempo, por exemplo:`),jc(135,`ul`)(136,`li`),lO(137,`Demonstrar a alteração no preço das ações em um período de tempo;`),wg(),jc(138,`li`),lO(139,`Quantidade de visitas em um site durante um mês.`),wg()()()(),jc(140,`h4`),lO(141,`Boas práticas`),wg(),jc(142,`ul`)(143,`li`),lO(144,`Ideal para demonstrar a frequência em que ocorrem os dados;`),wg(),jc(145,`li`),lO(146,`Não é recomendado para caso de distribuição de dados, neste caso pode-se utilizar o gráfico de coluna.`),wg()(),nu(147,`br`),jc(148,`p`),nu(149,`a`,17),wg(),jc(150,`h2`),lO(151,`Gráfico de pizza (Pie Chart)`),wg(),jc(152,`p`),lO(153,`O gráfico de pizza ou torta é adequado para mostrar partes divididas de um todo, pois representa fatias que somadas compõem 100% da forma.`),wg(),jc(154,`h4`),lO(155,`Quando usar?`),wg(),jc(156,`ul`)(157,`li`),lO(158,`Para demonstrar proporções, por exemplo:`),jc(159,`ul`)(160,`li`),lO(161,`Porcentagem de orçamento gasto em diferentes departamentos;`),wg(),jc(162,`li`),lO(163,`Respostas de pesquisa;`),wg(),jc(164,`li`),lO(165,`Divisão de tempo em uma atividade.`),wg()()()(),jc(166,`h4`),lO(167,`Boas práticas`),wg(),jc(168,`ul`)(169,`li`),lO(170,`Não é recomendado para comparar dados;`),wg(),jc(171,`li`),lO(172,`Evite gráficos de pizza com mais de cinco partes, pois isso interfere diretamente no entendimento do gráfico ou visualização dos valores.`),wg()(),nu(173,`br`),jc(174,`p`),nu(175,`a`,18),wg(),jc(176,`h2`),lO(177,`Gráfico de rosca (Donut Chart)`),wg(),jc(178,`p`),lO(179,`O gráfico de rosca é adequado para mostrar partes de um todo, pois representa fatias que somadas compõem 100% de algo. É uma variação visual do gráfico de pizza.`),wg(),jc(180,`h4`),lO(181,`Quando usar?`),wg(),jc(182,`ul`)(183,`li`),lO(184,`Para demonstrar proporções comparativas em porcentagem ou quantidade.`),wg()(),jc(185,`h4`),lO(186,`Boas práticas:`),wg(),jc(187,`p`),lO(188,`O valor mínimo de visualização deve ser de 10% do total para demonstrar as informações no gráfico, caso tenha mais de um item abaixo do valor de 10%, junte-os em uma sessão agrupada "Outros" e especifique o conteúdo que o compõe na legenda.`),wg(),nu(189,`br`),jc(190,`p`),nu(191,`a`,19),wg(),jc(192,`h2`),lO(193,`Gráfico de radar (Radar Chart)`),wg(),jc(194,`p`),lO(195,`O gráfico de radar é utilizado para visualizar e comparar o desempenho de diferentes itens em múltiplas categorias.`),wg(),jc(196,`h4`),lO(197,`Quando usar?`),wg(),jc(198,`ul`)(199,`li`),lO(200,`Para demonstrar cenários onde é preciso avaliar e apresentar um "perfil" de desempenho de algo/alguém.`),wg()(),nu(201,`br`),jc(202,`p`),nu(203,`a`,20),wg(),jc(204,`h2`),lO(205,`Guia de cores`),wg(),jc(206,`h4`),lO(207,`Boas práticas`),wg(),jc(208,`ul`)(209,`li`),lO(210,`Use uma única cor para representar o mesmo tipo de dados. Por exemplo: para representar vendas mês a mês em um gráfico de barras, use uma única cor. Outro exemplo: para comparar as vendas do ano passado com as do ano vigente em um gráfico agrupado, prefira utilizar uma cor diferente para cada ano;`),wg(),jc(211,`li`),lO(212,`Certifique-se de que existe contraste suficiente entre as cores. Por exemplo: utilize cores com contraste para facilitar a assimilação do usuário referente às informações traduzidas no gráfico;`),wg(),jc(213,`li`),lO(214,`Escolha cores adequadamente. Algumas cores se destacam mais do que outras, dando peso desnecessário ou direcionamento errado aos dados.`),wg(),jc(215,`li`),lO(216,`Prefira utilizar uma única cor com sombra variável ou um espectro entre duas cores análogas para mostrar intensidade;`),wg(),jc(217,`li`),lO(218,`Destaque a informação mais relevante com cores fortes e utilize a mesma com tons com menos contraste para complementar o gráfico.`),wg()(),jc(219,`h4`),lO(220,`Evite`),wg(),jc(221,`ul`)(222,`li`),lO(223,`Não use vermelho para números positivos ou verde para números negativos. Essas associações de cores são decisivas na interpretação do usuário;`),wg(),jc(224,`li`),lO(225,`Não utilize combinações de cores de alto contraste, como vermelho e verde ou azul e amarelo (somente com direcionamento da marca);`),wg(),jc(226,`li`),lO(227,`Não utilize cores com baixo contraste, como azul claro e cinza (somente com direcionamento da marca).`),wg()(),jc(228,`h4`),lO(229,`Opções de combinação de cores`),wg(),jc(230,`p`),lO(231,`Modelos de cores que podem combinar e facilitar a visualização dos gráficos: `),wg(),jc(232,`ul`)(233,`li`)(234,`p`),lO(235,`Cinza e azul:`),wg(),jc(236,`ul`)(237,`li`),lO(238,`Para informações de atual e passado, mas atenção com o nível do contraste para que sejam legíveis as diferenças entre os dados;`),wg()()(),jc(239,`li`)(240,`p`),lO(241,`Azul e laranja:`),wg(),jc(242,`ul`)(243,`li`),lO(244,`Azul para indicação de dados positivos e laranja para negativos;`),wg()()(),jc(245,`li`)(246,`p`),lO(247,`Verde e vermelho:`),wg(),jc(248,`ul`)(249,`li`),lO(250,`Verde sinaliza dados positivo e vermelho os negativos;`),wg()()(),jc(251,`li`)(252,`p`),lO(253,`Azul, cinza e verde:`),wg(),jc(254,`ul`)(255,`li`),lO(256,`Para uma composição de três cores.`),wg()()()()())},dependencies:[Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var k=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:432,vars:0,consts:[[`p-title`,`Migração do PO UI para V2`,1,`guides`,`app-portal`],[`href`,`https://update.angular.io/`],[`href`,`https://angular.io/cli/update`],[`href`,`guides/migration-poui-v2#components`],[`href`,`guides/migration-poui-v2#sync`],[`id`,`components`],[1,`po-text-color-neutral-dark-40`],[`href`,`http://po-ui.io/documentation/po-page-change-password`],[`href`,`http://po-ui.io/documentation/po-button-group`],[`href`,`http://po-ui.io/documentation/po-menu`],[`href`,`http://po-ui.io/documentation/po-menu-panel`],[`href`,`http://po-ui.io/documentation/po-navbar`],[`href`,`http://po-ui.io/documentation/po-page-list`],[`href`,`http://po-ui.io/documentation/po-page-default`],[`href`,`http://po-ui.io/documentation/po-popup`],[`href`,`http://po-ui.io/documentation/po-step`],[`href`,`http://po-ui.io/documentation/po-table`],[`href`,`http://po-ui.io/documentation/po-toolbar`],[`id`,`sync`]],template:function(o,s){o&1&&(jc(0,`po-page-default`,0)(1,`p`),lO(2,`Este guia contém informações sobre a migração do seu projeto para a versão 2 do PO UI.`),wg(),jc(3,`h2`),lO(4,`Atualizando o projeto com Angular`),wg(),jc(5,`p`),lO(6,`Antes de atualizar a vers\xE3o do PO UI, \xE9 importante que voc\xEA tenha atualizado o seu projeto para
o Angular 9, executando o comando abaixo:`),wg(),jc(7,`p`)(8,`code`),lO(9,`ng update @angular/cli@9 @angular/core@9`),wg()(),jc(10,`blockquote`)(11,`p`),lO(12,`Para realizar a migração completa e avaliar se não precisa fazer alguma alteração veja o `),jc(13,`a`,1)(14,`strong`),lO(15,`Guia de Upgrade do Angular`),wg()(),lO(16,`.`),wg()(),jc(17,`p`),lO(18,`O nosso pacote anterior possu\xEDa depend\xEAncias que eram compat\xEDveis com a vers\xE3o 8 do Angular, portanto
pode ser preciso utilizar a `),jc(19,`em`),lO(20,`flag`),wg(),jc(21,`code`),lO(22,`--force`),wg(),lO(23,` para que o Angular realize a migra\xE7\xE3o do seu projeto, ignorando a vers\xE3o das depend\xEAncias.
Para avaliar as `),jc(24,`em`),lO(25,`flags`),wg(),lO(26,` disponíveis veja a `),jc(27,`a`,2)(28,`strong`),lO(29,`documentação do ng update`),wg()(),lO(30,`.`),wg(),jc(31,`h2`),lO(32,`Atualizando o PO UI`),wg(),jc(33,`p`),lO(34,`Para facilitar a migração do seu projeto para o PO UI v2, implementamos o `),jc(35,`code`),lO(36,`ng update`),wg(),lO(37,` nos pacotes abaixo:`),wg(),jc(38,`ul`)(39,`li`)(40,`a`,3)(41,`strong`),lO(42,`@po-ui/ng-components`),wg()()(),jc(43,`li`)(44,`a`,4)(45,`strong`),lO(46,`@po-ui/ng-sync`),wg()()()(),jc(47,`p`),lO(48,`O `),jc(49,`code`),lO(50,`ng update`),wg(),lO(51,` ajudará nas alterações necessárias para seu projeto seguir atualizado, que são elas:`),wg(),jc(52,`ul`)(53,`li`),lO(54,`Alterar maioria dos conteúdos relacionados ao `),jc(55,`strong`),lO(56,`BREAKING CHANGES`),wg(),lO(57,` e `),jc(58,`strong`),lO(59,`Depreciações`),wg(),lO(60,` no seu projeto;`),wg(),jc(61,`li`),lO(62,`Atualizar as versões dos pacotes `),jc(63,`code`),lO(64,`@po-ui`),wg(),lO(65,`.`),wg()(),jc(66,`p`),lO(67,`Mas é importante conhecer os `),jc(68,`strong`),lO(69,`BREAKING CHANGES`),wg(),lO(70,` e `),jc(71,`strong`),lO(72,`Depreciações`),wg(),lO(73,` para realizar as alterações manualmente caso necessário.`),wg(),jc(74,`p`),nu(75,`a`,5),wg(),jc(76,`h3`),lO(77,`ng update @po-ui/ng-components`),wg(),jc(78,`p`),lO(79,`Para poder utilizar o comando e realizar a migração, execute os comandos abaixo:`),wg(),jc(80,`p`)(81,`code`),lO(82,`npm i --save @po-ui/ng-components@2`),wg()(),jc(83,`p`)(84,`code`),lO(85,`ng update @po-ui/ng-components --from 1 --migrate-only`),wg()(),jc(86,`h4`),lO(87,`Breaking Changes`),wg(),jc(88,`p`),lO(89,`Nesta nova versão o nome dos pacotes foram alterados, de acordo com a tabela abaixo:`),wg(),jc(90,`table`)(91,`thead`)(92,`tr`)(93,`th`,6),lO(94,`Pacotes`),wg(),jc(95,`th`,6),lO(96,`Substituído por`),wg()()(),jc(97,`tbody`)(98,`tr`)(99,`td`)(100,`code`),lO(101,`@portinari/portinari-ui`),wg()(),jc(102,`td`)(103,`code`),lO(104,`@po-ui/ng-components`),wg()()(),jc(105,`tr`)(106,`td`)(107,`code`),lO(108,`@portinari/portinari-templates`),wg()(),jc(109,`td`)(110,`code`),lO(111,`@po-ui/ng-templates`),wg()()(),jc(112,`tr`)(113,`td`)(114,`code`),lO(115,`@portinari/portinari-code-editor`),wg()(),jc(116,`td`)(117,`code`),lO(118,`@po-ui/ng-code-editor`),wg()()(),jc(119,`tr`)(120,`td`)(121,`code`),lO(122,`@portinari/tslint`),wg()(),jc(123,`td`)(124,`code`),lO(125,`@po-ui/ng-tslint`),wg()()(),jc(126,`tr`)(127,`td`)(128,`code`),lO(129,`@portinari/style`),wg()(),jc(130,`td`)(131,`code`),lO(132,`@po-ui/style`),wg()()()()(),jc(133,`p`),lO(134,`Também foi realizado remoções das propriedades, onde passam a valer as novas definições, veja a tabela abaixo:`),wg(),jc(135,`table`)(136,`thead`)(137,`tr`)(138,`th`,6),lO(139,`Componentes`),wg(),jc(140,`th`,6),lO(141,`Anteriormente`),wg(),jc(142,`th`,6),lO(143,`Substituído por`),wg()()(),jc(144,`tbody`)(145,`tr`)(146,`td`)(147,`code`),lO(148,`PoFieldModule`),wg()(),jc(149,`td`)(150,`code`),lO(151,`[p-focus]`),wg()(),jc(152,`td`)(153,`code`),lO(154,`[p-auto-focus]`),wg()()(),jc(155,`tr`)(156,`td`)(157,`code`),lO(158,`PoHttpResquestInterceptor`),wg()(),jc(159,`td`)(160,`code`),lO(161,`X-Portinari-Screen-Lock`),wg()(),jc(162,`td`)(163,`code`),lO(164,`X-PO-Screen-Lock`),wg()()(),jc(165,`tr`)(166,`td`)(167,`code`),lO(168,`PoHttpResquestInterceptor`),wg()(),jc(169,`td`)(170,`code`),lO(171,`X-Portinari-No-Count-Pending-Requests`),wg()(),jc(172,`td`)(173,`code`),lO(174,`X-PO-No-Count-Pending-Requests`),wg()()(),jc(175,`tr`)(176,`td`)(177,`code`),lO(178,`PoHttpInterceptor`),wg()(),jc(179,`td`)(180,`code`),lO(181,`X-Portinari-No-Message`),wg()(),jc(182,`td`)(183,`code`),lO(184,`X-PO-No-Message`),wg()()(),jc(185,`tr`)(186,`td`)(187,`code`),lO(188,`PoPageEdit`),wg()(),jc(189,`td`,6),lO(190,`Possuir a ação `),jc(191,`code`),lO(192,`cancel() {}`),wg(),lO(193,` no TS`),wg(),jc(194,`td`)(195,`code`),lO(196,`(p-cancel)`),wg()()(),jc(197,`tr`)(198,`td`)(199,`code`),lO(200,`PoPageEdit`),wg()(),jc(201,`td`,6),lO(202,`Possuir a ação `),jc(203,`code`),lO(204,`save() {}`),wg(),lO(205,` no TS`),wg(),jc(206,`td`)(207,`code`),lO(208,`(p-save)`),wg()()(),jc(209,`tr`)(210,`td`)(211,`code`),lO(212,`PoPageEdit`),wg()(),jc(213,`td`,6),lO(214,`Possuir a ação `),jc(215,`code`),lO(216,`saveNew() {}`),wg(),lO(217,` no TS`),wg(),jc(218,`td`)(219,`code`),lO(220,`(p-save-new)`),wg()()(),jc(221,`tr`)(222,`td`)(223,`code`),lO(224,`PoPageDetail`),wg()(),jc(225,`td`,6),lO(226,`Possuir a ação `),jc(227,`code`),lO(228,`back() {}`),wg(),lO(229,` no TS`),wg(),jc(230,`td`)(231,`code`),lO(232,`(p-back)`),wg()()(),jc(233,`tr`)(234,`td`)(235,`code`),lO(236,`PoPageDetail`),wg()(),jc(237,`td`,6),lO(238,`Possuir a ação `),jc(239,`code`),lO(240,`edit() {}`),wg(),lO(241,` no TS`),wg(),jc(242,`td`)(243,`code`),lO(244,`(p-edit)`),wg()()(),jc(245,`tr`)(246,`td`)(247,`code`),lO(248,`PoPageDetail`),wg()(),jc(249,`td`,6),lO(250,`Possuir a ação `),jc(251,`code`),lO(252,`remove() {}`),wg(),lO(253,` no TS`),wg(),jc(254,`td`)(255,`code`),lO(256,`(p-remove)`),wg()()()()(),jc(257,`h4`),lO(258,`Depreciação`),wg(),jc(259,`p`),lO(260,`Nas versões `),jc(261,`code`),lO(262,`1.x.x`),wg(),lO(263,` era possível passar funções para nossas propriedades sem informar o `),jc(264,`code`),lO(265,`.bind(this)`),wg(),lO(266,`,
pois captur\xE1vamos o componente pai e consegu\xEDamos acessar o contexto corrente. Por\xE9m depreciamos este comportamento,
agora necessita passar a refer\xEAncia da fun\xE7\xE3o utilizando o `),jc(267,`code`),lO(268,`.bind(this)`),wg(),lO(269,` para que o mesmo execute a função no contexto invocado, tanto em funções dentro de `),jc(270,`em`),lO(271,`arrays`),wg(),lO(272,` quanto em funções via `),jc(273,`em`),lO(274,`property bind`),wg(),lO(275,`.`),wg(),jc(276,`p`),lO(277,`Os componentes que sofrerão esta depreciação, são:`),wg(),jc(278,`ul`)(279,`li`)(280,`a`,7)(281,`strong`),lO(282,`PageChangePassword`),wg()()(),jc(283,`li`)(284,`a`,8)(285,`strong`),lO(286,`ButtonGroup`),wg()()(),jc(287,`li`)(288,`a`,9)(289,`strong`),lO(290,`Menu`),wg()()(),jc(291,`li`)(292,`a`,10)(293,`strong`),lO(294,`MenuPanel`),wg()()(),jc(295,`li`)(296,`a`,11)(297,`strong`),lO(298,`Navbar`),wg()()(),jc(299,`li`)(300,`a`,12)(301,`strong`),lO(302,`PageList`),wg()()(),jc(303,`li`)(304,`a`,13)(305,`strong`),lO(306,`PageDefault`),wg()()(),jc(307,`li`)(308,`a`,14)(309,`strong`),lO(310,`Popup`),wg()()(),jc(311,`li`)(312,`a`,15)(313,`strong`),lO(314,`Stepper`),wg()()(),jc(315,`li`)(316,`a`,16)(317,`strong`),lO(318,`Table`),wg()()(),jc(319,`li`)(320,`a`,17)(321,`strong`),lO(322,`Toolbar`),wg()()()(),jc(323,`p`),lO(324,`Abaixo listamos dois exemplos comparativos com essas depreciações em alguns componentes.`),wg(),jc(325,`p`),lO(326,`Exemplo via funções dentro de arrays:`),wg(),jc(327,`ul`)(328,`li`),lO(329,`Antes:`),wg()(),jc(330,`pre`)(331,`code`),lO(332,`<po-page-default p-title="P\xE1gina" [p-actions]="actions">
   ...
</po-page-default>
`),wg()(),jc(333,`pre`)(334,`code`),lO(335,`export class ExampleFunction () {

  actions: Array<PoPageAction> = [
    { label: 'Adicionar', action: this.add }
  ]

  add() {
    ...
  }
}
`),wg()(),jc(336,`ul`)(337,`li`),lO(338,`Agora:`),wg()(),jc(339,`pre`)(340,`code`),lO(341,`<po-page-default p-title="P\xE1gina" [p-actions]="actions">
   ...
</po-page-default>
`),wg()(),jc(342,`pre`)(343,`code`),lO(344,`export class ExampleFunction () {

  actions: Array<PoPageAction> = [
    { label: 'Adicionar', action: this.add.bind(this) }
  ]

  add() {
    ...
  }
}
`),wg()(),jc(345,`p`),lO(346,`Exemplo funções via `),jc(347,`em`),lO(348,`property bind`),wg()(),jc(349,`ul`)(350,`li`),lO(351,`Antes:`),wg()(),jc(352,`pre`)(353,`code`),lO(354,`<po-stepper>
  <po-step p-label="Personal" [p-can-active-next-step]="canActiveNextStep">
  </po-step>
</po-stepper>
`),wg()(),jc(355,`ul`)(356,`li`),lO(357,`Agora:`),wg()(),jc(358,`pre`)(359,`code`),lO(360,`<po-stepper>
  <po-step p-label="Personal" [p-can-active-next-step]="canActiveNextStep.bind(this)">
  </po-step>
</po-stepper>
`),wg()(),jc(361,`p`),nu(362,`a`,18),wg(),jc(363,`h3`),lO(364,`ng update @po-ui/ng-sync`),wg(),jc(365,`p`),lO(366,`Para poder utilizar o comando e realizar a migração, execute os comandos abaixo:`),wg(),jc(367,`p`)(368,`code`),lO(369,`npm i --save @po-ui/ng-sync@2`),wg()(),jc(370,`p`)(371,`code`),lO(372,`ng update @po-ui/ng-sync --from 1 --migrate-only`),wg()(),jc(373,`h4`),lO(374,`Breaking Changes`),wg(),jc(375,`p`),lO(376,`Nesta nova versão o nome dos pacotes foram alterados, de acordo com a tabela abaixo:`),wg(),jc(377,`table`)(378,`thead`)(379,`tr`)(380,`th`,6),lO(381,`Pacotes`),wg(),jc(382,`th`,6),lO(383,`Substituído por`),wg()()(),jc(384,`tbody`)(385,`tr`)(386,`td`)(387,`code`),lO(388,`@portinari/portinari-sync`),wg()(),jc(389,`td`)(390,`code`),lO(391,`@po-ui/ng-sync`),wg()()(),jc(392,`tr`)(393,`td`)(394,`code`),lO(395,`@portinari/portinari-storage`),wg()(),jc(396,`td`)(397,`code`),lO(398,`@po-ui/ng-storage`),wg()()(),jc(399,`tr`)(400,`td`)(401,`code`),lO(402,`@portinari/tslint`),wg()(),jc(403,`td`)(404,`code`),lO(405,`@po-ui/ng-tslint`),wg()()()()(),jc(406,`h4`),lO(407,`Depreciação`),wg(),jc(408,`p`),lO(409,`Também foi realizada uma depreciação, onde ainda será aceito o modelo anterior, porém na versão 3 será removido.`),wg(),jc(410,`p`),lO(411,`A depreciação ocorreu no retorno do `),jc(412,`code`),lO(413,`Endpoint de sincronização`),wg(),lO(414,`, onde anteriomente deveria retornar a data da \xFAltima sincroniza\xE7\xE3o
na propriedade `),jc(415,`code`),lO(416,`portinari_sync_date`),wg(),lO(417,`, que agora passa a ser `),jc(418,`code`),lO(419,`po_sync_date`),wg(),lO(420,`, veja o antes e depois:`),wg(),jc(421,`pre`)(422,`code`),lO(423,`{
  "hasNext": false,
  "items": [],
  "portinari_sync_date": "2018-10-08T13:57:55.008Z"
}
`),wg()(),jc(424,`p`),lO(425,`A propriedade `),jc(426,`code`),lO(427,`portinari_sync_date`),wg(),lO(428,` foi depreciada e o nova propriedade é:`),wg(),jc(429,`pre`)(430,`code`),lO(431,`{
  "hasNext": false,
  "items": [],
  "po_sync_date": "2018-10-08T13:57:55.008Z"
}
`),wg()()())},dependencies:[Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var w=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:233,vars:0,consts:[[`p-title`,`Migração do PO UI`,1,`guides`,`app-portal`],[`href`,`guides/migration-poui-v2`],[`href`,`https://github.com/po-ui/po-angular/wiki#vers%C3%B5es-angular-x-po-ui`],[`href`,`https://update.angular.io/`],[`href`,`https://angular.io/cli/update`],[`href`,`guides/migration-poui#components`],[`href`,`guides/migration-poui#sync`],[`id`,`components`],[`href`,`https://github.com/po-ui/po-angular/blob/master/CHANGELOG.md`],[`id`,`sync`],[1,`language-json`],[`href`,`guides/deprecations`]],template:function(o,s){o&1&&(jc(0,`po-page-default`,0)(1,`p`),lO(2,`Este guia contém informações sobre a migração do seu projeto para a versão mais atualizada do PO UI.`),wg(),jc(3,`blockquote`)(4,`p`),lO(5,`Caso você não estiver utilizando a versão anterior da mais atualizada, é importante realizar a migração para a mesma.`),wg()(),jc(6,`blockquote`)(7,`p`),lO(8,`Se seu projeto estiver na v1, veja este Guia de Migração do PO UI para `),jc(9,`a`,1)(10,`strong`),lO(11,`V2`),wg()(),lO(12,`.`),wg()(),jc(13,`h2`),lO(14,`Atualizando o projeto com Angular`),wg(),jc(15,`p`),lO(16,`Antes de atualizar a vers\xE3o do PO UI, \xE9 importante que voc\xEA tenha atualizado o seu projeto para
o Angular que o PO UI est\xE1 homologado, veja nossa
`),jc(17,`a`,2),lO(18,`tabela de compatibilidade`),wg(),lO(19,` em nosso Github Wiki.`),wg(),jc(20,`blockquote`)(21,`p`),lO(22,`Caso o seu projeto não possua a dependência `),jc(23,`code`),lO(24,`@angular-devkit/schematics`),wg(),lO(25,`, realize a instalação do pacote para o nosso script de atualização funcionar corretamente:`),wg()(),jc(26,`pre`)(27,`code`),lO(28,`npm install @angular-devkit/schematics --save-dev
`),wg()(),jc(29,`p`),lO(30,`Para atualizar o Angular, execute o comando abaixo:`),wg(),jc(31,`pre`)(32,`code`),lO(33,`ng update @angular/cli@<version> @angular/core@<version> --force
`),wg()(),jc(34,`p`),lO(35,`Por exemplo:`),wg(),jc(36,`pre`)(37,`code`),lO(38,`ng update @angular/cli@22 @angular/core@22 --force
`),wg()(),jc(39,`blockquote`)(40,`p`),lO(41,`Para realizar a migração completa e avaliar se não precisa fazer alguma alteração veja o `),jc(42,`a`,3)(43,`strong`),lO(44,`Guia de Upgrade do Angular`),wg()(),lO(45,`.`),wg()(),jc(46,`p`),lO(47,`O nosso pacote possu\xEDa depend\xEAncias que eram compat\xEDveis com a vers\xE3o anterior do Angular, portanto
devemos utilizar a `),jc(48,`em`),lO(49,`flag`),wg(),jc(50,`code`),lO(51,`--force`),wg(),lO(52,` para que o Angular realize a migra\xE7\xE3o do seu projeto, ignorando a vers\xE3o das depend\xEAncias.
Para avaliar as `),jc(53,`em`),lO(54,`flags`),wg(),lO(55,` disponíveis veja a `),jc(56,`a`,4)(57,`strong`),lO(58,`documentação do ng update`),wg()(),lO(59,`.`),wg(),jc(60,`h2`),lO(61,`Atualizando o PO UI`),wg(),jc(62,`p`),lO(63,`Para facilitar a migração do seu projeto para o PO UI mais recente, implementamos o `),jc(64,`code`),lO(65,`ng update`),wg(),lO(66,` nos pacotes abaixo:`),wg(),jc(67,`ul`)(68,`li`)(69,`a`,5)(70,`strong`),lO(71,`@po-ui/ng-components`),wg()()(),jc(72,`li`)(73,`a`,6)(74,`strong`),lO(75,`@po-ui/ng-sync`),wg()()()(),jc(76,`p`),nu(77,`a`,7),wg(),jc(78,`h3`),lO(79,`ng update @po-ui/ng-components`),wg(),jc(80,`p`),lO(81,`Para realizar a migração, devemos executar o comando `),jc(82,`code`),lO(83,`ng update`),wg(),lO(84,`, conforme exemplo abaixo. Mas antes verifique se comitou os arquivos alterados pela migra\xE7\xE3o do Angular, se preferir voc\xEA pode utilizar a
`),jc(85,`em`),lO(86,`flag`),wg(),jc(87,`code`),lO(88,`--allow-dirty`),wg(),lO(89,` em conjunto.`),wg(),jc(90,`pre`)(91,`code`),lO(92,`ng update @po-ui/ng-components@<version> --allow-dirty --force
`),wg()(),jc(93,`p`),lO(94,`Por exemplo:`),wg(),jc(95,`pre`)(96,`code`),lO(97,`ng update @po-ui/ng-components@next --allow-dirty --force
`),wg()(),jc(98,`blockquote`)(99,`p`),lO(100,`Caso ocorra um erro ao concluir o comando acima pode ser necessário fazer uma instalação limpa no projeto apagando a pasta `),jc(101,`code`),lO(102,`node_modules`),wg(),lO(103,` e o arquivo `),jc(104,`code`),lO(105,`package-lock.json`),wg(),lO(106,` e executando o comando `),jc(107,`code`),lO(108,`npm i --legacy-peer-deps`),wg(),lO(109,` antes de realizar o `),jc(110,`code`),lO(111,`ng update`),wg(),lO(112,`.`),wg()(),jc(113,`p`),lO(114,`O `),jc(115,`code`),lO(116,`ng update`),wg(),lO(117,` ajudará nas alterações necessárias para seu projeto seguir atualizado, que são elas:`),wg(),jc(118,`ul`)(119,`li`),lO(120,`Caso houver `),jc(121,`em`),lO(122,`breaking changes`),wg(),lO(123,`, serão realizados as alterações possíveis, mas fique atento ao `),jc(124,`a`,8),lO(125,`CHANGELOG`),wg(),lO(126,`;`),wg(),jc(127,`li`),lO(128,`Atualizar as versões dos pacotes:`),jc(129,`ul`)(130,`li`)(131,`code`),lO(132,`@po-ui/ng-components`),wg(),lO(133,`;`),wg(),jc(134,`li`)(135,`code`),lO(136,`@po-ui/ng-templates`),wg(),lO(137,`;`),wg(),jc(138,`li`)(139,`code`),lO(140,`@po-ui/ng-code-editor`),wg(),lO(141,`;`),wg(),jc(142,`li`)(143,`code`),lO(144,`@po-ui/ng-storage`),wg(),lO(145,`;`),wg(),jc(146,`li`)(147,`code`),lO(148,`@po-ui/ng-sync`),wg(),lO(149,`;`),wg(),jc(150,`li`)(151,`code`),lO(152,`@po-ui/style`),wg(),lO(153,`;`),wg()()()(),jc(154,`p`),lO(155,`Além disso, será realizada uma pergunta para que o usuário decida se quer utilizar a nova biblioteca de ícones. Caso a escolha seja positiva, o processo de update irá substituir classes de ícones do po-ui pelas novas referências.`),wg(),jc(156,`p`),nu(157,`a`,9),wg(),jc(158,`h3`),lO(159,`ng update @po-ui/ng-sync`),wg(),jc(160,`blockquote`)(161,`p`),lO(162,`Caso você também utilize `),jc(163,`code`),lO(164,`@po-ui/ng-components`),wg(),lO(165,` não há necessidade de executar o `),jc(166,`em`),lO(167,`ng update`),wg(),lO(168,` do `),jc(169,`code`),lO(170,`@po-ui/ng-sync`),wg(),lO(171,`.`),wg()(),jc(172,`p`),lO(173,`Para realizar a migração, devemos executar o comando `),jc(174,`code`),lO(175,`ng update`),wg(),lO(176,`, conforme exemplo abaixo. Mas antes verifique se comitou os arquivos alterados pela migra\xE7\xE3o do Angular, se preferir voc\xEA pode utilizar a
`),jc(177,`em`),lO(178,`flag`),wg(),jc(179,`code`),lO(180,`--allow-dirty`),wg(),lO(181,` em conjunto.`),wg(),jc(182,`pre`)(183,`code`),lO(184,`ng update @po-ui/ng-sync@<version> --allow-dirty --force
`),wg()(),jc(185,`p`),lO(186,`Por exemplo:`),wg(),jc(187,`pre`)(188,`code`),lO(189,`ng update @po-ui/ng-sync@next --allow-dirty --force
`),wg()(),jc(190,`p`),lO(191,`O `),jc(192,`code`),lO(193,`ng update`),wg(),lO(194,` ajudará nas alterações necessárias para seu projeto, que será atualizar as versões dos pacotes:`),wg(),jc(195,`ul`)(196,`li`)(197,`code`),lO(198,`@po-ui/ng-sync`),wg(),lO(199,`;`),wg(),jc(200,`li`)(201,`code`),lO(202,`@po-ui/ng-storage`),wg(),lO(203,`;`),wg()(),jc(204,`blockquote`)(205,`p`),lO(206,`Pode ocorrer o seguinte erro `),jc(207,`code`),lO(208,`TypeError: Failed to fetch dynamically imported module...`),wg(),lO(209,`, sendo necessário adicionar ao arquivo `),jc(210,`code`),lO(211,`angular.json`),wg(),lO(212,` as seguintes configurações:`),wg(),jc(213,`pre`)(214,`code`,10),lO(215,`{
  "projects": {
    "app": {
      ...
      "architect": {
        ...
        "build": {
          ...
          "options": {
            ...
            "polyfills": ["zone.js"],
          },
        },
        "serve": {
          ...
          "builder": "@angular/build:dev-server",
          "options": {
            ...
            "prebundle": {
              "exclude": ["@ionic/angular", "@ionic/core", "ionicons"]
            }
          }
        },
      }
    }
  },
}
`),wg()()(),jc(216,`h2`),lO(217,`Depreciações e Breaking Changes`),wg(),jc(218,`p`),lO(219,`Possuimos uma documentação que lista as depreciações correntes e os `),jc(220,`em`),lO(221,`breaking changes`),wg(),lO(222,` j\xE1 realizados na biblioteca,
para consult\xE1-lo acesse o guia `),jc(223,`a`,11),lO(224,`Depreciações`),wg()(),jc(225,`p`),lO(226,`Verifique também nosso `),jc(227,`a`,8),lO(228,`CHANGELOG`),wg(),lO(229,` para obter
mais detalhes dos `),jc(230,`em`),lO(231,`breaking changes`),wg(),lO(232,` realizados.`),wg()())},dependencies:[Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var G=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:63,vars:0,consts:[[`p-title`,`Migração do THF para o PO UI v1.x`,1,`guides`,`app-portal`]],template:function(o,s){o&1&&(jc(0,`po-page-default`,0)(1,`p`),lO(2,`Para facilitar a migração do seu projeto com o THF para o PO UI, disponibilizamos um pacote para fazer esta conversão. `),wg(),jc(3,`p`),lO(4,`Este pacote, irá passar pelos arquivos do seu projeto alterando as palavras-chaves do THF para a nova nomenclatura do PO UI.`),wg(),jc(5,`h3`),lO(6,`Antes de iniciar a migração`),wg(),jc(7,`p`),lO(8,`Antes de iniciar a migração certifique-se que:`),wg(),jc(9,`ul`)(10,`li`),lO(11,`Este pacote de migração é apenas para a migração do `),jc(12,`strong`),lO(13,`THF versão 4 ou superior para o PO UI versão 1.x`),wg(),lO(14,` que é compatível com a versão 8 do Angular. `),wg(),jc(15,`li`),lO(16,`As dependências do THF encontram-se na versão 4 ou superior.`),wg(),jc(17,`li`),lO(18,`Todos os arquivos estão salvos.`),wg(),jc(19,`li`),lO(20,`Se as pastas e os arquivos possuem permissão para terceiros alterá-los.`),wg()(),jc(21,`h3`),lO(22,`Instalação do pacote de migração`),wg(),jc(23,`p`),lO(24,`Instale globalmente o pacote `),jc(25,`code`),lO(26,`po-migration`),wg(),lO(27,` utilizando o npm, conforme o comando abaixo:`),wg(),jc(28,`pre`)(29,`code`),lO(30,`npm install -g po-migration
`),wg()(),jc(31,`h3`),lO(32,`Migrando o seu projeto`),wg(),jc(33,`p`),lO(34,`Após a instalação, navegue até a pasta do projeto que você deseja migrar para o PO UI.`),wg(),jc(35,`p`),lO(36,`Para iniciar a migração, execute o comando:`),wg(),jc(37,`pre`)(38,`code`),lO(39,`po-migration start
`),wg()(),jc(40,`p`),lO(41,`Este comando irá utilizar um dicionário de palavras-chaves do próprio THF para realizar a migração, ou seja, se tiver outra palavra que você criou e que não faz parte do THF, ele não irá alterar.`),wg(),jc(42,`p`),lO(43,`No entanto, caso você queira alterar até mesmo palavras criadas por você, utilize o seguinte comando:`),wg(),jc(44,`pre`)(45,`code`),lO(46,`po-migration start --all
`),wg()(),jc(47,`p`),lO(48,`Este comando atualiza todas as palavras do projeto que contém "thf, t-, ou totvs".`),wg(),jc(49,`blockquote`)(50,`p`),lO(51,`Ao utilizar a opção `),jc(52,`code`),lO(53,`--all`),wg(),lO(54,` certifique-se que n\xE3o foi alterado nenhuma palavra que fa\xE7a parte
do caminho de algum arquivo, que voc\xEA possa ter colocado com o nome contendo algumas das palavras "thf, t-, ou totvs".`),wg()(),jc(55,`p`),lO(56,`Veja a documentação completa do pacote `),jc(57,`code`),lO(58,`po-migration`),wg(),lO(59,` executando o comando:`),wg(),jc(60,`pre`)(61,`code`),lO(62,`po-migration --help
`),wg()()())},dependencies:[Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var U=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:81,vars:0,consts:[[`p-title`,`Press Kit`,1,`guides`,`app-portal`],[`href`,`https://creativecommons.org/licenses/by/4.0/`],[1,`docs-presskit-row`,`po-mb-5`],[`src`,`./assets/po-logos/po_color_bg.svg`,`width`,`128`,`height`,`128`,`alt`,`Logo com segundo plano degradê`],[1,`po-ml-md-2`],[`href`,`./assets/po-logos/po_color_bg.png`,`download`,``],[`href`,`./assets/po-logos/po_color_bg.svg`,`download`,``],[`src`,`./assets/po-logos/po_color.svg`,`width`,`128`,`height`,`128`,`alt`,`Logo degradê`],[`href`,`./assets/po-logos/po_color.png`,`download`,``],[`href`,`./assets/po-logos/po_color.svg`,`download`,``],[`src`,`./assets/po-logos/po_black.svg`,`width`,`128`,`height`,`128`,`alt`,`Logo preto`],[`href`,`./assets/po-logos/po_black.png`,`download`,``],[`href`,`./assets/po-logos/po_black.svg`,`download`,``],[`src`,`./assets/po-logos/po_inverse.svg`,`width`,`128`,`height`,`128`,`alt`,`Logo branco com segundo plano preto`],[`href`,`./assets/po-logos/po_inverse.png`,`download`,``],[`href`,`./assets/po-logos/po_inverse.svg`,`download`,``],[`src`,`./assets/po-logos/po_white_mock_bg.png`,`width`,`128`,`height`,`128`,`alt`,`Logo branco com segundo plano transparente`],[`href`,`./assets/po-logos/po_white.png`,`download`,``],[`href`,`./assets/po-logos/po_white.svg`,`download`,``]],template:function(o,s){o&1&&(jc(0,`po-page-default`,0)(1,`h2`),lO(2,`Logomarca`),wg(),jc(3,`p`),lO(4,`A licença para uso das variações de logomarca do `),jc(5,`strong`),lO(6,`PO UI`),wg(),lO(7,` é seguida de acordo com a `),jc(8,`a`,1),lO(9,`CC BY 4.0`),wg(),lO(10,`. Ou seja, pode-se utilizá-las como convier e para qualquer uso, como por exemplo na impressão em camisetas, divulgação em websites, etc.`),wg(),jc(11,`div`,2)(12,`div`),nu(13,`img`,3),wg(),jc(14,`div`,4)(15,`h3`),lO(16,`Versão com segundo plano degradê`),wg(),jc(17,`p`),lO(18,`Logo com segundo plano degradê (png) - `),jc(19,`a`,5),lO(20,`Download`),wg()(),jc(21,`p`),lO(22,`Logo com segundo plano degradê (svg) - `),jc(23,`a`,6),lO(24,`Download`),wg()()()(),jc(25,`div`,2)(26,`div`),nu(27,`img`,7),wg(),jc(28,`div`,4)(29,`h3`),lO(30,`Versão do logo degradê`),wg(),jc(31,`p`),lO(32,`Logo degradê (png) - `),jc(33,`a`,8),lO(34,`Download`),wg()(),jc(35,`p`),lO(36,`Logo degradê (svg) - `),jc(37,`a`,9),lO(38,`Download`),wg()()()(),jc(39,`div`,2)(40,`div`),nu(41,`img`,10),wg(),jc(42,`div`,4)(43,`h3`),lO(44,`Versão do logo em preto`),wg(),jc(45,`p`),lO(46,`Logo preto (png) - `),jc(47,`a`,11),lO(48,`Download`),wg()(),jc(49,`p`),lO(50,`Logo preto (svg) - `),jc(51,`a`,12),lO(52,`Download`),wg()()()(),jc(53,`div`,2)(54,`div`),nu(55,`img`,13),wg(),jc(56,`div`,4)(57,`h3`),lO(58,`Versão branco com segundo plano preto`),wg(),jc(59,`p`),lO(60,`Logo branco (png) - `),jc(61,`a`,14),lO(62,`Download`),wg()(),jc(63,`p`),lO(64,`Logo branco (svg) - `),jc(65,`a`,15),lO(66,`Download`),wg()()()(),jc(67,`div`,2)(68,`div`),nu(69,`img`,16),wg(),jc(70,`div`,4)(71,`h3`),lO(72,`Versão branco com segundo plano transparente`),wg(),jc(73,`p`),lO(74,`Logo branco (png) - `),jc(75,`a`,17),lO(76,`Download`),wg()(),jc(77,`p`),lO(78,`Logo branco (svg) - `),jc(79,`a`,18),lO(80,`Download`),wg()()()()())},dependencies:[Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var R=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:187,vars:0,consts:[[`p-title`,`Lançamentos e suporte`,1,`guides`,`app-portal`],[1,`po-row`],[1,`po-xl-12`,`po-lg-12`,`po-md-12`,`po-sm-12`],[`src`,`./assets/graphics/release-schedule.jpg`,`alt`,`Cronograma de Lançamentos`,2,`max-width`,`100%`,`max-height`,`33vh`],[1,`po-xl-10`,`po-lg-12`,`po-md-12`,`po-sm-12`],[1,`po-table`,`po-text-color-neutral-dark-40`],[1,`po-table-header`],[1,`po-table-header-ellipsis`],[1,`po-table-row`],[1,`po-table-column`],[`href`,`https://semver.org/`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`https://angular.dev/reference/releases`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`href`,`guides/releases`],[`href`,`guides/migration-poui`],[`href`,`guides/getting-started`]],template:function(o,s){o&1&&(jc(0,`po-page-default`,0)(1,`p`),lO(2,`Suporte estendido para versões principais ímpares por até 18 meses, a partir da versão 17.`),wg(),jc(3,`h3`),lO(4,`Cronograma de Lançamentos`),wg(),jc(5,`div`,1)(6,`div`,2),nu(7,`img`,3),wg()(),jc(8,`h3`),lO(9,`Janela de Suporte PO UI`),wg(),jc(10,`p`),lO(11,`Todas as versões Major Ímpares possuem período ativo de 12 meses + suporte (LTS) de 18 meses:`),wg(),jc(12,`div`,1)(13,`div`,4)(14,`table`,5)(15,`thead`)(16,`tr`,6)(17,`th`,7),lO(18,`Estágio de suporte`),wg(),jc(19,`th`,7),lO(20,`Tempo de suporte`),wg(),jc(21,`th`,7),lO(22,`Detalhes`),wg()()(),jc(23,`tbody`)(24,`tr`,8)(25,`td`,9),lO(26,`Active (versões major ímpares)`),wg(),jc(27,`td`,9),lO(28,`12 meses`),wg(),jc(29,`td`,9),lO(30,`Atualizações e correções programadas regularmente`),wg()(),jc(31,`tr`,8)(32,`td`,9),lO(33,`Longo prazo (LTS) (versões major ímpares)`),wg(),jc(34,`td`,9),lO(35,`18 meses`),wg(),jc(36,`td`,9),lO(37,`Apenas correções nas versões ímpares`),wg()(),jc(38,`tr`,8)(39,`td`,9),lO(40,`Active (versões major pares)`),wg(),jc(41,`td`,9),lO(42,`6 meses`),wg(),jc(43,`td`,9),lO(44,`Atualizações e correções programadas regularmente até o lançamento da próxima versão major ímpar`),wg()()()()()(),jc(45,`h3`),lO(46,`Versões PO UI`),wg(),jc(47,`p`),lO(48,`As bibliotecas seguem as regras de versionamento definidas pelo Semantic Versioning (SemVer), conforme descrito em: `),jc(49,`a`,10),lO(50,`https://semver.org/`),wg()(),jc(51,`div`,1)(52,`div`,4)(53,`table`,5)(54,`thead`)(55,`tr`,6)(56,`th`,7),lO(57,`Versão`),wg(),jc(58,`th`,7),lO(59,`Status`),wg(),jc(60,`th`,7),lO(61,`Lançado`),wg(),jc(62,`th`,7),lO(63,`Fim do período ativo`),wg(),jc(64,`th`,7),lO(65,`Fim do LTS`),wg()()(),jc(66,`tbody`)(67,`tr`,8)(68,`td`,9),lO(69,`^23.0.0*`),wg(),jc(70,`td`,9),lO(71,`Previsto`),wg(),jc(72,`td`,9),lO(73,`Janeiro/2027`),wg(),jc(74,`td`,9),lO(75,`Dezembro/2027`),wg(),jc(76,`td`,9),lO(77,`Junho/2029`),wg()(),jc(78,`tr`,8)(79,`td`,9),lO(80,`^22.0.0*`),wg(),jc(81,`td`,9),lO(82,`Previsto`),wg(),jc(83,`td`,9),lO(84,`Julho/2026`),wg(),jc(85,`td`,9),lO(86,`Dezembro/2026`),wg(),jc(87,`td`,9),lO(88,`N/A`),wg()(),jc(89,`tr`,8)(90,`td`,9),lO(91,`^21.0.0`),wg(),jc(92,`td`,9),lO(93,`Active`),wg(),jc(94,`td`,9),lO(95,`Janeiro/2026`),wg(),jc(96,`td`,9),lO(97,`Dezembro/2026`),wg(),jc(98,`td`,9),lO(99,`Junho/2028`),wg()(),jc(100,`tr`,8)(101,`td`,9),lO(102,`^19.0.0`),wg(),jc(103,`td`,9),lO(104,`LTS`),wg(),jc(105,`td`,9),lO(106,`Janeiro/2025`),wg(),jc(107,`td`,9),lO(108,`Dezembro/2025`),wg(),jc(109,`td`,9),lO(110,`Junho/2027`),wg()(),jc(111,`tr`,8)(112,`td`,9),lO(113,`^20.0.0`),wg(),jc(114,`td`,9),lO(115,`Active Encerrado`),wg(),jc(116,`td`,9),lO(117,`Setembro/2025`),wg(),jc(118,`td`,9),lO(119,`Janeiro/2026`),wg(),jc(120,`td`,9),lO(121,`N/A`),wg()(),jc(122,`tr`,8)(123,`td`,9),lO(124,`^18.0.0`),wg(),jc(125,`td`,9),lO(126,`Active Encerrado`),wg(),jc(127,`td`,9),lO(128,`Julho/2024`),wg(),jc(129,`td`,9),lO(130,`Dezembro/2024`),wg(),jc(131,`td`,9),lO(132,`N/A`),wg()(),jc(133,`tr`,8)(134,`td`,9),lO(135,`^17.0.0`),wg(),jc(136,`td`,9),lO(137,`LTS Encerrado`),wg(),jc(138,`td`,9),lO(139,`Março/2024`),wg(),jc(140,`td`,9),lO(141,`Agosto/2024`),wg(),jc(142,`td`,9),lO(143,`Agosto/2025`),wg()()()()()(),jc(144,`p`),lO(145,`Versões LTS recebem apenas correções de segurança e bugs críticos. Não há novas funcionalidades ou melhorias visuais.`),wg(),jc(146,`blockquote`)(147,`p`),lO(148,`*Datas aproximadas, sujeitas a alterações.`),wg()(),jc(149,`h3`),lO(150,`Segurança — Vulnerabilidades em versões LTS`),wg(),jc(151,`p`),lO(152,`Versões LTS podem apresentar `),jc(153,`strong`),lO(154,`vulnerabilidades altas ou críticas`),wg(),lO(155,` no `),jc(156,`code`),lO(157,`npm audit`),wg(),jc(158,`strong`),lO(159,`sem patch disponível`),wg(),lO(160,`, especialmente quando o Angular (peer dependency) já encerrou o suporte da versão utilizada (`),jc(161,`strong`),lO(162,`EOL`),wg(),lO(163,`).`),wg(),jc(164,`blockquote`)(165,`p`),lO(166,`O Status EOL reflete o estado do suporte ao respectivo produto no lançamento da release. O PO UI prestará suporte em sistemas operacionais, produtos, bibliotecas terceiras ou serviços (incluindo o Angular), apenas dentro do ciclo de vida e correções de vulnerabilidades estabelecidos por seus respectivos fabricantes e mantenedores. `),jc(167,`strong`),lO(168,`O PO UI não prestará suporte`),wg(),lO(169,` em sistemas operacionais, produtos, bibliotecas terceiras ou serviços fora de seus ciclos de vida ativos.`),wg()(),jc(170,`p`),lO(171,`Planeje a migração para a versão Active quando possível.`),wg(),jc(172,`p`),lO(173,`Referências:`),wg(),jc(174,`ul`)(175,`li`)(176,`a`,11),lO(177,`Angular Release Schedule`),wg()(),jc(178,`li`)(179,`a`,12),lO(180,`Releases e versionamento`),wg()(),jc(181,`li`)(182,`a`,13),lO(183,`Migração do PO UI`),wg()(),jc(184,`li`)(185,`a`,14),lO(186,`Primeiros passos`),wg()()()())},dependencies:[Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var N=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:253,vars:0,consts:[[`p-title`,`Releases`,1,`guides`,`app-portal`],[`href`,`https://semver.org/`],[1,`po-row`],[1,`po-xl-6`,`po-lg-8`,`po-md-10`,`po-sm-12`],[1,`po-table`,`po-text-color-neutral-dark-40`],[1,`po-table-header`],[1,`po-table-header-ellipsis`],[1,`po-table-row`],[1,`po-table-column`],[`href`,`guides/migration-poui`],[`href`,`guides/migration-poui-v2`],[`href`,`guides/migration-thf-to-po-ui`],[`href`,`https://github.com/po-ui/po-angular/issues/1184`],[`href`,`https://www.npmjs.com/package/@po-ui/ng-components?activeTab=versions`],[`href`,`guides/release-schedule`]],template:function(o,s){o&1&&(jc(0,`po-page-default`,0)(1,`p`),lO(2,`Reconhecemos que você precisa da estabilidade da estrutura PO UI. A estabilidade garante que os componentes, samples e tutoriais não se tornem obsoletos inesperadamente. A estabilidade é essencial para um ecossistema com angular e PO UI prosperar.`),wg(),jc(3,`p`),lO(4,`Também compartilhamos com você o desejo de que o PO UI continue evoluindo. Nós nos esforçamos para garantir que a biblioteca de componentes sobre a qual está construindo sua aplicação continue melhorando e permitindo que você se mantenha atualizado com o resto do ecossistema do Angular e com as necessidades do usuário.`),wg(),jc(5,`p`),lO(6,`Este documento contém as práticas que seguimos para fornecer a você uma biblioteca de componentes de ponta, equilibrada e com estabilidade. Nós nos esforçamos para garantir que as mudanças futuras sejam sempre introduzidas de forma previsível. Queremos que todos que dependam do PO UI saibam quando e como os novos recursos serão adicionados e estejam bem preparados quando os obsoletos são removidos.`),wg(),jc(7,`h2`),lO(8,`Controle de Versão PO UI`),wg(),jc(9,`p`),lO(10,`Os números de versão do PO UI indicam o nível de mudanças introduzidas pelo lançamento. Este uso de `),jc(11,`a`,1),lO(12,`versionamento semântico`),wg(),lO(13,` ajuda a entender o impacto potencial de atualizar para uma nova versão.`),wg(),jc(14,`p`),lO(15,`Números de versão PO UI tem três partes: `),jc(16,`code`),lO(17,`major.minor.patch`),wg(),lO(18,`. Por exemplo, a versão 4.16.1 indica a versão principal 4, a versão secundária 2 e o nível de patch 1.`),wg(),jc(19,`p`),lO(20,`O número da versão principal é incrementado com base na versão do Angular que ele atende.`),wg(),jc(21,`ul`)(22,`li`)(23,`strong`),lO(24,`As versões principais`),wg(),lO(25,` contêm os novos recursos disponibilizados pelo Angular, mas espera-se uma assistência mínima do desenvolvedor durante a atualização. Ao atualizar para uma nova versão principal, pode ser necessário executar scripts de atualização, refatorar códigos, executar testes adicionais e aprender novas APIs.`),wg(),jc(26,`li`)(27,`strong`),lO(28,`Versões secundárias`),wg(),lO(29,` contém novos recursos menores. Versões menores são totalmente compatíveis com versões anteriores; nenhuma assistência do desenvolvedor é esperada durante a atualização, mas você pode opcionalmente modificar seus aplicativos e bibliotecas para começar a usar novas APIs, recursos e capacidades que foram adicionados na versão. São incrementadas regularmente ao final de nossas sprints.`),wg(),jc(30,`li`)(31,`strong`),lO(32,`Lançamentos de patch`),wg(),lO(33,` são lançamentos de correção de bugs. Nenhuma ajuda do desenvolvedor é esperada durante a atualização.`),wg()(),jc(34,`h2`),lO(35,`Caminhos de atualização suportados`),wg(),jc(36,`p`),lO(37,`Em alinhamento com o esquema de controle de versão descrito acima, nos comprometemos a oferecer suporte aos seguintes caminhos de atualização:`),wg(),jc(38,`ul`)(39,`li`),lO(40,`Se você estiver atualizando na `),jc(41,`strong`),lO(42,`versão principal`),wg(),lO(43,`, poderá pular todas as versões intermediárias e atualizar diretamente para a versão de destino. Por exemplo, você pode atualizar diretamente da versão 4.0.0 para a 4.17.0.`),wg(),jc(44,`li`),lO(45,`Se você estiver atualizando de `),jc(46,`strong`),lO(47,`uma versão principal para outra`),wg(),lO(48,`, recomendamos que `),jc(49,`strong`),lO(50,`não ignore as versões principais`),wg(),lO(51,`. Siga as instruções para atualizar de forma incremental para a próxima versão principal, testando e validando em cada erapa. Por exemplo, se você deseja atualizar da versão 2.xx para a versão 4.xx, recomendamos que você atualize para a versão 3.xx mais recente primeiro. Depois de atualizar com sucesso para a versão 3.xx, você pode atualizar para a 4.xx.`),wg()(),jc(52,`p`),lO(53,`Consulte abaixo nossos guias de migração de versão para obter mais informações sobre como atualizar o PO UI para a versão mais recente nos seus projetos Angular.`),wg(),jc(54,`h3`),lO(55,`Comparativo de versões Angular x PO UI`),wg(),jc(56,`div`,2)(57,`div`,3)(58,`table`,4)(59,`thead`)(60,`tr`,5)(61,`th`,6),lO(62,`Angular`),wg(),jc(63,`th`,6),lO(64,`PO UI`),wg(),jc(65,`th`,6),lO(66,`Migração`),wg()()(),jc(67,`tbody`)(68,`tr`,7)(69,`td`,8),lO(70,`22.0.0`),wg(),jc(71,`td`,8),lO(72,`22.0.0`),wg(),jc(73,`td`,8)(74,`a`,9),lO(75,`Migração do PO UI`),wg()()(),jc(76,`tr`,7)(77,`td`,8),lO(78,`21.0.0`),wg(),jc(79,`td`,8),lO(80,`21.0.0`),wg(),jc(81,`td`,8)(82,`a`,9),lO(83,`Migração do PO UI`),wg()()(),jc(84,`tr`,7)(85,`td`,8),lO(86,`20.0.0`),wg(),jc(87,`td`,8),lO(88,`20.0.0`),wg(),jc(89,`td`,8)(90,`a`,9),lO(91,`Migração do PO UI`),wg()()(),jc(92,`tr`,7)(93,`td`,8),lO(94,`19.0.0`),wg(),jc(95,`td`,8),lO(96,`19.0.0`),wg(),jc(97,`td`,8)(98,`a`,9),lO(99,`Migração do PO UI`),wg()()(),jc(100,`tr`,7)(101,`td`,8),lO(102,`18.0.0`),wg(),jc(103,`td`,8),lO(104,`18.0.0`),wg(),jc(105,`td`,8)(106,`a`,9),lO(107,`Migração do PO UI`),wg()()(),jc(108,`tr`,7)(109,`td`,8),lO(110,`17.0.0`),wg(),jc(111,`td`,8),lO(112,`17.0.0`),wg(),jc(113,`td`,8)(114,`a`,9),lO(115,`Migração do PO UI`),wg()()(),jc(116,`tr`,7)(117,`td`,8),lO(118,`16.0.0`),wg(),jc(119,`td`,8),lO(120,`16.0.0`),wg(),jc(121,`td`,8)(122,`a`,9),lO(123,`Migração do PO UI`),wg()()(),jc(124,`tr`,7)(125,`td`,8),lO(126,`15.0.0`),wg(),jc(127,`td`,8),lO(128,`15.0.0`),wg(),jc(129,`td`,8)(130,`a`,9),lO(131,`Migração do PO UI`),wg()()(),jc(132,`tr`,7)(133,`td`,8),lO(134,`14.0.0`),wg(),jc(135,`td`,8),lO(136,`14.0.0`),wg(),jc(137,`td`,8)(138,`a`,9),lO(139,`Migração do PO UI`),wg()()(),jc(140,`tr`,7)(141,`td`,8),lO(142,`13.0.0`),wg(),jc(143,`td`,8),lO(144,`6.0.0`),wg(),jc(145,`td`,8)(146,`a`,9),lO(147,`Migração do PO UI`),wg()()(),jc(148,`tr`,7)(149,`td`,8),lO(150,`12.0.0`),wg(),jc(151,`td`,8),lO(152,`5.0.0`),wg(),jc(153,`td`,8)(154,`a`,9),lO(155,`Migração do PO UI`),wg()()(),jc(156,`tr`,7)(157,`td`,8),lO(158,`11.0.0`),wg(),jc(159,`td`,8),lO(160,`4.0.0`),wg(),jc(161,`td`,8)(162,`a`,9),lO(163,`Migração do PO UI`),wg()()(),jc(164,`tr`,7)(165,`td`,8),lO(166,`10.0.0`),wg(),jc(167,`td`,8),lO(168,`3.0.0`),wg(),jc(169,`td`,8)(170,`a`,9),lO(171,`Migração do PO UI`),wg()()(),jc(172,`tr`,7)(173,`td`,8),lO(174,`9.0.0`),wg(),jc(175,`td`,8),lO(176,`2.0.0`),wg(),jc(177,`td`,8)(178,`a`,10),lO(179,`Migração do PO UI para V2`),wg()()(),jc(180,`tr`,7)(181,`td`,8),lO(182,`8.0.0`),wg(),jc(183,`td`,8),lO(184,`1.0.0`),wg(),jc(185,`td`,8)(186,`a`,11),lO(187,`Migração THF para PO UI v1.x`),wg()()()()()()(),jc(188,`blockquote`)(189,`p`),lO(190,`Conforme agenda de publicação de novas versões estáveis do Angular, nós atualizamos nossas versões como de costume e aproveitaremos para fazer uma mudança na nomenclatura das nossas versões. A versão `),jc(191,`code`),lO(192,`v7.x.x`),wg(),lO(193,` foi lançada como `),jc(194,`strong`)(195,`code`),lO(196,`v14.x.x`),wg()(),lO(197,`, assim `),jc(198,`code`),lO(199,`a versão 14.x.x do PO UI tem compatibilidade com a v14 do Angular`),wg(),lO(200,` e assim por diante. `),jc(201,`a`,12),lO(202,`Mais informações`),wg(),lO(203,`.`),wg()(),jc(204,`h2`),lO(205,`Versões prévias`),wg(),jc(206,`p`),lO(207,`Permitimos que você visualize o que está por vir, fornecendo pré-lançamentos `),jc(208,`code`),lO(209,`next`),wg(),lO(210,` ou Release Candidates (`),jc(211,`code`),lO(212,`rc`),wg(),lO(213,`) para cada versão principal:`),wg(),jc(214,`ul`)(215,`li`)(216,`strong`),lO(217,`Next`),wg(),lO(218,`: a versão que está em desenvolvimento, com testes ativos e com breaking changes a resolver. O próximo lançamento é indicado por uma tag de lançamento anexada ao identificador `),jc(219,`code`),lO(220,`-next`),wg(),lO(221,`, como `),jc(222,`code`),lO(223,`17.0.0-next`),wg(),lO(224,`.`),wg(),jc(225,`li`)(226,`strong`),lO(227,`Release Candidate`),wg(),lO(228,`: um lançamento com recurso concluído, teste finalizado e sem breaking changes a resolver. Um candidato a lançamento é indicado por uma tag de lançamento anexada ao identificador `),jc(229,`code`),lO(230,`-rc`),wg(),lO(231,`, como versão `),jc(232,`code`),lO(233,`17.0.0-rc`),wg(),lO(234,`.`),wg()(),jc(235,`p`),lO(236,`A versão mais recente `),jc(237,`code`),lO(238,`next`),wg(),lO(239,` ou de pré-lançamento `),jc(240,`code`),lO(241,`rc`),wg(),lO(242,` fica disponível no `),jc(243,`a`,13),lO(244,`npm do projeto`),wg(),lO(245,`.`),wg(),jc(246,`h2`),lO(247,`Lançamentos e suporte`),wg(),jc(248,`p`),lO(249,`Para informações sobre o cronograma de lançamentos, janela de suporte (Active/LTS) e política de segurança em versões LTS, consulte o guia `),jc(250,`a`,14),lO(251,`Lançamentos e suporte`),wg(),lO(252,`.`),wg()())},dependencies:[Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var L=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:60,vars:0,consts:[[`p-title`,`Schematics`,1,`guides`,`app-portal`],[`href`,`https://angular.io/cli`]],template:function(o,s){o&1&&(jc(0,`po-page-default`,0)(1,`p`),lO(2,`O PO contém `),jc(3,`em`),lO(4,`schematics`),wg(),lO(5,` do `),jc(6,`a`,1),lO(7,`Angular CLI`),wg(),lO(8,` em seu pacote, para facilitar o desenvolvimento de aplicações PO.`),wg(),jc(9,`h2`),lO(10,`Instalando`),wg(),jc(11,`p`),lO(12,`Um vez que for instalado o pacotes, teremos disponível os `),jc(13,`em`),lO(14,`schematics`),wg(),lO(15,` através do Angular CLI.`),wg(),jc(16,`h3`),lO(17,`PO UI Components`),wg(),jc(18,`p`),lO(19,`Caso esteja iniciando uma aplica\xE7\xE3o com PO, indica-se utilizar o comando abaixo,
no qual ser\xE1 instalado o pacote `),jc(20,`code`),lO(21,`@po-ui/ng-components`),wg(),lO(22,` e realizadas algumas configurações, que serão descritas em seguida:`),wg(),jc(23,`pre`)(24,`code`),lO(25,`ng add @po-ui/ng-components@next
`),wg()(),jc(26,`ul`)(27,`li`),lO(28,`Substitui o `),jc(29,`code`),lO(30,`AppComponent`),wg(),lO(31,` com uma estrutura incial de um projeto, utilizando os components `),jc(32,`code`),lO(33,`po-page-default`),wg(),lO(34,`, `),jc(35,`code`),lO(36,`po-toolbar`),wg(),lO(37,`, e `),jc(38,`code`),lO(39,`po-menu`),wg(),lO(40,`;`),wg(),jc(41,`li`),lO(42,`Importa o módulo do PO;`),wg(),jc(43,`li`),lO(44,`Configura o tema do PO no projeto;`),wg()(),jc(45,`h3`),lO(46,`PO UI Templates`),wg(),jc(47,`p`),lO(48,`Para a utiliza\xE7\xE3o de componentes de template o processo para inclus\xE3o \xE9 semelhante.
Primeiramente, deve-se utilizar o comando abaixo, no qual ser\xE1 instalado o pacote `),jc(49,`code`),lO(50,`@po-ui/ng-templates`),wg(),lO(51,`:`),wg(),jc(52,`pre`)(53,`code`),lO(54,`ng add @po-ui/ng-templates@next
`),wg()(),jc(55,`ul`)(56,`li`),lO(57,`Importa o módulo do PO;`),wg(),jc(58,`li`),lO(59,`Configura o tema do PO no projeto caso não possua;`),wg()()())},dependencies:[Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var _=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:1071,vars:0,consts:[[`p-title`,`Fundamentos do PO Sync`,1,`guides`,`app-portal`],[`href`,`guides/sync-fundamentals#introduction`],[`href`,`guides/sync-fundamentals#knowledge`],[`href`,`guides/sync-fundamentals#schemas`],[`href`,`guides/sync-fundamentals#create-schema`],[`href`,`guides/sync-fundamentals#schematic`],[`href`,`guides/sync-fundamentals#prepare-api`],[`href`,`guides/sync-fundamentals#logical-deletion`],[`href`,`guides/sync-fundamentals#sync-url`],[`href`,`guides/sync-fundamentals#prepare`],[`href`,`guides/sync-fundamentals#periodic`],[`href`,`guides/sync-fundamentals#load-data`],[`href`,`guides/sync-fundamentals#po-entity`],[`href`,`guides/sync-fundamentals#find-data`],[`href`,`guides/sync-fundamentals#save-and-remove`],[`href`,`guides/sync-fundamentals#sync`],[`href`,`guides/sync-fundamentals#advanced-techniques`],[`href`,`guides/sync-fundamentals#on-sync`],[`href`,`guides/sync-fundamentals#po-data-transform`],[`href`,`guides/sync-fundamentals#get-responses`],[`href`,`guides/sync-fundamentals#insert-http-command`],[`href`,`guides/sync-fundamentals#custom-request-id`],[`href`,`guides/sync-fundamentals#schemas-definition`],[`href`,`guides/sync-fundamentals#po-conference`],[`id`,`introduction`],[2,`text-align`,`center`],[`src`,`./assets/graphics/po-sync/event-sourcing.jpg`,1,`po-mt-2`,`po-mb-2`,2,`max-width`,`100%`],[`src`,`./assets/graphics/po-sync/sync-send.jpg`,1,`po-mt-2`,`po-mb-2`,2,`max-width`,`100%`],[`src`,`./assets/graphics/po-sync/sync-get.jpg`,1,`po-mt-2`,`po-mb-2`,2,`max-width`,`100%`],[`href`,`/documentation/po-sync`],[`href`,`guides/sync-get-started`],[`id`,`knowledge`],[`href`,`http://es6-features.org`],[`href`,`http://es6-features.org/#PromiseUsage`],[`href`,`https://ionicframework.com/`],[`href`,`http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html`],[`href`,`https://rxjs-dev.firebaseapp.com/guide/overview`],[`id`,`schemas`],[`id`,`create-schema`],[1,`language-shell`],[1,`language-typescript`],[`id`,`schematic`],[`id`,`prepare-api`],[`id`,`logical-deletion`],[1,`language-javascript`],[`id`,`sync-url`],[`href`,`https://po-sample-conference.onrender.com/conferences/diff/2018-10-08T13:23:31.893Z`],[`href`,`https://po-ui.io/guides/api`],[`id`,`prepare`],[`id`,`periodic`],[`id`,`load-data`],[`id`,`po-entity`],[`href`,`/documentation/po-entity`],[`id`,`find-data`],[`href`,`/documentation/po-query-builder`],[`id`,`save-and-remove`],[`id`,`sync`],[`id`,`advanced-techniques`],[`id`,`on-sync`],[`id`,`po-data-transform`],[`href`,`/documentation/po-data-transform`],[`id`,`get-responses`],[`href`,`/documentation/po-event-sourcing-error-response`],[`id`,`insert-http-command`],[`id`,`custom-request-id`],[`id`,`schemas-definition`],[`id`,`po-conference`],[`href`,`https://github.com/ionic-team/ionic-conference-app`],[`href`,`https://github.com/po-ui/po-sample-conference`]],template:function(o,s){o&1&&(jc(0,`po-page-default`,0)(1,`h2`),lO(2,`Conteúdo`),wg(),jc(3,`ul`)(4,`li`)(5,`a`,1),lO(6,`Introdução`),wg()(),jc(7,`li`)(8,`a`,2),lO(9,`Conhecimentos necessários`),wg()(),jc(10,`li`)(11,`a`,3)(12,`em`),lO(13,`Schemas`),wg()(),jc(14,`ul`)(15,`li`)(16,`a`,4),lO(17,`Como criar um `),jc(18,`em`),lO(19,`schema`),wg()()(),jc(20,`li`)(21,`a`,5),lO(22,`Schematic`),wg()()()(),jc(23,`li`)(24,`a`,6),lO(25,`Preparando a API para a sincronização`),wg(),jc(26,`ul`)(27,`li`)(28,`a`,7),lO(29,`Exclusão lógica`),wg()(),jc(30,`li`)(31,`a`,8)(32,`em`),lO(33,`Endpoint`),wg(),lO(34,` de sincronização`),wg()()()(),jc(35,`li`)(36,`a`,9),lO(37,`Preparando a aplicação`),wg(),jc(38,`ul`)(39,`li`)(40,`a`,10),lO(41,`Sincronização periódica`),wg()(),jc(42,`li`)(43,`a`,11),lO(44,`Carga inicial dos dados`),wg()()()(),jc(45,`li`)(46,`a`,12),lO(47,`Manipulando os registros de um `),jc(48,`em`),lO(49,`schema`),wg()(),jc(50,`ul`)(51,`li`)(52,`a`,13),lO(53,`Buscando os registros`),wg()(),jc(54,`li`)(55,`a`,14),lO(56,`Criação, atualização e exclusão de um registro`),wg()()()(),jc(57,`li`)(58,`a`,15),lO(59,`Sincronização manual`),wg()(),jc(60,`li`)(61,`a`,16),lO(62,`Técnicas avançadas`),wg(),jc(63,`ul`)(64,`li`)(65,`a`,17),lO(66,`Notificação pós-sincronização`),wg()(),jc(67,`li`)(68,`a`,18),lO(69,`Adaptando a resposta da API para o padrão do PO UI`),wg()(),jc(70,`li`)(71,`a`,19),lO(72,`Capturando respostas da sincronização`),wg()(),jc(73,`li`)(74,`a`,20),lO(75,`Inserindo requisições HTTP na fila de eventos`),wg()(),jc(76,`li`)(77,`a`,21),lO(78,`Criação de identificador customizado para eventos da fila`),wg()(),jc(79,`li`)(80,`a`,22),lO(81,`Alterando as definições dos `),jc(82,`em`),lO(83,`schemas`),wg()()()()(),jc(84,`li`)(85,`a`,23),lO(86,`Aplicativo de demonstração do PO Sync`),wg()()(),jc(87,`p`),nu(88,`a`,24),wg(),jc(89,`h2`),lO(90,`Introdução`),wg(),jc(91,`p`),lO(92,`O PO Sync \xE9 uma biblioteca que possibilita armazenar dados na aplica\xE7\xE3o local mantendo a sincroniza\xE7\xE3o entre os dados locais e o servidor.
Permitindo que o usu\xE1rio utilize a aplica\xE7\xE3o tanto `),jc(93,`em`),lO(94,`online`),wg(),lO(95,` quanto `),jc(96,`em`),lO(97,`offline`),wg(),lO(98,`, com a mesma experiência de uso.`),wg(),jc(99,`h3`),lO(100,`Como o PO Sync mantém os dados atualizados com o servidor?`),wg(),jc(101,`p`),lO(102,`Todas as modifica\xE7\xF5es nos registros como criar, alterar e excluir acontecem primeiramente no armazenamento local.
Para cada modifica\xE7\xE3o feita em um registro tamb\xE9m \xE9 criado um evento. Este evento representa uma opera\xE7\xE3o, sendo
composto basicamente pelo tipo de opera\xE7\xE3o (cria\xE7\xE3o, altera\xE7\xE3o ou remo\xE7\xE3o) e o registro modificado.
Este evento \xE9 adicionado a uma fila de eventos que ser\xE1 consumida pelo processo de sincroniza\xE7\xE3o (atualiza\xE7\xE3o dos dados).
Este processo \xE9 demonstrado na figura a seguir:`),wg(),jc(103,`p`,25),nu(104,`img`,26),wg(),jc(105,`p`),lO(106,`É no processo de sincronização que os dados são atualizados tanto da aplicação local para o servidor quanto do servidor para a aplicação local.`),wg(),jc(107,`blockquote`)(108,`p`),lO(109,`A sincronização sempre acontece com a aplicação `),jc(110,`em`),lO(111,`online`),wg(),lO(112,` e em segundo plano, permitindo que o usuário continue utilizando a aplicação normalmente.`),wg()(),jc(113,`h4`),lO(114,`Como ocorre a sincronização?`),wg(),jc(115,`p`),lO(116,`A sincronização dos dados acontece em duas etapas:`),wg(),jc(117,`p`)(118,`strong`),lO(119,`1)`),wg(),lO(120,` Busca os itens da fila de eventos e envia os dados modificados da aplicação local para o servidor sequencialmente:`),wg(),jc(121,`p`,25),nu(122,`img`,27),wg(),jc(123,`p`)(124,`strong`),lO(125,`2)`),wg(),lO(126,` Busca os dados que foram modificados no servidor e atualiza na aplicação local:`),wg(),jc(127,`p`,25),nu(128,`img`,28),wg(),jc(129,`p`),lO(130,`Esta sincronização pode ser acionada (gatilho) das seguintes formas:`),wg(),jc(131,`ul`)(132,`li`)(133,`p`),lO(134,`Reativa: toda vez que houver alguma mudança no hardware do dispositivo, como na troca do tipo de rede 4G para WI-FI;`),wg()(),jc(135,`li`)(136,`p`)(137,`a`,10),lO(138,`Periódica`),wg(),lO(139,`: será acionada periodicamente baseada nos parâmetros de configurações do `),jc(140,`a`,29),lO(141,`PoSyncConfig`),wg(),lO(142,`;`),wg()(),jc(143,`li`)(144,`p`)(145,`a`,15),lO(146,`Manualmente`),wg(),lO(147,`: será acionada na chamada manual do método `),jc(148,`code`),lO(149,`PoSyncService.sync()`),wg(),lO(150,`.`),wg()()(),jc(151,`blockquote`)(152,`p`),lO(153,`Antes de continuar os próximos passos, siga as instruções do `),jc(154,`a`,30),lO(155,`Começando com o PO Sync`),wg(),lO(156,` para
saber como criar um novo projeto com Ionic 7 utilizando o PO Sync.`),wg()(),jc(157,`p`),nu(158,`a`,31),wg(),jc(159,`h2`),lO(160,`Conhecimentos necessários`),wg(),jc(161,`p`),lO(162,`Para compreender o funcionamento do PO Sync e utilizá-lo é necessário ter conhecimento técnico em:`),wg(),jc(163,`ul`)(164,`li`)(165,`a`,32),lO(166,`JavaScript (ES6)`),wg(),lO(167,`, em particular a utilização do padrão `),jc(168,`a`,33)(169,`em`),lO(170,`Promises`),wg()(),lO(171,`;`),wg(),jc(172,`li`)(173,`a`,34),lO(174,`Ionic`),wg(),lO(175,`;`),wg(),jc(176,`li`)(177,`a`,35),lO(178,`Observable`),wg(),lO(179,` do `),jc(180,`a`,36),lO(181,`RxJS`),wg(),lO(182,`;`),wg(),jc(183,`li`),lO(184,`Protocolo de comunicação HTTP;`),wg(),jc(185,`li`),lO(186,`Arquitetura REST.`),wg()(),jc(187,`p`),nu(188,`a`,37),wg(),jc(189,`h2`)(190,`em`),lO(191,`Schemas`),wg()(),jc(192,`p`),lO(193,`O PO Sync sincroniza os dados com base em um conjunto de `),jc(194,`em`),lO(195,`schemas`),wg(),lO(196,`. Onde cada `),jc(197,`em`),lO(198,`schema`),wg(),lO(199,` representa um modelo de dados,
ou seja, a estrutura l\xF3gica e as caracter\xEDsticas de um conjunto de registros. Sendo semelhante a uma tabela
convencional de um banco de dados, como por exemplo uma tabela de clientes, produtos ou autom\xF3veis. No entanto os `),jc(200,`em`),lO(201,`schemas`),wg(),lO(202,`
n\xE3o possuem relacionamentos entre si como as tabelas convencionais.`),wg(),jc(203,`p`),nu(204,`a`,38),wg(),jc(205,`h3`),lO(206,`Como criar um `),jc(207,`em`),lO(208,`schema`),wg()(),jc(209,`p`),lO(210,`Cada `),jc(211,`em`),lO(212,`schema`),wg(),lO(213,` deve implementar a interface `),jc(214,`a`,29),lO(215,`PoSyncSchema`),wg(),lO(216,`. Para criar um `),jc(217,`em`),lO(218,`schema`),wg(),lO(219,` que represente uma "Confer\xEAncia"
podemos fazer:`),wg(),jc(220,`pre`)(221,`code`,39),lO(222,`ng generate @po-ui/ng-sync:schema --name=conference
`),wg()(),jc(223,`p`),lO(224,`O comando ng generate do Angular CLI criará um arquivo com uma estrutura semelhante a essa:`),wg(),jc(225,`pre`)(226,`code`,40),lO(227,`import { PoSyncSchema } from '@po-ui/ng-sync';

const conferenceSchema: PoSyncSchema = {
  // Endpoint para o m\xE9todo GET
  getUrlApi: 'https://po-sample-conference.onrender.com/conferences',
  diffUrlApi: 'https://po-sample-conference.onrender.com/conferences/diff',
  deletedField: 'isDeleted',
  fields: [ 'id', 'title', 'date', 'location', 'description' ],
  idField: 'id',
  name: 'conference',
  pageSize: 1
};
`),wg()(),jc(228,`p`),lO(229,`Nesta definição de `),jc(230,`em`),lO(231,`schema`),wg(),lO(232,` podem ser configurados os `),jc(233,`em`),lO(234,`endpoints`),wg(),lO(235,` para os m\xE9todos HTTP: GET, POST, DELETE e PATCH,
sendo somente o `),jc(236,`em`),lO(237,`endpoint`),wg(),lO(238,` do m\xE9todo GET obrigat\xF3rio. Caso os demais n\xE3o sejam informados, ser\xE1 utilizado o mesmo endere\xE7o
do `),jc(239,`em`),lO(240,`endpoint`),wg(),lO(241,` do método GET para os outros métodos.`),wg(),jc(242,`p`),lO(243,`A propriedade `),jc(244,`code`),lO(245,`fields`),wg(),lO(246,` da interface `),jc(247,`a`,29),lO(248,`PoSyncSchema`),wg(),lO(249,` representa os campos que estar\xE3o no registro.
Por exemplo, para um `),jc(250,`em`),lO(251,`schema`),wg(),lO(252,` do tipo Pessoa, poderíamos ter os campos: nome, idade e endereço.`),wg(),jc(253,`p`),lO(254,`N\xE3o necessariamente precisam ser representados todos os campos retornados pela API, somente os necess\xE1rios para as
manipula\xE7\xF5es atrav\xE9s do PO Sync.`),wg(),jc(255,`p`),nu(256,`a`,41),wg(),jc(257,`h3`),lO(258,`Schematic`),wg(),jc(259,`p`),lO(260,`Você pode utilizar um schematic para criar o arquivo com a estrutura básica do schema.`),wg(),jc(261,`p`),lO(262,`Para isso utilize o comando`),wg(),jc(263,`pre`)(264,`code`,39),lO(265,`ng generate @po-ui/ng-sync:schema
`),wg()(),jc(266,`p`),lO(267,`Você também pode informar um caminho completo.`),wg(),jc(268,`pre`)(269,`code`,39),lO(270,`ng generate @po-ui/ng-sync:schema --name=conference/schema/conference
`),wg()(),jc(271,`p`),lO(272,`Ou apenas o nome do schema que ele criará o arquivo na pasta que o comando for executado.`),wg(),jc(273,`pre`)(274,`code`,39),lO(275,`ng generate @po-ui/ng-sync:schema --name=conference
`),wg()(),jc(276,`p`),nu(277,`a`,42),wg(),jc(278,`h2`),lO(279,`Preparando a API para a sincronização`),wg(),jc(280,`p`),lO(281,`Para que a sincronização aconteça corretamente é necessário que a API tenha implementado a `),jc(282,`a`,7),lO(283,`exclusão lógica`),wg(),lO(284,` e um `),jc(285,`a`,8)(286,`em`),lO(287,`endpoint`),wg(),lO(288,` de sincronização`),wg(),lO(289,`.`),wg(),jc(290,`p`),nu(291,`a`,43),wg(),jc(292,`h3`),lO(293,`Exclusão lógica`),wg(),jc(294,`p`),lO(295,`A exclus\xE3o dos registros na API dever\xE1 ser feita de forma l\xF3gica, ou seja, \xE9 necess\xE1rio que cada registro contenha um
campo que representa se aquele registro foi exclu\xEDdo, por exemplo:`),wg(),jc(296,`pre`)(297,`code`,44),lO(298,`{
  "id": 1,
  "title": "PO conference 2018",
  "date": "2018-08-11T00:00:00Z",
  "location": "Av. Santos Dumont, 831 - Santo Ant\xF4nio, Joinville - SC",
  "description": "Conference organized by PO",
  // Campo informando se o registro foi exclu\xEDdo
  "isDeleted": false
}
`),wg()(),jc(299,`p`),lO(300,`No registro acima o campo chamado `),jc(301,`code`),lO(302,`isDeleted`),wg(),lO(303,` descreve se ele foi excluído ou não.`),wg(),jc(304,`p`),lO(305,`Esta informação do campo deverá ser fornecida ao PO Sync dentro da declaração de cada `),jc(306,`em`),lO(307,`schema`),wg(),lO(308,`, para isso temos a
propriedade `),jc(309,`code`),lO(310,`deletedField`),wg(),lO(311,` na interface `),jc(312,`a`,29),lO(313,`PoSyncSchema`),wg(),lO(314,`, por exemplo:`),wg(),jc(315,`pre`)(316,`code`,40),lO(317,`import { PoSyncSchema } from '@po-ui/ng-sync';

const conferenceSchema: PoSyncSchema = {
  getUrlApi: 'https://po-sample-conference.onrender.com/conferences',
  diffUrlApi: 'https://po-sample-conference.onrender.com/conferences/diff',
  // Defini\xE7\xE3o do nome do campo
  deletedField: 'isDeleted',
  fields: [ 'id', 'title', 'date', 'location', 'description' ],
  idField: 'id',
  name: 'conference',
  pageSize: 1
};
`),wg()(),jc(318,`h4`),lO(319,`Porque exclusão lógica?`),wg(),jc(320,`p`),lO(321,`A exclusão lógica é utilizada para que outras aplicações possam saber se um registro foi removido.`),wg(),jc(322,`p`),lO(323,`Imagine que dois aplicativos estejam manipulando o mesmo registro através de um `),jc(324,`em`),lO(325,`endpoint`),wg(),lO(326,`. Um dos aplicativos remove
este registro, como o outro aplicativo saber\xE1 que este registro foi removido? Atrav\xE9s da exclus\xE3o l\xF3gica, o PO Sync
tem o controle dessa informa\xE7\xE3o.`),wg(),jc(327,`p`),nu(328,`a`,45),wg(),jc(329,`h3`)(330,`em`),lO(331,`Endpoint`),wg(),lO(332,` de sincronização`),wg(),jc(333,`p`),lO(334,`Sempre que houver uma sincronização, uma requisição é feita neste `),jc(335,`em`),lO(336,`endpoint`),wg(),lO(337,` utilizando a data da \xFAltima sincroniza\xE7\xE3o
como refer\xEAncia (como par\xE2metro da URL). Ao receber esta data, o `),jc(338,`em`),lO(339,`endpoint`),wg(),lO(340,` deve retornar todos os registros que
tiveram a \xFAltima atualiza\xE7\xE3o maior ou igual a data que foi recebida como par\xE2metro, logo, somente os dados n\xE3o
sincronizados ser\xE3o retornados. Para cada um dos `),jc(341,`em`),lO(342,`schemas`),wg(),lO(343,` é necessário ter um `),jc(344,`em`),lO(345,`endpoint`),wg(),lO(346,` de sincronização.`),wg(),jc(347,`p`),lO(348,`Abra o seu navegador e acesse a URL
`),jc(349,`a`,46),lO(350,`https://po-sample-conference.onrender.com/conferences/diff/2018-10-08T13:23:31.893Z`),wg(),lO(351,`.`),wg(),jc(352,`p`),lO(353,`O `),jc(354,`em`),lO(355,`endpoint`),wg(),lO(356,` de sincronização deve retornar uma resposta com a estrutura como a da URL acima, por exemplo:`),wg(),jc(357,`pre`)(358,`code`,44),lO(359,`{
  "hasNext": false,
  "items": [],
  "po_sync_date": "2018-10-08T13:57:55.008Z"
}
`),wg()(),jc(360,`p`),lO(361,`Onde:`),wg(),jc(362,`ul`)(363,`li`)(364,`code`),lO(365,`hasNext`),wg(),lO(366,`: Indica se existe uma próxima página com mais registros para aquela coleção de itens.`),wg(),jc(367,`li`)(368,`code`),lO(369,`items`),wg(),lO(370,`: Lista de itens retornados.`),wg(),jc(371,`li`)(372,`code`),lO(373,`po_sync_date`),wg(),lO(374,`: Data da \xFAltima sincroniza\xE7\xE3o. Ao realizar esta requisi\xE7\xE3o estamos solicitando uma
sincroniza\xE7\xE3o, ent\xE3o esta data deve ser a data em que o servidor est\xE1 devolvendo a resposta. Se na requisi\xE7\xE3o o `),jc(375,`em`),lO(376,`endpoint`),wg(),lO(377,`
n\xE3o enviar esta data, n\xE3o ser\xE1 poss\xEDvel fazer a pr\xF3xima sincroniza\xE7\xE3o, pois esta data ser\xE1 utilizada
para a pr\xF3xima URL de sincroniza\xE7\xE3o.`),wg()(),jc(378,`blockquote`)(379,`p`),lO(380,`Esta estrutura de resposta é padronizada pelo `),jc(381,`a`,47),lO(382,`Guia de implementação de APIs`),wg(),lO(383,`.`),wg()(),jc(384,`blockquote`)(385,`p`)(386,`strong`),lO(387,`Primeira sincronização:`),wg(),lO(388,` como na primeira sincronização o PO Sync ainda não recebeu nenhuma data dos `),jc(389,`em`),lO(390,`endpoints`),wg(),lO(391,`, a URL \xE9 montada com uma data muito
antiga, o que faz com que todos os dados sejam retornados na primeira sincroniza\xE7\xE3o.`),wg()(),jc(392,`p`),lO(393,`A definição deste `),jc(394,`em`),lO(395,`endpoint`),wg(),lO(396,` deve ser feita na propriedade `),jc(397,`code`),lO(398,`diffUrlApi`),wg(),lO(399,` da sua definição do `),jc(400,`em`),lO(401,`schema`),wg(),lO(402,`, como no exemplo
abaixo:`),wg(),jc(403,`pre`)(404,`code`,40),lO(405,`import { PoSyncSchema } from '@po-ui/ng-sync';

const conferenceSchema: PoSyncSchema = {
  getUrlApi: 'https://po-sample-conference.onrender.com/conferences',
  // Defini\xE7\xE3o da URL de sincroniza\xE7\xE3o
  diffUrlApi: 'https://po-sample-conference.onrender.com/conferences/diff',
  deletedField: 'isDeleted',
  fields: [ 'id', 'title', 'date', 'location', 'description' ],
  idField: 'id',
  name: 'conference',
  pageSize: 1
};
`),wg()(),jc(406,`p`),nu(407,`a`,48),wg(),jc(408,`h2`),lO(409,`Preparando a aplicação`),wg(),jc(410,`p`),lO(411,`Após ter criado os `),jc(412,`em`),lO(413,`schemas`),wg(),lO(414,` e preparado a API, \xE9 necess\xE1rio preparar a aplica\xE7\xE3o para utilizar o PO Sync passando para
ele os `),jc(415,`em`),lO(416,`schemas`),wg(),lO(417,` e as configurações iniciais. Se você seguiu o guia `),jc(418,`a`,30),lO(419,`Começando com o PO Sync`),wg(),lO(420,`,
dentro do arquivo `),jc(421,`code`),lO(422,`src/app/app.component.ts`),wg(),lO(423,`, no método `),jc(424,`code`),lO(425,`initSync()`),wg(),lO(426,` foi feita a seguinte implementação:`),wg(),jc(427,`pre`)(428,`code`,40),lO(429,`const config: PoSyncConfig = {
  type: PoNetworkType.ethernet
};
const schemas = [conferenceSchema];

this.poSync.prepare(schemas, config).then(() => {
  this.poSync.sync();
  ...
});
`),wg()(),jc(430,`p`),lO(431,`A variável `),jc(432,`code`),lO(433,`config`),wg(),lO(434,` implementa a interface `),jc(435,`a`,29),lO(436,`PoSyncConfig`),wg(),lO(437,` e representa as configura\xE7\xF5es iniciais de sincroniza\xE7\xE3o. Neste
exemplo, a propriedade `),jc(438,`code`),lO(439,`type`),wg(),lO(440,` descreve o tipo de conex\xE3o que ir\xE1 permitir que aconte\xE7a o sincronismo. Ao terminar de
preparar a aplica\xE7\xE3o os dados estar\xE3o dispon\xEDveis para serem sincronizados do servidor para a aplica\xE7\xE3o local. Por esta raz\xE3o,
ap\xF3s a conclus\xE3o da promessa deste m\xE9todo, o `),jc(441,`code`),lO(442,`poSync.sync()`),wg(),lO(443,` pode ser chamado para sincronizar os dados.`),wg(),jc(444,`p`),nu(445,`a`,49),wg(),jc(446,`h3`),lO(447,`Sincronização periódica`),wg(),jc(448,`p`),lO(449,`Para que os dados sejam atualizados dentro de um período de tempo, modifique a constante `),jc(450,`code`),lO(451,`config`),wg(),lO(452,` do exemplo
anterior para ficar da seguinte forma:`),wg(),jc(453,`pre`)(454,`code`,40),lO(455,`const config: PoSyncConfig = {
  type: PoNetworkType.ethernet,
  // Linha adicionada
  period: 30
};

const schemas = [conferenceSchema];

this.poSync.prepare(schemas, config).then(() => {
  this.poSync.sync();
  ...
});
`),wg()(),jc(456,`p`),lO(457,`Onde o valor da propriedade `),jc(458,`code`),lO(459,`period`),wg(),lO(460,` define que o sincronismo deverá ser ativado a cada 30 segundos.`),wg(),jc(461,`p`),nu(462,`a`,50),wg(),jc(463,`h3`),lO(464,`Carga inicial dos dados`),wg(),jc(465,`p`),lO(466,`Caso queira fazer a carga inicial dos dados que estão no servidor antes de fazer o primeiro sincronismo, o serviço `),jc(467,`a`,29),lO(468,`PoSyncService`),wg(),lO(469,`
disponibiliza um m\xE9todo chamado `),jc(470,`code`),lO(471,`PoSyncService.loadData()`),wg(),lO(472,`.`),wg(),jc(473,`blockquote`)(474,`p`)(475,`strong`),lO(476,`Atenção:`),wg(),lO(477,` este método deve ser chamado apenas uma vez para carregar os dados iniciais e antes do primeiro sincronismo.`),wg()(),jc(478,`p`),lO(479,`Para implementar a carga inicial no código anterior, basta substituir a linha onde estava `),jc(480,`code`),lO(481,`this.poSync.sync();`),wg(),lO(482,` pela
seguinte implementa\xE7\xE3o:`),wg(),jc(483,`pre`)(484,`code`,40),lO(485,`const config: PoSyncConfig = {
  type: PoNetworkType.ethernet,
  period: 30
};

const schemas = [conferenceSchema];

this.poSync.prepare(schemas, config).then(() => {
  
  // Implementa\xE7\xE3o adicionada
  if(<condicao>) {
    this.poSync.loadData();
  }

});
`),wg()(),jc(486,`p`),lO(487,`Onde `),jc(488,`code`),lO(489,`<condicao>`),wg(),lO(490,` deve ser substitu\xEDda por uma valida\xE7\xE3o que verifique se \xE9 a primeira vez em que os dados est\xE3o sendo
carregados na aplica\xE7\xE3o, como por exemplo na instala\xE7\xE3o do aplicativo.`),wg(),jc(491,`p`),nu(492,`a`,51),wg(),jc(493,`h2`),lO(494,`Manipulando os registros de um `),jc(495,`em`),lO(496,`schema`),wg()(),jc(497,`p`),lO(498,`Toda a manipulação dos registros de um `),jc(499,`em`),lO(500,`schema`),wg(),lO(501,` como salvar, remover e buscar \xE9 feita atrav\xE9s da inst\xE2ncia da classe
`),jc(502,`a`,52),lO(503,`PoEntity`),wg(),lO(504,` que pode ser obtida a partir do método `),jc(505,`code`),lO(506,`PoSyncService.getModel()`),wg(),lO(507,`, por exemplo:`),wg(),jc(508,`pre`)(509,`code`,40),lO(510,`this.conferenceModel = await this.poSync.getModel('conference');
`),wg()(),jc(511,`p`),lO(512,`Onde o parâmetro "conference" representa o nome do `),jc(513,`em`),lO(514,`schema`),wg(),lO(515,` que se deseja manipular.
Este \xE9 o mesmo valor colocado na propriedade `),jc(516,`code`),lO(517,`name`),wg(),lO(518,` da interface `),jc(519,`a`,29),lO(520,`PoSyncSchema`),wg(),lO(521,`.`),wg(),jc(522,`p`),lO(523,`Agora com esta instância podemos utilizar todos os métodos do `),jc(524,`a`,52),lO(525,`PoEntity`),wg(),lO(526,` para manipular os registros.`),wg(),jc(527,`p`),nu(528,`a`,53),wg(),jc(529,`h3`),lO(530,`Buscando os registros`),wg(),jc(531,`blockquote`)(532,`p`),lO(533,`A busca dos registros sempre é feita na aplicação local, pois a mesma é atualizada com o servidor através do processo de sincronização.`),wg()(),jc(534,`p`),lO(535,`Com a instância de `),jc(536,`a`,52),lO(537,`PoEntity`),wg(),lO(538,` armazenada na propriedade `),jc(539,`code`),lO(540,`this.conferenceModel`),wg(),lO(541,` podemos buscar
os registros com o `),jc(542,`code`),lO(543,`PoEntity.find()`),wg(),lO(544,` da seguinte forma:`),wg(),jc(545,`pre`)(546,`code`,40),lO(547,`this.conferences = await this.conferenceModel.find().exec();
`),wg()(),jc(548,`p`),lO(549,`Podemos notar que após usar o método, foi necessário concatená-lo com o método `),jc(550,`code`),lO(551,`PoQueryBuilder.exec()`),wg(),lO(552,`
para que a busca pudesse ser conclu\xEDda e os registros serem retornados.`),wg(),jc(553,`p`),lO(554,`Isso acontece porque o método `),jc(555,`code`),lO(556,`PoEntity.find()`),wg(),lO(557,` retorna uma instância da classe `),jc(558,`a`,54),lO(559,`PoQueryBuilder`),wg(),lO(560,` e todos os m\xE9todos
desta classe podem ser encadeados e no final chamar o m\xE9todo `),jc(561,`code`),lO(562,`PoQueryBuilder.exec()`),wg(),lO(563,` para concluir a busca.`),wg(),jc(564,`p`),lO(565,`Por exemplo, para buscar os dados e ordená-los pelo campo do `),jc(566,`em`),lO(567,`schema`),wg(),lO(568,` chamado `),jc(569,`code`),lO(570,`title`),wg(),lO(571,`, podemos fazer:`),wg(),jc(572,`pre`)(573,`code`,40),lO(574,`this.conferences = await this.conferenceModel.find().sort('title').exec();
`),wg()(),jc(575,`p`),lO(576,`E se quisermos retornar somente os campos `),jc(577,`code`),lO(578,`title`),wg(),lO(579,` e `),jc(580,`code`),lO(581,`location`),wg(),lO(582,`, podemos fazer:`),wg(),jc(583,`pre`)(584,`code`,40),lO(585,`this.conferences = await this.conferenceModel.find().sort('title').select('title location').exec();
`),wg()(),jc(586,`blockquote`)(587,`p`),lO(588,`Para saber mais sobre os métodos para construção de consultas, acesse `),jc(589,`a`,54),lO(590,`PoQueryBuilder`),wg(),lO(591,`.`),wg()(),jc(592,`p`),nu(593,`a`,55),wg(),jc(594,`h3`),lO(595,`Criação, atualização e exclusão de um registro`),wg(),jc(596,`p`),lO(597,`Ainda com a instância de `),jc(598,`a`,52),lO(599,`PoEntity`),wg(),lO(600,` podemos utilizar o método `),jc(601,`code`),lO(602,`PoEntity.save()`),wg(),lO(603,` para criar um
novo registro. Portanto para criar uma nova confer\xEAncia no nosso exemplo, podemos fazer:`),wg(),jc(604,`pre`)(605,`code`,40),lO(606,`const conference = { title: 'BrasilJS', location: 'Barra Shopping Sul - Porto Alegre, RS - Brasil' };

this.conferenceModel.save(conference).then(() => {
  // Confer\xEAncia criada!
});
`),wg()(),jc(607,`p`),lO(608,`E para atualizar a conferência, é necessário ter o registro buscado através do `),jc(609,`a`,52),lO(610,`PoEntity`),wg(),lO(611,`,
pois este registro dever\xE1 conter o `),jc(612,`em`),lO(613,`id`),wg(),lO(614,` depois que for salvo.`),wg(),jc(615,`p`),lO(616,`Por exemplo, para buscarmos e atualizarmos a conferência que criamos acima, podemos fazer:`),wg(),jc(617,`p`)(618,`strong`),lO(619,`1)`),wg(),lO(620,` Buscar a conferência pelo título "BrasilJS":`),wg(),jc(621,`pre`)(622,`code`,40),lO(623,`const conferenceUpdated = await this.conferenceModel.find().filter({ title: 'BrasilJS' }).exec();
`),wg()(),jc(624,`p`)(625,`strong`),lO(626,`2)`),wg(),lO(627,` Podemos atualizar a localização, por exemplo:`),wg(),jc(628,`pre`)(629,`code`,40),lO(630,`conferenceUpdated.location = 'UFRGS - Porto Alegre, RS - Brasil';
`),wg()(),jc(631,`p`)(632,`strong`),lO(633,`3)`),wg(),lO(634,` Utilizamos o método `),jc(635,`code`),lO(636,`PoEntity.save()`),wg(),lO(637,` para efetuar a atualização:`),wg(),jc(638,`pre`)(639,`code`,40),lO(640,`this.conferenceModel.save(conferenceUpdated).then(() => {
  // Confer\xEAncia atualizada!
});
`),wg()(),jc(641,`p`),lO(642,`Para excluir um registro também é necessário buscá-lo através do `),jc(643,`a`,52),lO(644,`PoEntity`),wg(),lO(645,`
como na atualiza\xE7\xE3o e ap\xF3s esta busca utilizar o m\xE9todo `),jc(646,`code`),lO(647,`PoEntity.remove()`),wg(),lO(648,` para remover o registro, por exemplo:`),wg(),jc(649,`pre`)(650,`code`,40),lO(651,`const conferenceRemove = await this.conferenceModel.find().filter({ title: 'BrasilJS' }).exec();

this.conferenceModel.remove(conferenceRemove).then(() => {
  // Confer\xEAncia removida!
});
`),wg()(),jc(652,`p`),nu(653,`a`,56),wg(),jc(654,`h2`),lO(655,`Sincronização manual`),wg(),jc(656,`p`),lO(657,`Existem casos onde o usu\xE1rio do aplicativo deseja ativar manualmente a sincroniza\xE7\xE3o, como por exemplo apertando um
bot\xE3o para atualizar os dados.`),wg(),jc(658,`p`),lO(659,`Esta operação pode ser feita através do método `),jc(660,`code`),lO(661,`PoSyncService.sync()`),wg(),lO(662,`. Por exemplo:`),wg(),jc(663,`pre`)(664,`code`,40),lO(665,`this.poSync.sync().then(() => {
  // Sincroniza\xE7\xE3o conclu\xEDda
}).catch(() => {
  // Erro durante a sincroniza\xE7\xE3o
});
`),wg()(),jc(666,`p`),nu(667,`a`,57),wg(),jc(668,`h2`),lO(669,`Técnicas avançadas`),wg(),jc(670,`p`),nu(671,`a`,58),wg(),jc(672,`h3`),lO(673,`Notificação pós-sincronização`),wg(),jc(674,`p`),lO(675,`Em algumas situa\xE7\xF5es, \xE9 necess\xE1rio ser notificado sempre que uma sincroniza\xE7\xE3o acontecer para, por exemplo, atualizar a tela do usu\xE1rio com os dados sincronizados. Para isso, se inscreva atrav\xE9s do m\xE9todo
`),jc(676,`code`),lO(677,`PoSyncService.onSync()`),wg(),lO(678,` que irá notificá-lo sempre que uma sincronização acontecer com sucesso.`),wg(),jc(679,`p`),lO(680,`Por exemplo, no guia `),jc(681,`a`,30),lO(682,`Começando com o PO Sync`),wg(),lO(683,` temos a utiliza\xE7\xE3o do m\xE9todo
`),jc(684,`code`),lO(685,`PoSyncService.onSync()`),wg(),lO(686,` dentro do `),jc(687,`code`),lO(688,`constructor()`),wg(),lO(689,`, localizado no arquivo `),jc(690,`code`),lO(691,`src/pages/home/home.ts`),wg(),lO(692,`:`),wg(),jc(693,`pre`)(694,`code`,40),lO(695,`constructor(public navCtrl: NavController, private poSync: PoSyncService) {
  // Deve chamar o m\xE9todo loadHomePage() sempre que acontecer uma sincroniza\xE7\xE3o
  this.poSync.onSync().subscribe(() => this.loadHomePage());
}

async loadHomePage() {
  this.conference = await this.poSync.getModel('conference').findOne().exec();
}
`),wg()(),jc(696,`blockquote`)(697,`p`),lO(698,`Para saber mais sobre este método acesse `),jc(699,`a`,29),lO(700,`PoSyncService.onSync()`),wg(),lO(701,`.`),wg()(),jc(702,`p`),nu(703,`a`,59),wg(),jc(704,`h3`),lO(705,`Adaptando a resposta da API para o padrão do PO`),wg(),jc(706,`p`),lO(707,`O PO Sync necessita que as APIs utilizem o padrão de respostas que está no `),jc(708,`a`,47),lO(709,`Guia de implementação de APIs`),wg(),lO(710,` que segue a seguinte estrutura:`),wg(),jc(711,`pre`)(712,`code`,44),lO(713,`{
  "hasNext": boolean,
  "items": [],
  "po_sync_date": date
}
`),wg()(),jc(714,`p`),lO(715,`No entanto, existem APIs que ainda não seguem este padrão. Imagine que você possua uma API que sempre retorne a seguinte estrutura:`),wg(),jc(716,`pre`)(717,`code`,40),lO(718,`{
  "next": string,
  "data": [],
  "sync_date": date
}
`),wg()(),jc(719,`p`),lO(720,`Onde:`),wg(),jc(721,`ul`)(722,`li`)(723,`code`),lO(724,`next`),wg(),lO(725,`: é a URL da próxima página. Por exemplo: `),jc(726,`code`),lO(727,`https://<url>?page=3`),wg(),lO(728,`;`),wg(),jc(729,`li`)(730,`code`),lO(731,`data`),wg(),lO(732,`: lista de itens retornados;`),wg(),jc(733,`li`)(734,`code`),lO(735,`sync_date`),wg(),lO(736,`: data da última sincronização.`),wg()(),jc(737,`p`),lO(738,`E a API espera para paginação os seguintes parâmetros na URL:`),wg(),jc(739,`ul`)(740,`li`)(741,`code`),lO(742,`pageNumber`),wg(),lO(743,`: indica o número da página;`),wg(),jc(744,`li`)(745,`code`),lO(746,`size`),wg(),lO(747,`: quantidade de itens por página.`),wg()(),jc(748,`p`),lO(749,`Por exemplo:`),wg(),jc(750,`pre`)(751,`code`),lO(752,`http://<url>/?pageNumber=2&size=10
`),wg()(),jc(753,`p`),lO(754,`É possível fazer a adaptação desta resposta utilizando a classe `),jc(755,`a`,60),lO(756,`PoDataTransform`),wg(),lO(757,`.
Esta classe possui uma propriedade chamada `),jc(758,`code`),lO(759,`data`),wg(),lO(760,` que representa a resposta que o `),jc(761,`em`),lO(762,`endpoint`),wg(),lO(763,` retornou.`),wg(),jc(764,`p`),lO(765,`Para fazer a adaptação desta estrutura de resposta:`),wg(),jc(766,`p`)(767,`strong`),lO(768,`1)`),wg(),lO(769,` Crie uma nova classe e a faça herdar a classe `),jc(770,`a`,60),lO(771,`PoDataTransform`),wg(),lO(772,`:`),wg(),jc(773,`pre`)(774,`code`,40),lO(775,`import { PoDataTransform } from '@po-ui/ng-sync';

class MyDataTransform extends PoDataTransform {
  ...
}
`),wg()(),jc(776,`p`)(777,`strong`),lO(778,`2)`),wg(),lO(779,` Implemente os métodos da classe `),jc(780,`a`,60),lO(781,`PoDataTransform`),wg(),lO(782,`:`),wg(),jc(783,`pre`)(784,`code`,40),lO(785,`import { PoDataTransform } from '@po-ui/ng-sync';

class MyDataTransform extends PoDataTransform {

  getDateFieldName(): string {
    return 'sync_date';
  }

  getItemsFieldName(): string {
    return 'data';
  }

  getPageParamName(): string {
    return 'pageNumber';
  }

  getPageSizeParamName(): string {
    return 'size';
  }

  hasNext(): boolean {
    return !!this.data.next;
  }

}
`),wg()(),jc(786,`p`),lO(787,`Os primeiros quatro m\xE9todos representam os nomes que ir\xE3o corresponder a cada par\xE2metro. No nosso exemplo, a cole\xE7\xE3o de
registros n\xE3o est\xE1 em uma propriedade `),jc(788,`code`),lO(789,`items`),wg(),lO(790,` conforme o padrão PO UI, mas sim em `),jc(791,`code`),lO(792,`data`),wg(),lO(793,`, ent\xE3o no m\xE9todo
`),jc(794,`code`),lO(795,`MyDataTransform.getItemsFieldName()`),wg(),lO(796,` será retornado o valor `),jc(797,`code`),lO(798,`data`),wg(),lO(799,`.`),wg(),jc(800,`p`),lO(801,`O método `),jc(802,`code`),lO(803,`MyDataTransform.hasNext()`),wg(),lO(804,` deve retornar um valor `),jc(805,`em`),lO(806,`booleano`),wg(),lO(807,` que determina se existe mais p\xE1ginas para serem
buscadas ou n\xE3o. No nosso exemplo podemos acessar a pr\xF3xima p\xE1gina com a propriedade `),jc(808,`code`),lO(809,`next`),wg(),lO(810,`.
Como temos acesso a resposta da API atrav\xE9s da propriedade `),jc(811,`code`),lO(812,`data`),wg(),lO(813,`, podemos saber se existe uma próxima página do seguinte modo:`),wg(),jc(814,`pre`)(815,`code`,40),lO(816,`hasNext(): boolean {
  return !!this.data.next;
}
`),wg()(),jc(817,`p`)(818,`strong`),lO(819,`3)`),wg(),lO(820,` Por fim, deve ser criado uma instância desta classe `),jc(821,`code`),lO(822,`MyDataTransform`),wg(),lO(823,` e incluí-la na propriedade do objeto `),jc(824,`code`),lO(825,`PoSyncConfig`),wg(),lO(826,`
que \xE9 inserido no m\xE9todo `),jc(827,`code`),lO(828,`PoSyncService.prepare()`),wg(),lO(829,`, da seguinte forma:`),wg(),jc(830,`pre`)(831,`code`,40),lO(832,`const config: PoSyncConfig = {
  type: PoNetworkType.ethernet,
  period: 30,
  // Inst\xE2ncia da classe MyDataTransform
  dataTransform: new MyDataTransform()
};

const schemas = [conferenceSchema];

this.poSync.prepare(schemas, config).then(() => {
  ...
});
`),wg()(),jc(833,`p`),lO(834,`Com isto, todas as respostas dos `),jc(835,`em`),lO(836,`endpoints`),wg(),lO(837,` dos schemas ser\xE3o adaptados para seguir o padr\xE3o de API do PO UI esperado pelo
PO Sync.`),wg(),jc(838,`p`),nu(839,`a`,61),wg(),jc(840,`h3`),lO(841,`Capturando respostas da sincronização`),wg(),jc(842,`p`),lO(843,`Conforme os itens que est\xE3o na fila de eventos s\xE3o enviados para o servidor \xE9 poss\xEDvel fazer este monitoramento
atrav\xE9s da inscri\xE7\xE3o no m\xE9todo `),jc(844,`code`),lO(845,`PoSyncService.getResponses()`),wg(),lO(846,`.
A inscri\xE7\xE3o realizada atrav\xE9s do m\xE9todo `),jc(847,`code`),lO(848,`.subscribe()`),wg(),lO(849,`, retorna um objeto do tipo `),jc(850,`code`),lO(851,`PoSyncResponse`),wg(),lO(852,` que cont\xE9m as
informa\xE7\xF5es do item que foi consumido da fila de eventos. Exemplo de utiliza\xE7\xE3o:`),wg(),jc(853,`pre`)(854,`code`,40),lO(855,`this.poSync.getResponses().subscribe(poSyncResponse => {
  // Foi consumido um item da fila de eventos.
});
`),wg()(),jc(856,`h4`),lO(857,`Em que situações este monitoramento pode ser útil?`),wg(),jc(858,`p`),lO(859,`Este monitoramento \xE9 \xFAtil para saber se os itens conseguiram ser enviados para o servidor com sucesso. Caso um item
enviado n\xE3o tiver sucesso, o consumo da fila de eventos ser\xE1 suspenso e os demais itens n\xE3o ser\xE3o enviados para o
servidor enquanto este item que n\xE3o est\xE1 sendo enviado for resolvido.`),wg(),jc(860,`p`),lO(861,`O consumo da fila de eventos pode ser suspenso em duas situações:`),wg(),jc(862,`ul`)(863,`li`),lO(864,`Se o servidor rejeitar a requisição com `),jc(865,`em`),lO(866,`status`),wg(),lO(867,` diferente da classe de `),jc(868,`em`),lO(869,`status 2xx`),wg(),lO(870,` (sucesso);`),wg(),jc(871,`li`),lO(872,`Se um item da fila representa uma requisição de alteração ou exclusão e o registro envolvido não possuir `),jc(873,`em`),lO(874,`id`),wg(),lO(875,`.`),wg()(),jc(876,`p`),lO(877,`Para resolver este tipo de problema, uma solução é remover este item da fila de eventos, isto pode ser feito da seguinte forma:`),wg(),jc(878,`pre`)(879,`code`,40),lO(880,`// Monitora o consumo da fila de eventos
this.poSync.getResponses().subscribe(poSyncResponse => {

  // Verifica se o retorno do consumo da fila \xE9 um erro HTTP
  if (poSyncResponse.response instanceof HttpErrorResponse || poSyncResponse.response instanceof PoEventSourcingErrorResponse) {

    // Remove o item da fila de eventos
    this.poSync.removeItemOfSync(poSyncResponse.id).then(() => {
      // Sincroniza os itens novamente
      return this.poSync.resumeSync();
    });

  }

});
`),wg()(),jc(881,`blockquote`)(882,`p`),lO(883,`Saiba mais sobre `),jc(884,`a`,29),lO(885,`PoSyncService.getResponses()`),wg(),lO(886,`, `),jc(887,`a`,29),lO(888,`PoSyncService.removeItemOfSync()`),wg(),lO(889,`
e `),jc(890,`a`,62),lO(891,`PoEventSourcingErrorResponse`),wg(),lO(892,`.`),wg()(),jc(893,`p`),nu(894,`a`,63),wg(),jc(895,`h3`),lO(896,`Inserindo requisições HTTP na fila de eventos`),wg(),jc(897,`p`),lO(898,`A manipula\xE7\xE3o da fila de eventos \xE9 feita pelo PO Sync, mas existe a possibilidade de criar um evento na fila contendo uma
requisi\xE7\xE3o HTTP customizada. Isso pode ser feito atrav\xE9s da utiliza\xE7\xE3o do m\xE9todo `),jc(899,`code`),lO(900,`PoSyncService.insertHttpCommand()`),wg(),lO(901,`.
Este m\xE9todo recebe como primeiro par\xE2metro um objeto no formato `),jc(902,`a`,29),lO(903,`PoHttpRequestData`),wg(),lO(904,` que cont\xE9m as informa\xE7\xF5es da requisi\xE7\xE3o.
Exemplo de utiliza\xE7\xE3o:`),wg(),jc(905,`pre`)(906,`code`,40),lO(907,`const poHttpRequestData: PoHttpRequestData = {
  // URL que ser\xE1 enviada na requisi\xE7\xE3o
  url: 'http://<url>',

  // M\xE9todo HTTP que ser\xE1 utilizado
  method: PoHttpRequestType.POST,

  // Corpo da requisi\xE7\xE3o
  body: { record: 'example' }
};

this.poSync.insertHttpCommand(poHttpRequestData).then(commandId => {
  // Item adicionado na fila de eventos e retornado o ID do evento em "commandId"
});
`),wg()(),jc(908,`p`),lO(909,`O método `),jc(910,`code`),lO(911,`PoSyncService.insertHttpCommand()`),wg(),lO(912,` retorna uma promessa e no parâmetro do `),jc(913,`em`),lO(914,`callback`),wg(),lO(915,` da promessa \xE9 fornecido
o identificador daquele evento. Este identificador por ser armazenado e utilizado posteriormente em alguma valida\xE7\xE3o no m\xE9todo
`),jc(916,`a`,29),lO(917,`PoSyncService.getResponses()`),wg(),lO(918,`, por exemplo:`),wg(),jc(919,`pre`)(920,`code`,40),lO(921,`this.poSync.getResponses().subscribe(poSyncResponse => {

  if(poSyncResponse.id === this.commandResponseId) {
    // \xC9 o evento de requisi\xE7\xE3o HTTP customizado
  }

});

const poHttpRequestData: PoHttpRequestData = {
  // URL que ser\xE1 enviada na requisi\xE7\xE3o
  url: 'http://<url>',

  // M\xE9todo HTTP que ser\xE1 utilizado
  method: PoHttpRequestType.POST,

  // Corpo da requisi\xE7\xE3o
  body: { record: 'example' }
};


this.poSync.insertHttpCommand(poHttpRequestData).then(commandId => {
  // Atribui\xE7\xE3o do identificador do evento a uma propriedade
  this.commandResponseId = commandId
});
`),wg()(),jc(922,`p`),lO(923,`Também é possível fazer o envio de arquivo (File) para o servidor utilizando o `),jc(924,`code`),lO(925,`Content-Type: multipart/form-data`),wg(),lO(926,`. Para isso, deve ser informado no `),jc(927,`code`),lO(928,`body`),wg(),lO(929,` o `),jc(930,`code`),lO(931,`rawFile`),wg(),lO(932,`, conforme exemplo abaixo:`),wg(),jc(933,`pre`)(934,`code`,40),lO(935,`public insertFileHttpCommand(file: File) {
  const requestData: PoHttpRequestData = {
    url: 'http://my-server/api/v1/upload';,
    method: PoHttpRequestType.POST,
    headers: Array<PoHttpHeaderOption> = [{ name: 'Authorization', value: 'Basic ' + btoa('13' + ':' + '13') }],
    body: file.rawFile,
    formField: 'files',
  };

  this.poSync.insertHttpCommand(requestData).then(commandId => {
    // Evento HTTP adicionado na fila de eventos e retornado o ID do evento em "commandId"
  });
}
`),wg()(),jc(936,`blockquote`)(937,`p`),lO(938,`Caso não seja passado nenhum valor para a propriedade `),jc(939,`code`),lO(940,`formField`),wg(),lO(941,` será aplicado o valor padrão `),jc(942,`code`),lO(943,`file`),wg(),lO(944,`.`),wg()(),jc(945,`blockquote`)(946,`p`),lO(947,`Para o envio de arquivos recomendamos o uso prioritário do `),jc(948,`code`),lO(949,`lokijs`),wg(),lO(950,` nas configurações do `),jc(951,`code`),lO(952,`PoStorageModule`),wg(),lO(953,` por sua maior capacidade de armazenamento.
A configura\xE7\xE3o deve ser feita no `),jc(954,`code`),lO(955,`app.module.ts`),wg(),lO(956,` da sua aplicação, por exemplo:`),wg()(),jc(957,`pre`)(958,`code`,40),lO(959,`...
@NgModule({
  ...
  imports: [
    ...
    PoStorageModule.forRoot({ // import do m\xF3dulo Po Storage,
      name: 'mystorage',
      storeName: '_mystore',
      driverOrder: ['lokijs', 'indexeddb', 'localstorage', 'websql']
    }),
    PoSyncModule, // import do m\xF3dulo Po Sync
  ],
  ...
})
export class AppModule {}
`),wg()(),jc(960,`p`),nu(961,`a`,64),wg(),jc(962,`h3`),lO(963,`Criação de identificador customizado para eventos da fila`),wg(),jc(964,`p`),lO(965,`Para monitorar se um evento em espec\xEDfico foi enviado ou n\xE3o para o servidor \xE9 poss\xEDvel criar um identificador customizado
para ele e inseri-lo como par\xE2metro nos m\xE9todos `),jc(966,`code`),lO(967,`PoEntity.save()`),wg(),lO(968,`, `),jc(969,`code`),lO(970,`PoEntity.remove()`),wg(),lO(971,` ou `),jc(972,`code`),lO(973,`PoSync.insertHttpCommand`),wg(),lO(974,`. Este identificador é retornado junto com o objeto `),jc(975,`code`),lO(976,`PoSyncResponse`),wg(),lO(977,` do método `),jc(978,`code`),lO(979,`PoSync.getResponses()`),wg(),lO(980,`, o que possibilita identificar se o evento foi enviado ou não, da seguinte forma:`),wg(),jc(981,`p`),lO(982,`Na criação ou alteração de um registro:`),wg(),jc(983,`pre`)(984,`code`,40),lO(985,`// Capturando os eventos enviados ao servidor
this.poSync.getResponses().subscribe(poSyncResponse => {

  if (poSyncResponse.customRequestId === customId) {
    // A cria\xE7\xE3o/altera\xE7\xE3o com o id-1234 foi processado no servidor
  }

});

const conferenceModel = this.poSync.getModel('conference');

const customId = 'id-1234';

// Inserido o identificador 'customId' no segundo par\xE2metro
conferenceModel.save(conference, customId).then(() => {});
`),wg()(),jc(986,`p`),lO(987,`Na remoção de um registro:`),wg(),jc(988,`pre`)(989,`code`,40),lO(990,`// Capturando os eventos enviados ao servidor
this.poSync.getResponses().subscribe(poSyncResponse => {

  if (poSyncResponse.customRequestId === customId) {
    // A remo\xE7\xE3o com o id-ABC foi processado no servidor
  }

});

const conferenceModel = this.poSync.getModel('conference');

const customId = 'id-ABC';

// Inserido o identificador 'customId' no segundo par\xE2metro
conferenceModel.remove(conference, customId).then(() => {});
`),wg()(),jc(991,`p`),lO(992,`Ou na criação de uma requisição HTTP customizada:`),wg(),jc(993,`pre`)(994,`code`,40),lO(995,`// Capturando os eventos enviados ao servidor
this.poSync.getResponses().subscribe(poSyncResponse => {
  
  if (poSyncResponse.customRequestId === customId) {
    // A requisi\xE7\xE3o HTTP com o id-XYZ foi processado no servidor
  }

});

const customId = 'id-XYZ';

// Inserido o identificador 'customId' no segundo par\xE2metro
this.poSync.insertHttpCommand(poHttpRequestData, customId).then(() => {});
`),wg()(),jc(996,`p`),nu(997,`a`,65),wg(),jc(998,`h3`),lO(999,`Alterando as definições dos `),jc(1e3,`em`),lO(1001,`schemas`),wg()(),jc(1002,`p`),lO(1003,`Em algumas situações, pode existir a necessidade de alterar a definição do `),jc(1004,`em`),lO(1005,`schema`),wg(),lO(1006,` que foi inserido como parâmetro dentro do método `),jc(1007,`code`),lO(1008,`PoSyncService.prepare()`),wg(),lO(1009,`. Uma alternativa para fazer esta alteração é:`),wg(),jc(1010,`p`)(1011,`strong`),lO(1012,`1)`),wg(),lO(1013,` Chamar o método `),jc(1014,`a`,29)(1015,`code`),lO(1016,`PoSynceService.destroy()`),wg()(),lO(1017,`:`),wg(),jc(1018,`pre`)(1019,`code`,40),lO(1020,`this.poSync.destroy().then(() => {
  // As defini\xE7\xF5es dos schemas, os itens da fila de eventos e todos os registros foram destru\xEDdos
});
`),wg()(),jc(1021,`blockquote`)(1022,`p`)(1023,`strong`),lO(1024,`Atenção:`),wg(),lO(1025,` ao utilizar o método `),jc(1026,`code`),lO(1027,`PoSynceService.destroy()`),wg(),lO(1028,`, todos os registros armazenados localmente
ser\xE3o removidos inclusive os itens que estiverem na fila de eventos esperando para sincronizar.`),wg()(),jc(1029,`p`)(1030,`strong`),lO(1031,`2)`),wg(),lO(1032,` E após a conclusão da promessa do método `),jc(1033,`code`),lO(1034,`PoSynceService.destroy()`),wg(),lO(1035,` chamar o m\xE9todo
`),jc(1036,`code`),lO(1037,`PoSyncService.prepare()`),wg(),lO(1038,` com a nova definição:`),wg(),jc(1039,`pre`)(1040,`code`,40),lO(1041,`// Schemas atualizados
const schemasUpdated = [...];

this.poSync.destroy()
  .then(() => this.poSync.prepare(schemasUpdated, config))
  .then(() => {
    // Defini\xE7\xF5es dos schemas atualizadas
  });
`),wg()(),jc(1042,`blockquote`)(1043,`p`)(1044,`strong`),lO(1045,`Atenção:`),wg(),lO(1046,` para que não venham ocorrer erros em ações que dependem das definições dos `),jc(1047,`em`),lO(1048,`schemas`),wg(),lO(1049,`, recomenda-se utilizar
o m\xE9todo `),jc(1050,`code`),lO(1051,`PoSyncService.prepare()`),wg(),lO(1052,` logo após o método `),jc(1053,`code`),lO(1054,`PoSynceService.destroy()`),wg(),lO(1055,`.`),wg()(),jc(1056,`p`),nu(1057,`a`,66),wg(),jc(1058,`h2`),lO(1059,`Aplicativo de demonstração do PO Sync`),wg(),jc(1060,`p`),lO(1061,`PO Conference Application é um aplicativo de demonstração do PO Sync baseado no `),jc(1062,`a`,67),lO(1063,`Ionic Conference Application`),wg(),lO(1064,`. Tendo como objetivo, demonstrar as funcionalidades do PO Sync de forma didática.`),wg(),jc(1065,`blockquote`)(1066,`p`),lO(1067,`Acesse o repositório do aplicativo `),jc(1068,`a`,68),lO(1069,`neste link`),wg(),lO(1070,`.`),wg()()())},dependencies:[Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var B=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:414,vars:0,consts:[[`p-title`,`Começando com o PO Sync`,1,`guides`,`app-portal`],[`href`,`https://ionicframework.com/docs`],[`href`,`/guides/sync-fundamentals`],[`href`,`/documentation/po-sync`],[`href`,`https://nodejs.org/en/`],[`href`,`https://cli.angular.io/`],[1,`language-shell`],[`href`,`https://ionicframework.com/docs/cli/`],[1,`language-json`],[1,`language-typescript`],[1,`language-html`],[`href`,`https://github.com/ionic-team/ionicons/issues/1011`],[`src`,`./assets/graphics/po-sync/app-get-started.gif`,`alt`,`Getting Started App`],[`href`,`./guides/sync-fundamentals`],[`href`,`./documentation/po-sync`]],template:function(o,s){o&1&&(jc(0,`po-page-default`,0)(1,`p`),lO(2,`Esse guia servirá para criar e configurar uma aplicação em `),jc(3,`a`,1),lO(4,`Ionic`),wg(),lO(5,` com o uso do PO Sync.`),wg(),jc(6,`p`),lO(7,`Para maiores detalhes sobre os servi\xE7os e m\xE9todos utilizados neste tutorial, consulte a documenta\xE7\xE3o de
`),jc(8,`a`,2),lO(9,`Fundamentos do PO Sync`),wg(),lO(10,` e a documentação de referência de `),jc(11,`a`,3),lO(12,`API do PO Sync`),wg(),lO(13,`.`),wg(),jc(14,`h3`),lO(15,`Pré-requisitos`),wg(),jc(16,`ul`)(17,`li`)(18,`a`,4),lO(19,`Node.js e NPM`),wg()(),jc(20,`li`)(21,`a`,5),lO(22,`Angular CLI`),wg(),lO(23,` (~22.2.1):`),jc(24,`ul`)(25,`li`)(26,`pre`)(27,`code`,6),lO(28,`npm install -g @angular/cli@22
`),wg()()()()(),jc(29,`li`)(30,`a`,7),lO(31,`Ionic`),wg(),lO(32,`:`),jc(33,`ul`)(34,`li`)(35,`pre`)(36,`code`,6),lO(37,`npm install -g @ionic/cli
`),wg()()()()()(),jc(38,`blockquote`)(39,`p`),lO(40,`É importante ter conhecimento prévio em Angular e Ionic para seguir esta documentação e obter melhor entendimento do PO Sync.`),wg()(),jc(41,`h3`),lO(42,`Passo 1 - Criando o aplicativo`),wg(),jc(43,`p`),lO(44,`Para a aplicação de exemplo usaremos o template `),jc(45,`em`),lO(46,`blank`),wg(),lO(47,` do Ionic. Para isso, execute o seguinte comando:`),wg(),jc(48,`pre`)(49,`code`,6),lO(50,`ionic start po-sync-getting-started blank
`),wg()(),jc(51,`p`),lO(52,`Caso surja a questão relacionada ao framework desejado, opte por `),jc(53,`code`),lO(54,`Angular`),wg(),lO(55,`.`),wg(),jc(56,`h3`),lO(57,`Passo 2 - Instalando as dependências`),wg(),jc(58,`p`),lO(59,`É necessário realizar alguns ajustes de compatibilidade do PO UI para o projeto criado.`),wg(),jc(60,`p`),lO(61,`Navegue até a pasta do aplicativo:`),wg(),jc(62,`pre`)(63,`code`,6),lO(64,`cd po-sync-getting-started
`),wg()(),jc(65,`p`),lO(66,`Veja abaixo a lista de dependências e as versões compatíveis, elas devem ser conferidas e se necessário, ajustadas no seu projeto.`),wg(),jc(67,`pre`)(68,`code`,8),lO(69,`  ...
  "dependencies": {
    "@angular/common": "~22.2.1",
    "@angular/compiler": "~22.2.1",
    "@angular/core": "~22.2.1",
    "@angular/forms": "~22.2.1",
    "@angular/platform-browser": "~22.2.1",
    "@angular/router": "~22.2.1",
    "@capacitor/app": "8.0.0",
    "@capacitor/core": "8.0.1",
    "@capacitor/haptics": "8.0.0",
    "@capacitor/keyboard": "8.0.0",
    "@capacitor/splash-screen": "8.0.0",
    "@capacitor/status-bar": "8.0.0",
    "@ionic/angular": "~8.7.16",
    "ionicons": "^7.0.0",
    "rxjs": "~7.8.1",
    "tslib": "^2.6.2",
    "zone.js": "~0.15.0"
  },
  "devDependencies": {
    "@angular-devkit/schematics": "~22.2.1",
    "@angular/build": "~22.2.1",
    "@angular/cli": "~22.2.1",
    "@angular/compiler-cli": "~22.2.1",
    "@angular/language-service": "~22.2.1",
    "@capacitor/cli": "8.0.1",
    "@ionic/angular-toolkit": "^12.0.0",
    ...
    "typescript": "~6.0.3"
  },
  ...
`),wg()(),jc(70,`blockquote`)(71,`p`)(72,`strong`),lO(73,`Nota para projetos com módulos (NgModule)`),wg(),lO(74,`: A CLI do Ionic pode gerar projetos com o arquivo `),jc(75,`code`),lO(76,`src/main.ts`),wg(),lO(77,` utilizando o `),jc(78,`code`),lO(79,`platformBrowserDynamic`),wg(),lO(80,`. Caso isso aconteça, será necessário adicionar o pacote `),jc(81,`code`),lO(82,`@angular/platform-browser-dynamic`),wg(),lO(83,` no arquivo `),jc(84,`code`),lO(85,`package.json`),wg(),lO(86,` (dentro de `),jc(87,`code`),lO(88,`dependencies`),wg(),lO(89,`), juntamente com as outras dependências listadas acima:`),wg(),jc(90,`pre`)(91,`code`,8),lO(92,`"dependencies": {
  ...
  "@angular/platform-browser-dynamic": "~22.2.1",
  ...
}
`),wg()()(),jc(93,`blockquote`)(94,`p`),lO(95,`Após configurar seu arquivo, certifique-se de salvar as alterações realizadas.`),wg()(),jc(96,`p`),lO(97,`Realize a limpeza do arquivo `),jc(98,`code`),lO(99,`package-lock.json`),wg(),lO(100,` e da pasta `),jc(101,`code`),lO(102,`node_modules/`),wg(),lO(103,`, para então executar o seguinte comando para instalar as dependências:`),wg(),jc(104,`pre`)(105,`code`,6),lO(106,`npm install
`),wg()(),jc(107,`h3`),lO(108,`Passo 3 - Instalando o po-sync`),wg(),jc(109,`p`),lO(110,`Para instalar o `),jc(111,`code`),lO(112,`po-sync`),wg(),lO(113,` no aplicativo execute o seguinte comando:`),wg(),jc(114,`pre`)(115,`code`,6),lO(116,`ng add @po-ui/ng-sync@next
`),wg()(),jc(117,`h3`),lO(118,`Passo 4 - Utilizando o po-sync`),wg(),jc(119,`h4`),lO(120,`Passo 4.1 (NgModule) - Importando o `),jc(121,`code`),lO(122,`po-sync`),wg(),lO(123,` e o `),jc(124,`code`),lO(125,`po-storage`),wg()(),jc(126,`p`),lO(127,`No arquivo `),jc(128,`code`),lO(129,`src/app/app.module.ts`),wg(),lO(130,`, adicione a importação dos módulos do `),jc(131,`code`),lO(132,`po-storage`),wg(),lO(133,` e do `),jc(134,`code`),lO(135,`po-sync`),wg(),lO(136,`:`),wg(),jc(137,`pre`)(138,`code`,9),lO(139,`import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { PoStorageModule } from '@po-ui/ng-storage';
import { PoSyncModule } from '@po-ui/ng-sync';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    PoStorageModule.forRoot(),
    PoSyncModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideHttpClient(withInterceptorsFromDi()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
`),wg()(),jc(140,`h4`),lO(141,`Passo 4.1 (Standalone) - Importando o `),jc(142,`code`),lO(143,`po-sync`),wg(),lO(144,` e o `),jc(145,`code`),lO(146,`po-storage`),wg()(),jc(147,`p`),lO(148,`No arquivo `),jc(149,`code`),lO(150,`src/main.ts`),wg(),lO(151,`, avalie se foi feita a importação dos módulos do `),jc(152,`code`),lO(153,`po-storage`),wg(),lO(154,` e do `),jc(155,`code`),lO(156,`po-sync`),wg(),lO(157,`: `),wg(),jc(158,`pre`)(159,`code`,9),lO(160,`import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { PoSyncModule } from '@po-ui/ng-sync';
import { PoStorageModule } from '@po-ui/ng-storage';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(PoSyncModule),
    importProvidersFrom(PoStorageModule.forRoot()),
  ],
});
`),wg()(),jc(161,`h4`),lO(162,`Passo 4.2 - Mapeando seu primeiro `),jc(163,`em`),lO(164,`schema`),wg()(),jc(165,`p`),lO(166,`O `),jc(167,`code`),lO(168,`po-sync`),wg(),lO(169,` utiliza a definição de `),jc(170,`code`),lO(171,`schemas`),wg(),lO(172,`, onde cada `),jc(173,`code`),lO(174,`schema`),wg(),lO(175,` representa um modelo de dados armazenado no dispositivo.`),wg(),jc(176,`p`),lO(177,`Crie o arquivo `),jc(178,`code`),lO(179,`src/app/home/conference-schema.constants.ts`),wg(),lO(180,` e adicione o conteúdo abaixo:`),wg(),jc(181,`pre`)(182,`code`,9),lO(183,`import { PoSyncSchema } from '@po-ui/ng-sync';

export const conferenceSchema: PoSyncSchema = {
  getUrlApi: 'https://po-sample-conference.onrender.com/conferences',
  diffUrlApi: 'https://po-sample-conference.onrender.com/conferences/diff',
  deletedField: 'deleted',
  fields: [ 'id', 'title', 'location', 'description' ],
  idField: 'id',
  name: 'conference',
  pageSize: 1
};
`),wg()(),jc(184,`h3`),lO(185,`Passo 5 - Configurando o método prepare`),wg(),jc(186,`p`),lO(187,`Após ter o seu primeiro `),jc(188,`em`),lO(189,`schema`),wg(),lO(190,` criado, configure o seu aplicativo utilizando o `),jc(191,`code`),lO(192,`po-sync`),wg(),lO(193,` através do método `),jc(194,`code`),lO(195,`PoSyncService.prepare()`),wg(),lO(196,`.`),wg(),jc(197,`h4`),lO(198,`Passo 5.1 (NgModule) - Alterando o `),jc(199,`code`),lO(200,`src/app/app.component.ts`),wg()(),jc(201,`p`),lO(202,`Substitua o conteúdo do arquivo pelo conteúdo abaixo:`),wg(),jc(203,`pre`)(204,`code`,9),lO(205,`import { Component, OnInit, inject } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar } from '@capacitor/status-bar';
import { PoNetworkType, PoSyncConfig, PoSyncService } from '@po-ui/ng-sync';
import { conferenceSchema } from './home/conference-schema.constants';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false
})
export class AppComponent implements OnInit {
  private readonly platform = inject(Platform);
  private readonly poSync = inject(PoSyncService);

  ngOnInit() {
    this.initializeApp();
  }

  async initializeApp() {
    await this.platform.ready();
    if (Capacitor.isNativePlatform()) {
      StatusBar.setOverlaysWebView({ overlay: true });
    }
    await SplashScreen.hide();

    this.initSync();
  }

  initSync() {
    const config: PoSyncConfig = {
      type: PoNetworkType.wifi,
    };
    const schemas = [conferenceSchema];
    this.poSync.prepare(schemas, config).then(() => {
      this.poSync.sync();
    });
  }
}
`),wg()(),jc(206,`p`),lO(207,`Após utilizar o método `),jc(208,`code`),lO(209,`PoSyncService.prepare()`),wg(),lO(210,`, a aplicação estará pronta para sincronizar os dados através do método `),jc(211,`code`),lO(212,`PoSyncService.sync()`),wg(),lO(213,`.`),wg(),jc(214,`h4`),lO(215,`Passo 5.1 (Standalone) - Alterando o `),jc(216,`code`),lO(217,`src/app/app.component.ts`),wg()(),jc(218,`p`),lO(219,`Substitua o conteúdo do arquivo pelo conteúdo abaixo:`),wg(),jc(220,`pre`)(221,`code`,9),lO(222,`import { Component, OnInit, inject } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Capacitor } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar } from '@capacitor/status-bar';
import { PoNetworkType, PoSyncConfig, PoSyncService } from '@po-ui/ng-sync';

import { conferenceSchema } from './home/conference-schema.constants';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  private readonly platform = inject(Platform);
  private readonly poSync = inject(PoSyncService);

  ngOnInit() {
    this.initializeApp();
  }

  async initializeApp() {
    await this.platform.ready();
    if (Capacitor.isNativePlatform()) {
      StatusBar.setOverlaysWebView({ overlay: true });
    }
    await SplashScreen.hide();

    this.initSync();
  }

  initSync() {
    const config: PoSyncConfig = {
      type: PoNetworkType.wifi,
    };

    const schemas = [conferenceSchema];
    
    this.poSync.prepare(schemas, config).then(() => {
      this.poSync.sync();
    });
  }
}
`),wg()(),jc(223,`h3`),lO(224,`Passo 6 (NgModule) - Acessando os dados`),wg(),jc(225,`p`),lO(226,`Caso o projeto tenha sido gerado em uma versão anterior a 9.x do `),jc(227,`code`),lO(228,`@ionic/angular`),wg(),lO(229,`, no arquivo `),jc(230,`code`),lO(231,`po-sync-getting-started/src/app/home/home.module.ts`),wg(),lO(232,`, atualize a importação do `),jc(233,`code`),lO(234,`IonicModule`),wg(),lO(235,` para utilizar o caminho `),jc(236,`code`),lO(237,`import { IonicModule } from '@ionic/angular';`),wg(),lO(238,`:`),wg(),jc(239,`pre`)(240,`code`,9),lO(241,`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
`),wg()(),jc(242,`blockquote`)(243,`p`)(244,`strong`),lO(245,`Nota sobre importação do `),jc(246,`code`),lO(247,`IonicModule`),wg()(),lO(248,`: As versões anteriores à 9.x do `),jc(249,`code`),lO(250,`@ionic/angular`),wg(),lO(251,` não possuem o export `),jc(252,`code`),lO(253,`lazy`),wg(),lO(254,`, devendo ser feito o import de `),jc(255,`code`),lO(256,`@ionic/angular`),wg(),lO(257,`. A partir da versão 9.x, o import de `),jc(258,`code`),lO(259,`@ionic/angular/lazy`),wg(),lO(260,` funciona normalmente (sendo o padrão da CLI do ionic para projetos standalone).`),wg()(),jc(261,`p`),lO(262,`Localize o arquivo `),jc(263,`code`),lO(264,`src/app/home/home.page.ts`),wg(),lO(265,` e faça as seguintes alterações:`),wg(),jc(266,`pre`)(267,`code`,9),lO(268,`import { Component, inject, signal } from '@angular/core';

import { PoSyncService } from '@po-ui/ng-sync';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false
})
export class HomePage {
  private readonly poSync = inject(PoSyncService);

  readonly conference = signal<any>(null);

  constructor() {
    this.poSync.onSync().subscribe(() => this.loadHomePage());
  }

  async loadHomePage() {
    this.conference.set(await this.poSync.getModel('conference').findOne().exec());
  }

  clear() {
    this.conference.set(null);
  }
}
`),wg()(),jc(269,`p`),lO(270,`No construtor, foi realizado uma inscrição no método `),jc(271,`code`),lO(272,`PoSyncService.onSync()`),wg(),lO(273,`, para quando ocorrer uma sincronização, o método `),jc(274,`code`),lO(275,`loadHomePage()`),wg(),lO(276,` busque um registro do `),jc(277,`em`),lO(278,`schema`),wg(),lO(279,` "Conference".`),wg(),jc(280,`h3`),lO(281,`Passo 6 (Standalone) - Acessando os dados`),wg(),jc(282,`p`),lO(283,`Localize o arquivo `),jc(284,`code`),lO(285,`src/app/home/home.page.ts`),wg(),lO(286,` e faça as seguintes alterações:`),wg(),jc(287,`pre`)(288,`code`,9),lO(289,`import { Component, inject, signal } from '@angular/core';

import {
  IonContent,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardTitle
} from '@ionic/angular/standalone';
import { PoSyncService } from '@po-ui/ng-sync';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, IonButton, IonCard, IonCardContent, IonCardTitle],
})
export class HomePage {
  private readonly poSync = inject(PoSyncService);

  readonly conference = signal<any>(null);

  constructor() {
    this.poSync.onSync().subscribe(() => this.loadHomePage());
  }

  async loadHomePage() {
    this.conference.set(await this.poSync.getModel('conference').findOne().exec());
  }

  clear() {
    this.conference.set(null);
  }
}
`),wg()(),jc(290,`h3`),lO(291,`Passo 7 - Exibindo os dados em tela`),wg(),jc(292,`p`),lO(293,`No arquivo `),jc(294,`code`),lO(295,`src/app/home/home.page.html`),wg(),lO(296,` crie a seguinte estrutura:`),wg(),jc(297,`pre`)(298,`code`,10),lO(299,`<ion-content class="ion-padding">
  <ion-button expand="full" (click)="loadHomePage()" (keyup.enter)="loadHomePage()">Buscar informa\xE7\xF5es</ion-button>  
  <ion-button expand="full" color="danger" (click)="clear()" (keyup.enter)="clear()">Apagar informa\xE7\xF5es</ion-button>

  @if (conference(); as conference) {
    <ion-card>
      <ion-card-content>
        <ion-card-title>
          `),jc(300,`span`),y_(),lO(301,`{{`),m_(),wg(),lO(302,` conference.title `),jc(303,`span`),y_(),lO(304,`}}`),m_(),wg(),lO(305,`
        </ion-card-title>
        <p>`),jc(306,`span`),y_(),lO(307,`{{`),m_(),wg(),lO(308,` conference.description `),jc(309,`span`),y_(),lO(310,`}}`),m_(),wg(),lO(311,`</p>
        <p>`),jc(312,`span`),y_(),lO(313,`{{`),m_(),wg(),lO(314,` conference.location `),jc(315,`span`),y_(),lO(316,`}}`),m_(),wg(),lO(317,`</p>
      </ion-card-content>
    </ion-card>
  }
</ion-content>
`),wg()(),jc(318,`h3`),lO(319,`Passo 8 - Executando o aplicativo`),wg(),jc(320,`p`),lO(321,`Execute o comando `),jc(322,`code`),lO(323,`ionic serve`),wg(),lO(324,` e verifique o funcionamento do aplicativo Ionic com `),jc(325,`code`),lO(326,`po-sync`),wg(),lO(327,`.`),wg(),jc(328,`blockquote`)(329,`p`),lO(330,`Pode ocorrer o seguinte erro `),jc(331,`code`),lO(332,`TypeError: Failed to fetch dynamically imported module...`),wg(),lO(333,`, sendo necessário adicionar ao arquivo `),jc(334,`code`),lO(335,`angular.json`),wg(),lO(336,` as seguintes configurações:`),wg(),jc(337,`pre`)(338,`code`,8),lO(339,`{
  "projects": {
    "app": {
      ...
      "architect": {
        ...
        "build": {
          ...
          "options": {
            ...
            "polyfills": ["zone.js"],
          },
        },
        "serve": {
          ...
          "builder": "@angular/build:dev-server",
          "options": {
            ...
            "prebundle": {
              "exclude": ["@ionic/angular", "@ionic/core", "ionicons"]
            }
          }
        },
      }
    }
  },
}
`),wg()()(),jc(340,`blockquote`)(341,`p`),lO(342,`Pode ocorrer o seguinte erro `),jc(343,`code`),lO(344,`TS2320: Interface 'HTMLIonIconElement' cannot simultaneously extend types 'IonIcon' and 'HTMLStencilElement'`),wg(),lO(345,` por conta da versão do TypeScript conforme esta `),jc(346,`a`,11),lO(347,`issue`),wg(),lO(348,`, neste caso adicione no arquivo `),jc(349,`strong`),lO(350,`tsconfig.json`),wg(),jc(351,`code`),lO(352,`"skipLibCheck": true`),wg(),lO(353,`.`),wg()(),jc(354,`blockquote`)(355,`p`),lO(356,`Ao executar um projeto standalone, pode ocorrer o seguinte erro: `),jc(357,`code`),lO(358,`[ERROR] Invalid project type: angular-standalone (project config: ./ionic.config.json).`),wg(),lO(359,`. Para corrigir, edite o arquivo `),jc(360,`code`),lO(361,`ionic.config.json`),wg(),lO(362,` e ajuste a propriedade `),jc(363,`code`),lO(364,`type`),wg(),lO(365,` para o valor `),jc(366,`code`),lO(367,`angular`),wg(),lO(368,`.`),wg()(),jc(369,`h4`),lO(370,`Passo 8.1 - Entendendo o funcionamento do `),jc(371,`code`),lO(372,`po-sync`),wg()(),jc(373,`ul`)(374,`li`)(375,`p`),lO(376,`O aplicativo sincroniza os dados que estão no servidor através do método `),jc(377,`code`),lO(378,`PoSyncService.sync()`),wg(),lO(379,`;`),wg()(),jc(380,`li`)(381,`p`),lO(382,`Durante esta sincronização é efetuada a busca dos registros utilizando a URL de GET, informada no `),jc(383,`code`),lO(384,`conference-schema.constants.ts`),wg(),lO(385,`, e o retorno é salvo no dispositivo do cliente;`),wg()(),jc(386,`li`)(387,`p`),lO(388,`Com os dados salvos no dispositivo, é possível desabilitar o acesso à internet do aplicativo e ainda continuar acessando os dados através do `),jc(389,`code`),lO(390,`po-sync`),wg(),lO(391,`.`),wg()()(),jc(392,`p`),lO(393,`Demonstração do aplicativo acessando os dados `),jc(394,`em`),lO(395,`offline`),wg(),lO(396,`:`),wg(),jc(397,`p`),nu(398,`img`,12),wg(),jc(399,`h3`),lO(400,`Próximos passos`),wg(),jc(401,`ul`)(402,`li`)(403,`p`),lO(404,`Leia sobre os principais `),jc(405,`a`,13),lO(406,`fundamentos do PO Sync`),wg(),lO(407,`.`),wg()(),jc(408,`li`)(409,`p`),lO(410,`Saiba mais sobre a `),jc(411,`a`,14),lO(412,`API do PO Sync`),wg(),lO(413,`.`),wg()()()())},dependencies:[Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var H=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:298,vars:0,consts:[[`p-title`,`Customização de Temas usando o serviço PO-UI`,1,`guides`,`app-portal`],[1,`po-row`,2,`margin`,`20px 0`],[1,`po-lg-2`,`po-md-5`,`po-sm-12`,2,`padding`,`10px`],[2,`text-align`,`center`],[`p-icon`,`an an-palette`,2,`font-size`,`24px`],[`p-icon`,`an an-sun`,2,`font-size`,`24px`],[`p-icon`,`an an-moon`,2,`font-size`,`24px`],[`p-icon`,`an an-wheelchair-motion`,2,`font-size`,`24px`],[`p-icon`,`an an-wrench`,2,`font-size`,`24px`],[`p-icon`,`an an-lightning`,2,`font-size`,`24px`],[`href`,`guides/theme-service#introduction`],[`href`,`guides/theme-service#whyUse`],[`href`,`guides/theme-service#config`],[`href`,`guides/theme-service#configModule`],[`href`,`guides/theme-service#configStyle`],[`href`,`guides/theme-service#configService`],[`href`,`guides/theme-service#howToUse`],[`href`,`guides/theme-service#howToUseBasic`],[`href`,`guides/theme-service#howToUseComplete`],[`href`,`guides/theme-service#applyTheme`],[`href`,`guides/theme-service#applyThemeInitial`],[`href`,`guides/theme-service#applyThemeDynamic`],[`href`,`guides/theme-service#advanced`],[`href`,`guides/theme-service#advancedOverride`],[`href`,`guides/theme-service#advancedReset`],[`href`,`guides/theme-service#advancedPersist`],[`href`,`guides/theme-service#advancedSize`],[`href`,`guides/theme-service#more`],[`href`,`guides/theme-service#sampleStackblitz`],[`id`,`introduction`],[`id`,`whyUse`],[`id`,`config`],[`id`,`configModule`],[1,`language-typescript`],[`id`,`configStyle`],[1,`language-json`],[`id`,`configService`],[`id`,`howToUse`],[`id`,`howToUseBasic`],[`id`,`howToUseComplete`],[`id`,`applyTheme`],[`id`,`applyThemeInitial`],[`id`,`applyThemeDynamic`],[`id`,`advanced`],[`id`,`advancedOverride`],[1,`language-html`],[1,`language-css`],[`id`,`advancedReset`],[`id`,`advancedPersist`],[`id`,`advancedSize`],[`id`,`more`],[`href`,`documentation/po-theme`],[`href`,`https://doc.animaliads.io/`],[`id`,`sampleStackblitz`],[`href`,`https://stackblitz.com/edit/poui-theme-service`,`target`,`_blank`,`rel`,`noreferrer`],[`src`,`https://developer.stackblitz.com/img/open_in_stackblitz.svg`,`alt`,`Open in StackBlitz`]],template:function(o,s){o&1&&(jc(0,`po-page-default`,0)(1,`p`),lO(2,`A partir da versão 19.X.X, o PO-UI oferece um serviço completo para criação e gestão de temas personalizados, permitindo controle total sobre cores, tipografia, acessibilidade e comportamentos específicos de componente.`),wg(),jc(3,`p`),lO(4,`Principais Recursos:`),wg(),jc(5,`div`,1)(6,`div`,2)(7,`div`,3),nu(8,`po-icon`,4),jc(9,`p`),lO(10,`Paletas de cores`),wg()()(),jc(11,`div`,2)(12,`div`,3)(13,`div`),nu(14,`po-icon`,5)(15,`po-icon`,6),wg(),jc(16,`p`),lO(17,`Temas light/dark`),wg()()(),jc(18,`div`,2)(19,`div`,3),nu(20,`po-icon`,7),jc(21,`p`),lO(22,`Acessibilidade (AA/AAA)`),wg()()(),jc(23,`div`,2)(24,`div`,3),nu(25,`po-icon`,8),jc(26,`p`),lO(27,`Sobrescrita de estilos`),wg()()(),jc(28,`div`,2)(29,`div`,3),nu(30,`po-icon`,9),jc(31,`p`),lO(32,`Aplicação dinâmica`),wg()()()(),jc(33,`h3`),lO(34,`Conteúdo`),wg(),jc(35,`ul`)(36,`li`)(37,`a`,10),lO(38,`Introdução à Customização de Temas no PO UI`),wg()(),jc(39,`li`)(40,`a`,11),lO(41,`Por Que Usar o PoThemeService?`),wg()(),jc(42,`li`)(43,`a`,12),lO(44,`Configuração Inicial`),wg(),jc(45,`ul`)(46,`li`)(47,`a`,13),lO(48,`Importação do Módulo`),wg()(),jc(49,`li`)(50,`a`,14),lO(51,`Estilo PO-UI`),wg()(),jc(52,`li`)(53,`a`,15),lO(54,`Injeção do Serviço`),wg()()()(),jc(55,`li`)(56,`a`,16),lO(57,`Como Utilizar o Serviço de Tema`),wg(),jc(58,`ul`)(59,`li`)(60,`a`,17),lO(61,`Estrutura Básica`),wg()(),jc(62,`li`)(63,`a`,18),lO(64,`Exemplo Completo`),wg()()()(),jc(65,`li`)(66,`a`,19),lO(67,`Aplicando o Tema`),wg(),jc(68,`ul`)(69,`li`)(70,`a`,20),lO(71,`Aplicação Inicial`),wg()(),jc(72,`li`)(73,`a`,21),lO(74,`Aplicação Dinâmica`),wg()()()(),jc(75,`li`)(76,`a`,22),lO(77,`Técnicas Avançadas`),wg(),jc(78,`ul`)(79,`li`)(80,`a`,23),lO(81,`Sobrescrita de Variáveis`),wg()(),jc(82,`li`)(83,`a`,24),lO(84,`Reset para Tema Padrão`),wg()(),jc(85,`li`)(86,`a`,25),lO(87,`Persistência de Tema`),wg()(),jc(88,`li`)(89,`a`,26),lO(90,`Gerenciamento de Tamanhos`),wg()()()(),jc(91,`li`)(92,`a`,27),lO(93,`Mais informações`),wg()(),jc(94,`li`)(95,`a`,28),lO(96,`Exemplo Completo no Stackblitz`),wg()()(),jc(97,`p`),nu(98,`a`,29),wg(),jc(99,`h3`),lO(100,`Introdução à Customização de Temas no PO UI`),wg(),jc(101,`p`),lO(102,`O PO UI oferece um sistema robusto e flexível para personalização visual de componentes, permitindo que desenvolvedores e designers criem experiências únicas e alinhadas às necessidades específicas de cada projeto. A customização vai além da simples alteração de cores - é um sistema completo que abrange desde variáveis CSS globais até a criação de temas dinâmicos com suporte a light/dark mode, acessibilidade avançada e controle granular sobre cada componente.`),wg(),jc(103,`p`),nu(104,`a`,30),wg(),jc(105,`h3`),lO(106,`Por Que Usar o PoThemeService?`),wg(),jc(107,`p`),lO(108,`O serviço de temas do PO UI (PoThemeService) é o coração do sistema de customização, oferecendo:`),wg(),jc(109,`details`)(110,`summary`)(111,`strong`),lO(112,`Aplicação Dinâmica de Temas`),wg()(),jc(113,`ul`)(114,`li`),lO(115,`Alterações em tempo real sem recarregar a aplicação`),wg(),jc(116,`li`),lO(117,`Transições suaves entre temas light/dark`),wg()()(),jc(118,`details`)(119,`summary`)(120,`strong`),lO(121,`Gestão Centralizada`),wg()(),jc(122,`ul`)(123,`li`),lO(124,`Criação e armazenamento de múltiplos temas`),wg(),jc(125,`li`),lO(126,`Combinação de temas globais e customizações locais`),wg()()(),jc(127,`details`)(128,`summary`)(129,`strong`),lO(130,`Integração com Estado da Aplicação`),wg()(),jc(131,`ul`)(132,`li`),lO(133,`Persistência de preferências (localStorage)`),wg(),jc(134,`li`),lO(135,`Sincronização com configurações do usuário`),wg()()(),jc(136,`details`)(137,`summary`)(138,`strong`),lO(139,`Controle de Acessibilidade`),wg()(),jc(140,`ul`)(141,`li`),lO(142,`Ativação de níveis AA/AAA conforme requisitos`),wg(),jc(143,`li`),lO(144,`Ajustes automáticos de contrastes`),wg()()(),jc(145,`details`)(146,`summary`)(147,`strong`),lO(148,`Sobrescrita Flexível`),wg()(),jc(149,`ul`)(150,`li`),lO(151,`Hierarquia clara: Tema > Variáveis Globais > Estilos Locais`),wg()()(),jc(152,`p`),nu(153,`a`,31),wg(),jc(154,`h3`),lO(155,`Configuração Inicial`),wg(),jc(156,`p`),nu(157,`a`,32),wg(),jc(158,`h4`),lO(159,`Importação do Módulo`),wg(),jc(160,`pre`)(161,`code`,33),lO(162,`import { PoModule } from '@po-ui/ng-components';

@NgModule({
  imports: [
    PoThemeModule
  ]
})
export class AppModule { }
`),wg()(),jc(163,`p`),nu(164,`a`,34),wg(),jc(165,`h4`),lO(166,`Estilo PO-UI`),wg(),jc(167,`p`),lO(168,`Configurar o arquivo angular.json da seguinte maneira:`),wg(),jc(169,`pre`)(170,`code`,35),lO(171,`"styles": [
  "node_modules/@po-ui/style/css/po-theme-default.min.css", 
  "src/styles.css"
]
`),wg()(),jc(172,`p`),nu(173,`a`,36),wg(),jc(174,`h4`),lO(175,`Injeção do Serviço`),wg(),jc(176,`p`),lO(177,`Injeção do Serviço no construtor do componente:`),wg(),jc(178,`pre`)(179,`code`,33),lO(180,`import { PoThemeService } from '@po-ui/ng-components';

export class AppComponent {
  constructor(private poThemeService: PoThemeService) { }
}
`),wg()(),jc(181,`p`),nu(182,`a`,37),wg(),jc(183,`h3`),lO(184,`Como Utilizar o Serviço de Tema`),wg(),jc(185,`p`),lO(186,`Criando um Tema Personalizado`),wg(),jc(187,`p`),nu(188,`a`,38),wg(),jc(189,`h4`),lO(190,`Estrutura Básica`),wg(),jc(191,`pre`)(192,`code`,33),lO(193,`const meuTema: PoTheme = {
  name: 'meu-tema',
  type: [
    {
      light: { /* Configura\xE7\xF5es tema claro para A11y AAA*/ },
      dark: { /* Configura\xE7\xF5es tema escuro para A11y AAA*/ },
      a11y: PoThemeA11yEnum.AAA
    },
    {
      light: { /* Configura\xE7\xF5es tema claro para A11y AA*/ },
      dark: { /* Configura\xE7\xF5es tema escuro para A11y AA*/ },
      a11y: PoThemeA11yEnum.AA
    }
  ],
  active: { type: PoThemeTypeEnum.light, a11y: PoThemeA11yEnum.AAA }
};
`),wg()(),jc(194,`p`),nu(195,`a`,39),wg(),jc(196,`h4`),lO(197,`Exemplo Completo`),wg(),jc(198,`pre`)(199,`code`,33),lO(200,`import { PoTheme, PoThemeTypeEnum } from '@po-ui/ng-components';

export const corporateTheme: PoTheme = {
  name: 'corporate',
  type: [
    {
      light: {
        color: {
          brand: {
            '01': { 
              base: '#2A5C8D',
              light: '#4D7BA5',
              dark: '#1D4364'
            },
            '02': { base: '#FF6B35' },
            '03': { base: '#00CC66' }
          },
          neutral: { /* Tons de cinza */ },
          feedback: { /* Cores de feedback */ }
        },
        onRoot: {
          '--font-family': "'Inter', sans-serif",
          '--border-radius': '6px',
          '--po-density-header-padding': '2rem'; /* Padding em headers (inclui pages, page slide e modal) */
          '--po-density-content-padding': '1rem'; /* Padding em contents (inclui pages, container, list view, page slide, modal, stepper, disclaimer-group) */
          '--po-density-footer-padding': '1rem'; /* Padding em footers (inclui modal e page slide) */
          '--po-density-gap-header-content': '1rem'; /* Espa\xE7o interno entre o header e o content (inclui pages, tabs e stepper) */
          '--po-density-gap-spacing': '1rem'; /* Espa\xE7o interno entre blocos de conte\xFAdo presentes no header e content (inclui dividers e gaps) */
          '--po-density-floating-padding': '0.5rem'; /* Padding interno de componentes flutuantes como tooltip e popover */ 
        },
        perComponent: {
          'po-button': {
            '--padding': '0.75rem 1.5rem',
            '--font-weight': '600'
          }
        }
      },
      dark: { /* Configura\xE7\xF5es dark mode */ },
      a11y: PoThemeA11yEnum.AAA
    },
    {
      light: { /* Configura\xE7\xF5es tema claro para A11y AA*/ },
      dark: { /* Configura\xE7\xF5es tema escuro para A11y AA*/ },
      a11y: PoThemeA11yEnum.AA
    }
  ],
  active: { type: PoThemeTypeEnum.light, a11y: PoThemeA11yEnum.AAA }
};
`),wg()(),jc(201,`p`),nu(202,`a`,40),wg(),jc(203,`h3`),lO(204,`Aplicando o Tema`),wg(),jc(205,`p`),nu(206,`a`,41),wg(),jc(207,`h4`),lO(208,`Aplicação Inicial`),wg(),jc(209,`pre`)(210,`code`,33),lO(211,`ngOnInit() {
  this.poTheme.setTheme(meuTema, PoThemeTypeEnum.light, PoThemeA11yEnum.AAA);
}
`),wg()(),jc(212,`p`),nu(213,`a`,42),wg(),jc(214,`h4`),lO(215,`Aplicação Dinâmica`),wg(),jc(216,`pre`)(217,`code`,33),lO(218,`// Alternar entre light/dark mode
toggleTheme() {
  const newType = this.currentTheme === PoThemeTypeEnum.light 
    ? PoThemeTypeEnum.dark 
    : PoThemeTypeEnum.light;
  
  this.poTheme.changeCurrentThemeType(newType);
}

// Alterar n\xEDvel de acessibilidade
setAcessibilidade(nivel: PoThemeA11yEnum) {
  this.poTheme.setCurrentThemeA11y(nivel);
}
`),wg()(),jc(219,`p`),nu(220,`a`,43),wg(),jc(221,`h3`),lO(222,`Técnicas Avançadas`),wg(),jc(223,`p`),nu(224,`a`,44),wg(),jc(225,`h4`),lO(226,`Sobrescrita de Variáveis`),wg(),jc(227,`blockquote`)(228,`p`)(229,`strong`),lO(230,`Recomendação:`),wg(),lO(231,` Utilize sempre o serviço `),jc(232,`code`),lO(233,`PoThemeService`),wg(),lO(234,` para manipulação de temas. Reserve esta técnica para casos extremos.`),wg()(),jc(235,`p`)(236,`strong`),lO(237,`Quando usar?`),wg()(),jc(238,`ul`)(239,`li`),lO(240,`Necessidade de ajustes pontuais não cobertos pelos tokens padrão `),wg(),jc(241,`li`),lO(242,`Prototipagem rápida`),wg()(),jc(243,`p`)(244,`strong`),lO(245,`Implementação:`),wg()(),jc(246,`pre`)(247,`code`,45),lO(248,`<html class='override-theme'>
`),wg()(),jc(249,`pre`)(250,`code`,46),lO(251,`/* styles.scss */
:root .override-theme {
  --color-brand-01-base: #FF0000;
  --po-density-header-padding: 2rem; /* Padding interno em headers (inclui pages, dynamics, page slide e modal) */
  --po-density-content-padding: 1rem; /* Padding interno em contents (inclui pages, dynamics, container, list view, page slide, modal, stepper e disclaimer-group) */
  --po-density-footer-padding: 1rem; /* Padding interno em footers (inclui modal e page slide) */
  --po-density-gap-header-content: 1rem; /* Espa\xE7o interno entre o header e o content (inclui pages, tabs e stepper) */
  --po-density-gap-spacing: 1rem; /* Espa\xE7o interno entre blocos de conte\xFAdo presentes no header e content (inclui dividers e gaps) */
  --po-density-floating-padding: 0.5rem; /* Padding interno de componentes flutuantes como tooltip e popover */ 
}
`),wg()(),jc(252,`p`),nu(253,`a`,47),wg(),jc(254,`h4`),lO(255,`Reset para Tema Padrão`),wg(),jc(256,`p`),lO(257,`Restaura todos os valores para o tema base configurado:`),wg(),jc(258,`pre`)(259,`code`,33),lO(260,`// Em qualquer componente/service:
resetarTema() {
  this.poThemeService.resetBaseTheme();
}
`),wg()(),jc(261,`p`),nu(262,`a`,48),wg(),jc(263,`h4`),lO(264,`Persistência de Tema`),wg(),jc(265,`p`),lO(266,`Fluxo recomendado:`),wg(),jc(267,`pre`)(268,`code`,33),lO(269,`ngOnInit() {
  this.initTheme();
}

private initTheme() {
  const savedTheme = this.poThemeService.getThemeActive();
  
  savedTheme 
    ? this.poThemeService.persistThemeActive()
    : this.themeService.setTheme(
        poThemeDefault,
        PoThemeTypeEnum.light,
        PoThemeA11yEnum.
      );
}
`),wg()(),jc(270,`p`),nu(271,`a`,49),wg(),jc(272,`h4`),lO(273,`Gerenciamento de Tamanhos`),wg(),jc(274,`p`),lO(275,`Padrão acessível (AAA):`),wg(),jc(276,`pre`)(277,`code`,33),lO(278,`  // Habilitar tamanhos para small
  this.themeService.setA11yDefaultSizeSmall(true);

  // Verificar configura\xE7\xE3o atual
  const currentSize = this.poThemeService.getDefaultSize();
`),wg()(),jc(279,`p`),nu(280,`a`,50),wg(),jc(281,`h4`),lO(282,`Referências Técnicas`),wg(),jc(283,`ul`)(284,`li`)(285,`a`,51),lO(286,`PoThemeService API`),wg(),lO(287,` - Métodos completos do serviço`),wg(),jc(288,`li`)(289,`a`,52),lO(290,`Animalia DS`),wg(),lO(291,` - Base dos nossos tokens de design`),wg()(),jc(292,`p`),nu(293,`a`,53),wg(),jc(294,`h3`),lO(295,`Exemplo Completo no Stackblitz`),wg(),jc(296,`a`,54),nu(297,`img`,55),wg()())},dependencies:[Tt,Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var V=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:149,vars:0,consts:[[`p-title`,`Criando um tema para o PO UI`,1,`guides`,`app-portal`],[1,`language-json`],[`href`,`https://caniuse.com/#search=CSS%20Variables`]],template:function(o,s){o&1&&(jc(0,`po-page-default`,0)(1,`p`),lO(2,`Para criação de novos temas vamos utilizar a ferramenta `),jc(3,`strong`),lO(4,`Po Theme Cli`),wg()(),jc(5,`h2`),lO(6,`Instalação`),wg(),jc(7,`p`),lO(8,`Faça a instalação global da ferramenta:`),wg(),jc(9,`pre`)(10,`code`),lO(11,`npm install -g @po-ui/theme-cli
`),wg()(),jc(12,`p`),lO(13,`Você pode ver as opções disponíveis através do comando:`),wg(),jc(14,`pre`)(15,`code`),lO(16,`po-theme -help
`),wg()(),jc(17,`h2`),lO(18,`Iniciando um projeto para o novo tema customizado`),wg(),jc(19,`p`),lO(20,`Navegue até o diretório que você deseja e execute o comando:`),wg(),jc(21,`pre`)(22,`code`),lO(23,`po-theme new my-custom-po-theme
`),wg()(),jc(24,`p`),lO(25,`Isso irá gerar um novo diretório com o nome `),jc(26,`code`),lO(27,`my-custom-po-theme`),wg(),lO(28,` e com os arquivos iniciais
para seu tema.`),wg(),jc(29,`p`),lO(30,`Acesse o arquivo `),jc(31,`code`),lO(32,`src/po-theme-custom.css`),wg(),lO(33,` e faça as customizações necessárias.`),wg(),jc(34,`blockquote`)(35,`p`),lO(36,`Para customização das fontes você deve colocar seus arquivos na pasta `),jc(37,`code`),lO(38,`src/assets/fonts`),wg(),lO(39,`.`),wg()(),jc(40,`h2`),lO(41,`Gerando build do tema customizado`),wg(),jc(42,`p`),lO(43,`Para fazer o build e preparar o tema para publica\xE7\xE3o, voc\xEA deve executar o seguinte comando dentro da
pasta do projeto:`),wg(),jc(44,`pre`)(45,`code`),lO(46,`po-theme build
`),wg()(),jc(47,`blockquote`)(48,`p`),lO(49,`Caso queira atribuir um nome ao arquivo a ser gerado, deve-se utilizar o parâmetro `),jc(50,`code`),lO(51,`--name`),wg(),lO(52,` informando o nome desejado.`),wg()(),jc(53,`blockquote`)(54,`p`),lO(55,`Se você estiver customizando as fontes do tema, você deve usar o parâmetro `),jc(56,`code`),lO(57,`--fonts`),wg(),lO(58,`.`),wg()(),jc(59,`p`),lO(60,`Após a execução do comando de `),jc(61,`em`),lO(62,`build`),wg(),lO(63,`, irá ser gerado uma pasta chamada `),jc(64,`code`),lO(65,`dist`),wg(),lO(66,` dentro do diret\xF3rio
do seu projeto.`),wg(),jc(67,`blockquote`)(68,`p`),lO(69,`Você pode modificar seu `),jc(70,`code`),lO(71,`package.json`),wg(),lO(72,` adicionando informa\xE7\xF5es sobre o seu pacote, como name, version,
entre outras informa\xE7\xF5es importantes.`),wg()(),jc(73,`h3`),lO(74,`Publicando o novo tema customizado`),wg(),jc(75,`p`),lO(76,`Acesse a pasta `),jc(77,`code`),lO(78,`dist`),wg(),lO(79,` e execute o seguinte comando:`),wg(),jc(80,`pre`)(81,`code`),lO(82,`npm publish
`),wg()(),jc(83,`h2`),lO(84,`Utilizando o tema customizado`),wg(),jc(85,`p`),lO(86,`Existem 3 formas de você usar o tema customizado após a publicação.`),wg(),jc(87,`p`),lO(88,`Configure o arquivo `),jc(89,`code`),lO(90,`angular.json`),wg(),lO(91,` da aplicação conforme for mais conveniente as suas necessidade.`),wg(),jc(92,`h3`),lO(93,`1 - Usar o arquivo "compilado" com todo o CSS.`),wg(),jc(94,`pre`)(95,`code`,1),lO(96,`"styles": [
  "node_modules/my-custom-po-theme/css/po-theme-custom.min.css",
  "src/styles.css"
],
`),wg()(),jc(97,`p`)(98,`strong`),lO(99,`Prós:`),wg(),lO(100,` Modo mais simples de usar e atende aos browser suportados.`),wg(),jc(101,`p`)(102,`strong`),lO(103,`Contras:`),wg(),lO(104,` O tema customizado deve ser sempre atualizado conforme o tema padr\xE3o for publicado, pois
pode ficar sem os novos estilos publicados.`),wg(),jc(105,`h3`),lO(106,`2 - Usar o arquivo de variáveis do tema customizado + arquivo CSS do tema padrão`),wg(),jc(107,`pre`)(108,`code`,1),lO(109,`"styles": [
  "node_modules/my-custom-po-theme/css/po-theme-custom-variables.min.css",
  "node_modules/@po-ui/style/css/po-theme-core.min.css",
  "src/styles.css"
],
`),wg()(),jc(110,`blockquote`)(111,`p`),lO(112,`Atenção a ordem dos arquivos`),wg()(),jc(113,`p`)(114,`strong`),lO(115,`Prós:`),wg(),lO(116,` Permite que o usu\xE1rio do tema customizado aplique customiza\xE7\xF5es em cima do tema customizado
na aplica\xE7\xE3o final.`),wg(),jc(117,`p`)(118,`strong`),lO(119,`Contras:`),wg(),lO(120,` O tema customizado deve ser sempre atualizado conforme o tema padr\xE3o for publicado e pode
ter incompatibilidade com `),jc(121,`em`),lO(122,`browsers`),wg(),lO(123,` antigos que não dão suporte a variáveis no CSS.`),wg(),jc(124,`h3`),lO(125,`3 - Usar o arquivo de variáveis do tema padrão + variáveis do tema customizado + arquivo CSS do tema padrão`),wg(),jc(126,`pre`)(127,`code`,1),lO(128,`"styles": [
  "node_modules/@po-ui/style/css/po-theme-default-variables.min.css",
  "node_modules/my-custom-po-theme/css/po-theme-custom-variables.min.css",
  "node_modules/@po-ui/style/css/po-theme-core.min.css",
  "src/styles.css"
],
`),wg()(),jc(129,`blockquote`)(130,`p`),lO(131,`Atenção a ordem dos arquivos`),wg()(),jc(132,`p`)(133,`strong`),lO(134,`Prós:`),wg(),lO(135,` N\xE3o corre risco de perder novos estilos, permite que o usu\xE1rio do tema customizado aplique
customiza\xE7\xF5es em cima do tema customizado na aplica\xE7\xE3o final.`),wg(),jc(136,`p`)(137,`strong`),lO(138,`Contras:`),wg(),lO(139,` Pode ter incompatibilidade com `),jc(140,`em`),lO(141,`browsers`),wg(),lO(142,` antigos que não dão suporte a variáveis no CSS.`),wg(),jc(143,`blockquote`)(144,`p`),lO(145,`Atenção: Para saber quais browsers dão suporte a variáveis você pode consultar a ferramenta `),jc(146,`a`,2),lO(147,`Can I use`),wg(),lO(148,`.`),wg()()())},dependencies:[Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var W=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:402,vars:0,consts:[[`p-title`,`Grid System`,1,`guides`,`app-portal`],[`href`,`https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout`],[1,`po-row`,`guides-grid-system-box`],[1,`po-xl-1`,`po-lg-1`,`po-md-1`,`po-sm-1`],[1,`language-html`],[`href`,`/guides/how-install`],[1,`po-xl-6`,`po-lg-6`,`po-md-6`,`po-sm-6`],[1,`po-xl-8`,`po-lg-8`,`po-md-8`,`po-sm-8`],[1,`po-xl-4`,`po-lg-4`,`po-md-4`,`po-sm-4`],[1,`po-md-6`],[1,`po-lg-4`],[1,`po-xl-6`,`po-lg-6`,`po-md-12`,`po-sm-12`],[1,`guides-grid-system-containers`],[1,`po-visible-sm`,`po-sm-12`],[1,`po-visible-md`,`po-md-12`],[1,`po-visible-lg-12`],[1,`po-visible-xl-12`],[1,`po-hidden-sm`,`po-md-12`,`po-lg-12`,`po-xl-12`],[1,`po-hidden-md`,`po-sm-12`,`po-lg-12`,`po-xl-12`],[1,`po-hidden-lg`,`po-sm-12`,`po-md-12`,`po-xl-12`],[1,`po-hidden-xl`,`po-sm-12`,`po-md-12`,`po-lg-12`],[1,`po-xl-4`,`po-lg-4`,`po-md-6`,`po-sm-12`],[1,`po-offset-lg-4`,`po-offset-xl-4`,`po-xl-4`,`po-lg-4`,`po-md-6`,`po-sm-12`],[1,`po-offset-lg-3`,`po-offset-xl-3`,`po-xl-4`,`po-lg-4`,`po-md-6`,`po-sm-12`],[1,`po-xl-3`,`po-lg-3`,`po-md-6`,`po-sm-12`],[1,`language-css`],[1,`language-typescript`],[1,`po-row`],[1,`po-xl-6`,`po-lg-8`,`po-md-10`,`po-sm-12`],[1,`po-table`,`po-text-color-neutral-dark-40`],[1,`po-table-header`],[1,`po-table-header-ellipsis`],[1,`po-table-row`],[1,`po-table-column`]],template:function(o,s){o&1&&(jc(0,`po-page-default`,0)(1,`p`),lO(2,`O `),jc(3,`a`,1),lO(4,`Grid System`),wg(),lO(5,` \xE9 uma estrutura
que permite combinar os elementos em linhas ou em colunas. Esta estrutura costuma seguir um padr\xE3o de configura\xE7\xE3o, determinando:`),wg(),jc(6,`ul`)(7,`li`),lO(8,`Um número máximo de colunas que uma tela pode ser dividida.`),wg(),jc(9,`li`),lO(10,`Padrão na nomenclatura das classes que referem-se as colunas.`),wg(),jc(11,`li`),lO(12,`As colunas podem ser envolvidas por uma classe que delimita e representa a linha.`),wg(),jc(13,`li`),lO(14,`O somat\xF3rio dos n\xFAmeros das colunas de uma linha deve ser igual ao n\xFAmero m\xE1ximo de colunas. Por exemplo, supondo que o
n\xFAmero m\xE1ximo seja igual a 12 colunas, ent\xE3o: po-md-5 + po-md-7 = 12 colunas.`),wg()(),jc(15,`p`),lO(16,`O Grid System do PO, trabalha com a divis\xE3o m\xE1xima da tela em 12 colunas, ou seja, o somat\xF3rio de todas as colunas dentro
de uma linha deve ser igual a 12. No exemplo abaixo, temos 12 colunas de tamanho igual a 1. Cada uma dessas colunas tem o
tamanho igual a 1/12 do seu elemento pai. `),wg(),jc(17,`div`,2),nu(18,`div`,3)(19,`div`,3)(20,`div`,3)(21,`div`,3)(22,`div`,3)(23,`div`,3)(24,`div`,3)(25,`div`,3)(26,`div`,3)(27,`div`,3)(28,`div`,3)(29,`div`,3),wg(),jc(30,`pre`)(31,`code`,4),lO(32,`<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
<div class="po-xl-1 po-lg-1 po-md-1 po-sm-1"></div>
`),wg()(),jc(33,`blockquote`)(34,`p`),lO(35,`Estas classes podem ser usadas instalando o `),jc(36,`code`),lO(37,`@po-ui/style`),wg(),lO(38,` do `),jc(39,`strong`),lO(40,`PO`),wg(),lO(41,`. Veja mais em `),jc(42,`a`,5),lO(43,`Como instalar o PO`),wg(),lO(44,`.`),wg()(),jc(45,`h2`),lO(46,`Nomenclatura das classes e tamanhos das telas`),wg(),jc(47,`p`),lO(48,`A nomenclatura das classes das colunas seguem o padrão: `),jc(49,`code`),lO(50,`po-<tamanho-tela>-<tamanho-coluna>`),wg(),lO(51,`, como por exemplo a classe
`),jc(52,`code`),lO(53,`po-md-6`),wg(),lO(54,` que representa uma coluna com tamanho m\xE9dio e que utiliza 6/12 da largura do elemento pai. Para os intervalos
de tamanhos, tem-se o padr\xE3o:`),wg(),jc(55,`ul`)(56,`li`)(57,`code`),lO(58,`po-sm-*`),wg(),lO(59,` para telas com tamanho máximo de 480px.`),wg(),jc(60,`li`)(61,`code`),lO(62,`po-md-*`),wg(),lO(63,` para telas com tamanho entre 481px e 960px.`),wg(),jc(64,`li`)(65,`code`),lO(66,`po-lg-*`),wg(),lO(67,` para telas com tamanho entre 961px e 1366px.`),wg(),jc(68,`li`)(69,`code`),lO(70,`po-xl-*`),wg(),lO(71,` para telas com tamanho mínimo de 1367px.`),wg()(),jc(72,`p`),lO(73,`Para dividir a tela em duas colunas do mesmo tamanho, basta criar dois elementos com classes de tamanho 6, conforme o pr\xF3ximo
exemplo:`),wg(),jc(74,`div`,2),nu(75,`div`,6)(76,`div`,6),wg(),jc(77,`pre`)(78,`code`,4),lO(79,`<div class="po-row">
  <div class="po-xl-6 po-lg-6 po-md-6 po-sm-6"></div>
  <div class="po-xl-6 po-lg-6 po-md-6 po-sm-6"></div>
</div>
`),wg()(),jc(80,`p`),lO(81,`Outro exemplo para criar duas colunas, sendo uma com tamanho 8 e outra com tamanho 4:`),wg(),jc(82,`div`,2),nu(83,`div`,7)(84,`div`,8),wg(),jc(85,`pre`)(86,`code`,4),lO(87,`<div class="po-xl-8 po-lg-8 po-md-8 po-sm-8"></div>
<div class="po-xl-4 po-lg-4 po-md-4 po-sm-4"></div>
`),wg()(),jc(88,`p`),lO(89,`Ao definir apenas a classe `),jc(90,`code`),lO(91,`po-md-*`),wg(),lO(92,`, os tamanhos de tela menores que po-md assumem o tamanho de coluna igual a 12 e os
maiores o tamanho definido no `),jc(93,`code`),lO(94,`*`),wg(),lO(95,`. Da mesma forma ocorre com a classe `),jc(96,`code`),lO(97,`po-lg-*`),wg(),lO(98,`, os tamanhos menores ficam igual a 12 e
os maiores igual ao tamanho do `),jc(99,`code`),lO(100,`*`),wg(),lO(101,`.`),wg(),jc(102,`blockquote`)(103,`p`),lO(104,`Este comportamento limita-se apenas as classes `),jc(105,`code`),lO(106,`po-md-*`),wg(),lO(107,` e `),jc(108,`code`),lO(109,`po-lg-*`),wg(),lO(110,`.`),wg()(),jc(111,`p`),lO(112,`O exemplo abaixo mostra este comportamento, para isso redimensione a tela do navegador.`),wg(),jc(113,`div`,2)(114,`div`,9),lO(115,`po-md-6`),wg(),jc(116,`div`,9),lO(117,`po-md-6`),wg()(),jc(118,`div`,2)(119,`div`,10),lO(120,`po-lg-4`),wg(),jc(121,`div`,10),lO(122,`po-lg-4`),wg(),jc(123,`div`,10),lO(124,`po-lg-4`),wg()(),jc(125,`pre`)(126,`code`,4),lO(127,`<div class="po-row">
  <div class="po-md-6">po-md-6</div>
  <div class="po-md-6">po-md-6</div>
</div>

<div class="po-row">
  <div class="po-lg-4">po-lg-4</div>
  <div class="po-lg-4">po-lg-4</div>
  <div class="po-lg-4">po-lg-4</div>
</div>
`),wg()(),jc(128,`blockquote`)(129,`p`),lO(130,`A classe para envolver as colunas é chamada de `),jc(131,`code`),lO(132,`po-row`),wg(),lO(133,`, sendo o seu uso opcional. Normalmente sendo utilizada para poder
organizar telas que cont\xE9m diversas linhas. `),wg()(),jc(134,`h2`),lO(135,`Responsividade`),wg(),jc(136,`p`),lO(137,`Para alterar a largura das colunas conforme o tamanho da tela, \xE9 necess\xE1rio determinar que tamanho estar\xE1 a coluna em cada
tamanho de tela. Supondo que se tenha uma tela com duas colunas do mesmo tamanho, conforme o exemplo abaixo:`),wg(),jc(138,`div`,2),nu(139,`div`,6)(140,`div`,6),wg(),jc(141,`pre`)(142,`code`,4),lO(143,`<div class="po-row">
  <div class="po-xl-6 po-lg-6 po-md-6 po-sm-6"></div>
  <div class="po-xl-6 po-lg-6 po-md-6 po-sm-6"></div>
</div>
`),wg()(),jc(144,`p`),lO(145,`No entanto, quando a tela diminui os elementos no interior da coluna podem n\xE3o ficar bem estruturados, ent\xE3o podemos determinar
que quando a tela estiver pequena estas duas colunas ter\xE3o a largura total do seu elemento pai, da seguinte forma:`),wg(),jc(146,`div`,2),nu(147,`div`,11)(148,`div`,11),wg(),jc(149,`pre`)(150,`code`,4),lO(151,`<div class="po-row">
  <div class="po-xl-6 po-lg-6 po-md-12 po-sm-12"></div>
  <div class="po-xl-6 po-lg-6 po-md-12 po-sm-12"></div>
</div>
`),wg()(),jc(152,`p`),lO(153,`Se a tela for redimensionada, as colunas ir\xE3o mudar de tamanho. Desta mesma forma, pode-se determinar e estruturar diversos
tamanhos de colunas para cada tamanho de tela.`),wg(),jc(154,`blockquote`)(155,`p`),lO(156,`Consulte o Style Guide do PO UI, para saber o número máximo de colunas por tamanho de tela.`),wg()(),jc(157,`h2`),lO(158,`Classes visible e hidden`),wg(),jc(159,`p`),lO(160,`Para poder deixar um determinado tamanho visível ou não, existem disponíveis as classes `),jc(161,`code`),lO(162,`po-visible-[tamanho]`),wg(),lO(163,` e `),jc(164,`code`),lO(165,`po-hidden-[tamanho]`),wg(),lO(166,`.`),wg(),jc(167,`h3`),lO(168,`po-visible-[tamanho]`),wg(),jc(169,`p`),lO(170,`Esta classe determina que o elemento será visível na tela quando estiver em determinado tamanho. Ao fazer essa declaração, o elemento assume a propriedade `),jc(171,`code`),lO(172,`display: block`),wg(),lO(173,` e os demais tamanhos ficarão invisíveis `),jc(174,`code`),lO(175,`(display: none)`),wg(),lO(176,`. Existem duas formas de descrever a classe po-visible. Uma forma seria a definição de visibilidade separado da definição do tamanho, como `),jc(177,`code`),lO(178,`po-visible-sm po-sm-6`),wg(),lO(179,`. Outra forma seria a opção de utilizar a definição junto com a declaração do tamanho, como: `),jc(180,`code`),lO(181,`po-visible-sm-6`),wg(),lO(182,`.`),wg(),jc(183,`p`),lO(184,`Abaixo tem-se um exemplo onde só irá aparecer a `),jc(185,`code`),lO(186,`<div>`),wg(),lO(187,` quando atingir o tamanho especificado no po-visible. `),wg(),jc(188,`blockquote`)(189,`p`),lO(190,`Para isso, redimensione a tela do seu navegador.`),wg()(),jc(191,`div`,12)(192,`div`,13),lO(193,`Visível no tamanho 'sm'`),wg(),jc(194,`div`,14),lO(195,`Visível no tamanho 'md'`),wg(),jc(196,`div`,15),lO(197,`Visível no tamanho 'lg'`),wg(),jc(198,`div`,16),lO(199,`Visível no tamanho 'xl'`),wg()(),jc(200,`pre`)(201,`code`,4),lO(202,`<div class="po-visible-sm po-sm-12">Vis\xEDvel no tamanho 'sm'</div>
<div class="po-visible-md po-md-12">Vis\xEDvel no tamanho 'md'</div>
<div class="po-visible-lg-12">Vis\xEDvel no tamanho 'lg'</div>
<div class="po-visible-xl-12">Vis\xEDvel no tamanho 'xl'</div>
`),wg()(),jc(203,`blockquote`)(204,`p`),lO(205,`Atenção: ao utilizar esta classe, o elemento recebe a propriedade `),jc(206,`code`),lO(207,`display`),wg(),lO(208,` com o valor `),jc(209,`code`),lO(210,`block`),wg(),lO(211,`. `),wg()(),jc(212,`h3`),lO(213,`po-hidden-[tamanho]`),wg(),jc(214,`p`),lO(215,`Ao utilizar esta classe, o elemento ficará invisível `),jc(216,`code`),lO(217,`(display: none)`),wg(),lO(218,` ao atingir o tamanho especificado. Por exemplo, as `),jc(219,`code`),lO(220,`<div>`),wg(),lO(221,` abaixo irão desaparecer quando atingir o tamanho especificado no po-hidden. `),wg(),jc(222,`blockquote`)(223,`p`),lO(224,`Para isso, redimensione a tela do seu navegador.`),wg()(),jc(225,`div`,12)(226,`div`,17),lO(227,`Ficará invisível no tamanho 'sm'`),wg(),jc(228,`div`,18),lO(229,`Ficará invisível no tamanho 'md'`),wg(),jc(230,`div`,19),lO(231,`Ficará invisível no tamanho 'lg'`),wg(),jc(232,`div`,20),lO(233,`Ficará invisível no tamanho 'xl'`),wg()(),jc(234,`pre`)(235,`code`,4),lO(236,`<div class="po-hidden-sm po-md-12 po-lg-12 po-xl-12">Ficar\xE1 invis\xEDvel no tamanho 'sm'</div>
<div class="po-hidden-md po-sm-12 po-lg-12 po-xl-12">Ficar\xE1 invis\xEDvel no tamanho 'md'</div>
<div class="po-hidden-lg po-sm-12 po-md-12 po-xl-12">Ficar\xE1 invis\xEDvel no tamanho 'lg'</div>
<div class="po-hidden-xl po-sm-12 po-md-12 po-lg-12">Ficar\xE1 invis\xEDvel no tamanho 'xl'</div>
`),wg()(),jc(237,`h2`),lO(238,`Deslocamento de colunas (po-offset)`),wg(),jc(239,`p`),lO(240,`É possível fazer o deslocamento das colunas para a direita utilizando a classe `),jc(241,`code`),lO(242,`po-offset-[ sm | md | lg | xl ]-[tamanho]`),wg(),lO(243,`.
Quando esta classe \xE9 definida em um elemento, o mesmo receber\xE1 uma margem \xE0 esquerda quando atingir o tamanho de tela indicado,
como o `),jc(244,`code`),lO(245,`sm`),wg(),lO(246,` ou `),jc(247,`code`),lO(248,`md`),wg(),lO(249,`. A quantidade de deslocamento \xE9 definida por n\xFAmero de colunas, assim como no tamanho. Ent\xE3o, para ter
um deslocamento com tamanho 2 no tamanho de tela `),jc(250,`code`),lO(251,`sm`),wg(),lO(252,`, basta escrever: `),jc(253,`code`),lO(254,`po-offset-sm-2`),wg(),lO(255,`.`),wg(),jc(256,`p`),lO(257,`No exemplo abaixo, tem-se duas linhas e ambas utilizam o deslocamento para a direita quando atingirem o tamanho `),jc(258,`code`),lO(259,`lg`),wg(),lO(260,` e `),jc(261,`code`),lO(262,`xl`),wg(),lO(263,`.
A primeira linha tem um deslocamento igual \xE0 4 na segunda coluna. E a segunda linha tem um deslocamento igual \xE0 3 na primeira
coluna.`),wg(),jc(264,`div`,2)(265,`div`,21),lO(266,`Tamanho 4 e sem offset`),wg(),jc(267,`div`,22),lO(268,`Tamanho 4 e offset 4`),wg()(),jc(269,`div`,2)(270,`div`,23),lO(271,`Tamanho 4 e offset 3`),wg(),jc(272,`div`,24),lO(273,`Tamanho 3 e sem offset`),wg()(),jc(274,`pre`)(275,`code`,4),lO(276,`<div class="po-row">
  <div class="po-xl-4 po-lg-4  po-md-6 po-sm-12">Tamanho 4 e sem offset</div>
  <div class="po-offset-lg-4 po-offset-xl-4 po-xl-4 po-lg-4 po-md-6 po-sm-12">Tamanho 4 e offset 4</div>
</div>

<div class="po-row">
  <div class="po-offset-lg-3 po-offset-xl-3 po-xl-4 po-lg-4 po-md-6 po-sm-12">Tamanho 4 e offset 3</div>
  <div class="po-xl-3 po-lg-3 po-md-6 po-sm-12">Tamanho 3 e sem offset</div>
</div>
`),wg()(),jc(277,`blockquote`)(278,`p`),lO(279,`O número de colunas para o deslocamento não necessita ser igual ao tamanho do elemento. Por exemplo: `),jc(280,`code`),lO(281,`po-offset-lg-3 po-lg-4`),wg(),lO(282,`.`),wg()(),jc(283,`blockquote`)(284,`p`),lO(285,`É importante lembrar que o somatório de colunas com po-offset e os tamanhos dos elementos deve ser menor ou igual a 12.`),wg()(),jc(286,`blockquote`)(287,`p`),lO(288,`Os tamanhos de deslocamentos do po-offset variam de 1 a 11, não incluindo o espaçamento igual a 12.`),wg()(),jc(289,`h2`),lO(290,`Customização dos breakpoints`),wg(),jc(291,`p`),lO(292,`Atualmente, os navegadores não interpretam a leitura de variáveis em regras de breakpoint como por exemplo:`),wg(),jc(293,`p`)(294,`code`),lO(295,`@media (min-width: var(--variavel-customizavel))`),wg()(),jc(296,`p`),lO(297,`Porém, disponibilizamos os tokens de breakpoint no formato `),jc(298,`code`),lO(299,`var(--nome-da-variavel)`),wg(),lO(300,` junto as regras de media query permitindo ao desenvolvedor realizar a customização dos breakpoints em tempo de execução através do serviço `),jc(301,`code`),lO(302,`PoMediaQueryService`),wg(),lO(303,`.`),wg(),jc(304,`h3`),lO(305,`Tokens de breakpoint customizáveis:`),wg(),jc(306,`ul`)(307,`li`)(308,`code`),lO(309,`--gridSystemSmMaxWidth`),wg(),lO(310,`: 480px (valor padrão)`),wg(),jc(311,`li`)(312,`code`),lO(313,`--gridSystemMdMinWidth`),wg(),lO(314,`: 481px (valor padrão)`),wg(),jc(315,`li`)(316,`code`),lO(317,`--gridSystemMdMaxWidth`),wg(),lO(318,`: 960px (valor padrão)`),wg(),jc(319,`li`)(320,`code`),lO(321,`--gridSystemLgMinWidth`),wg(),lO(322,`: 961px (valor padrão)`),wg(),jc(323,`li`)(324,`code`),lO(325,`--gridSystemLgMaxWidth`),wg(),lO(326,`: 1366px (valor padrão)`),wg(),jc(327,`li`)(328,`code`),lO(329,`--gridSystemXlMinWidth`),wg(),lO(330,`: 1367px (valor padrão)`),wg(),jc(331,`li`)(332,`code`),lO(333,`--gridSystemPullMaxWidth`),wg(),lO(334,`: 480px (valor padrão)`),wg(),jc(335,`li`)(336,`code`),lO(337,`--gidSystemOffsetMaxWidth`),wg(),lO(338,`: 480px (valor padrão)`),wg()(),jc(339,`p`),lO(340,`Nos arquivos de `),jc(341,`code`),lO(342,`grid-system`),wg(),lO(343,` do `),jc(344,`code`),lO(345,`po-style`),wg(),lO(346,`, a regra de breakpoint está escrita conforme modelo:`),wg(),jc(347,`pre`)(348,`code`,25),lO(349,`@media (min-width: var(--gridSystemMdMinWidth)) and (max-width: var(--gridSystemMdMaxWidth)){...}
`),wg()(),jc(350,`p`),lO(351,`No exemplo acima está demonstrado o formato da regra de breakpoint para `),jc(352,`code`),lO(353,`gridsystem-md`),wg(),lO(354,`.`),wg(),jc(355,`p`),lO(356,`Para o desenvolvedor customizar a regra do grid-system acima, poderá utilizar o serviço PoMediaQueryService na inicialização do seu app, informando a regra e os respectivos valores, conforme o exemplo abaixo:`),wg(),jc(357,`pre`)(358,`code`,26),lO(359,`const tokens: PoMediaQueryTokens =  {
 *     sm: {
 *      gridSystemSmMaxWidth: '1023px'
 *      },
 *     md: {
 *      gridSystemMdMinWidth: '1024px',
 *      gridSystemMdMaxWidth: '1366px'
 *     },
 *     lg: {
 *      gridSystemLgMinWidth: '1367px',
 *      gridSystemLgMaxWidth: '9999px'
 *     }
 *    };

this.styleService.updateTokens(tokensMediaQueries);
`),wg()(),jc(360,`p`),lO(361,`A seguir segue a relação das regras de breakpoints do grid-system caso necessite customizá-las:`),wg(),jc(362,`div`,27)(363,`div`,28)(364,`table`,29)(365,`thead`)(366,`tr`,30)(367,`th`,31),lO(368,`Grid-System`),wg(),jc(369,`th`,31),lO(370,`Regra de breakpoint`),wg()()(),jc(371,`tbody`)(372,`tr`,32)(373,`td`,33),lO(374,`po-grid-system-sm`),wg(),jc(375,`td`,33),lO(376,`(max-width: var(--gridSystemSmMaxWidth))`),wg()(),jc(377,`tr`,32)(378,`td`,33),lO(379,`po-grid-system-md`),wg(),jc(380,`td`,33),lO(381,`(min-width: var(--gridSystemMdMinWidth)) and (max-width: var(--gridSystemMdMaxWidth))`),wg()(),jc(382,`tr`,32)(383,`td`,33),lO(384,`po-grid-system-lg`),wg(),jc(385,`td`,33),lO(386,`(min-width: var(--gridSystemLgMinWidth)) and (max-width: var(--gridSystemLgMaxWidth))`),wg()(),jc(387,`tr`,32)(388,`td`,33),lO(389,`po-grid-system-xl`),wg(),jc(390,`td`,33),lO(391,`(min-width: var(--gridSystemXlMinWidth))`),wg()(),jc(392,`tr`,32)(393,`td`,33),lO(394,`po-grid-system-pull`),wg(),jc(395,`td`,33),lO(396,`(max-width: var(--gridSystemPullMaxWidth))`),wg()(),jc(397,`tr`,32)(398,`td`,33),lO(399,`po-grid-system-offset`),wg(),jc(400,`td`,33),lO(401,`(min-width: var(--gridSystemOffsetMaxWidth)) and (max-width: var(--gridSystemOffsetMaxWidth))`),wg()()()()()()())},dependencies:[Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var Q=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:287,vars:0,consts:[[`p-title`,`Espaçamento`,1,`guides`,`app-portal`],[`href`,`/guides/how-install`],[1,`guides-spacing-sample-container`,`po-mt-1`,`po-mb-1`],[1,`guides-spacing`],[1,`po-m-5`],[1,`po-ml-5`],[1,`po-ml-md-5`],[1,`po-ml-lg-5`],[1,`po-ml-5`,`po-mr-5`],[1,`po-ml-md-5`,`po-ml-xl-0`],[1,`language-html`],[`href`,`https://www.w3schools.com/cssref/pr_margin.asp`]],template:function(o,s){o&1&&(jc(0,`po-page-default`,0)(1,`p`),lO(2,`O PO conta com um set de classes CSS utilitárias para modificação do espaçamento entre elementos HTML.`),wg(),jc(3,`h2`),lO(4,`Como funciona`),wg(),jc(5,`p`),lO(6,`Na composição de telas é eventual o ajuste do espaçamento entre os elementos adjacentes envolvidos. Exemplos disso são vistos quando trabalha-se responsivamente um grupo de elementos, como `),jc(7,`em`),lO(8,`widgets`),wg(),lO(9,` (po-widget) ou linhas de um `),jc(10,`em`),lO(11,`grid system`),wg(),lO(12,` (po-row).`),wg(),jc(13,`p`),lO(14,`Há cinco dimensões disponíveis para definição de `),jc(15,`strong`),lO(16,`margin`),wg(),lO(17,` e também para `),jc(18,`strong`),lO(19,`padding`),wg(),lO(20,`. A unidade de medida utilizada para elas no CSS é a REM. Basicamente, a REM sempre terá o valor do contexto do ROOT, ou seja, o valor de font-size definido em `),jc(21,`em`),lO(22,`body`),wg(),lO(23,`. Considerando que `),jc(24,`code`),lO(25,`font-family: 16px`),wg(),lO(26,` é o padrão no PO, então `),jc(27,`code`),lO(28,`margin: 1rem`),wg(),lO(29,` também equivale a 16px. As variantes das classes de margem e padding vão de 0.5rem (8px) a 2.5rem (40px).`),wg(),jc(30,`h2`),lO(31,`Definições`),wg(),jc(32,`p`),lO(33,`Os nomes das classes usam o formato: `),wg(),jc(34,`ul`)(35,`li`)(36,`code`),lO(37,`po-<propriedade>-<tamanho-espaçamento>`),wg(),lO(38,` para definição em todos os lados do elemento. Por exemplo: `),jc(39,`code`),lO(40,`po-m-1`),wg(),lO(41,`; `),wg(),jc(42,`li`)(43,`code`),lO(44,`po-<propriedade><lado>-<tamanho-espaçamento>`),wg(),lO(45,` para apenas um dos lados. Por exemplo: `),jc(46,`code`),lO(47,`po-ml-1`),wg(),lO(48,`;`),wg(),jc(49,`li`)(50,`code`),lO(51,`po-<propriedade><lado>-<tamanho-tela>-<tamanho-espaçamento>`),wg(),lO(52,` para tamanhos específicos de telas. Por exemplo: `),jc(53,`code`),lO(54,`po-ml-md-1`),wg(),lO(55,`.`),wg()(),jc(56,`p`),lO(57,`As definições de propridades são:`),wg(),jc(58,`ul`)(59,`li`)(60,`code`),lO(61,`m`),wg(),lO(62,` - para classes de ajuste de `),jc(63,`code`),lO(64,`margin`),wg(),lO(65,`;`),wg(),jc(66,`li`)(67,`code`),lO(68,`p`),wg(),lO(69,` - para classes de ajuste de `),jc(70,`code`),lO(71,`padding`),wg(),lO(72,`.`),wg()(),jc(73,`p`),lO(74,`As definições de lados são:`),wg(),jc(75,`ul`)(76,`li`)(77,`code`),lO(78,`t`),wg(),lO(79,` - para ajustes de `),jc(80,`code`),lO(81,`margin-top`),wg(),lO(82,` ou `),jc(83,`code`),lO(84,`padding-top`),wg(),lO(85,`;`),wg(),jc(86,`li`)(87,`code`),lO(88,`r`),wg(),lO(89,` - para ajustes de `),jc(90,`code`),lO(91,`margin-right`),wg(),lO(92,` ou `),jc(93,`code`),lO(94,`padding-right`),wg(),lO(95,`;`),wg(),jc(96,`li`)(97,`code`),lO(98,`b`),wg(),lO(99,` - para ajustes de `),jc(100,`code`),lO(101,`margin-bottom`),wg(),lO(102,` ou `),jc(103,`code`),lO(104,`padding-bottom`),wg(),lO(105,`;`),wg(),jc(106,`li`)(107,`code`),lO(108,`l`),wg(),lO(109,` - para ajustes de `),jc(110,`code`),lO(111,`margin-left`),wg(),lO(112,` ou `),jc(113,`code`),lO(114,`padding-left`),wg(),lO(115,`;`),wg(),jc(116,`li`)(117,`em`),lO(118,`Para todos os lados basta ignorar essa definição`),wg(),lO(119,`;`),wg()(),jc(120,`p`),lO(121,`As definições de tamanho de tela são:`),wg(),jc(122,`ul`)(123,`li`)(124,`code`),lO(125,`sm`),wg(),lO(126,` - para telas com tamanho máximo de `),jc(127,`code`),lO(128,`480px`),wg(),lO(129,`;`),wg(),jc(130,`li`)(131,`code`),lO(132,`md`),wg(),lO(133,` - para telas com tamanho a partir de `),jc(134,`code`),lO(135,`481px`),wg(),lO(136,`;`),wg(),jc(137,`li`)(138,`code`),lO(139,`lg`),wg(),lO(140,` - para telas com tamanho a partir de `),jc(141,`code`),lO(142,`961px`),wg(),lO(143,`;`),wg(),jc(144,`li`)(145,`code`),lO(146,`xl`),wg(),lO(147,` - para telas com tamanho a partir de `),jc(148,`code`),lO(149,`1367px`),wg(),lO(150,`.`),wg()(),jc(151,`p`),lO(152,`As definições de tamanhos disponíveis são:`),wg(),jc(153,`ul`)(154,`li`)(155,`code`),lO(156,`0`),wg(),lO(157,` - `),jc(158,`code`),lO(159,`margin`),wg(),lO(160,` ou `),jc(161,`code`),lO(162,`padding`),wg(),lO(163,` com valor igual a `),jc(164,`code`),lO(165,`0`),wg(),lO(166,`; `),wg(),jc(167,`li`)(168,`code`),lO(169,`1`),wg(),lO(170,` - `),jc(171,`code`),lO(172,`margin`),wg(),lO(173,` ou `),jc(174,`code`),lO(175,`padding`),wg(),lO(176,` com valor igual a `),jc(177,`code`),lO(178,`8px`),wg(),lO(179,`; `),wg(),jc(180,`li`)(181,`code`),lO(182,`2`),wg(),lO(183,` - `),jc(184,`code`),lO(185,`margin`),wg(),lO(186,` ou `),jc(187,`code`),lO(188,`padding`),wg(),lO(189,` com valor igual a `),jc(190,`code`),lO(191,`16px`),wg(),lO(192,`; `),wg(),jc(193,`li`)(194,`code`),lO(195,`3`),wg(),lO(196,` - `),jc(197,`code`),lO(198,`margin`),wg(),lO(199,` ou `),jc(200,`code`),lO(201,`padding`),wg(),lO(202,` com valor igual a `),jc(203,`code`),lO(204,`24px`),wg(),lO(205,`; `),wg(),jc(206,`li`)(207,`code`),lO(208,`4`),wg(),lO(209,` - `),jc(210,`code`),lO(211,`margin`),wg(),lO(212,` ou `),jc(213,`code`),lO(214,`padding`),wg(),lO(215,` com valor igual a `),jc(216,`code`),lO(217,`32px`),wg(),lO(218,`; `),wg(),jc(219,`li`)(220,`code`),lO(221,`5`),wg(),lO(222,` - `),jc(223,`code`),lO(224,`margin`),wg(),lO(225,` ou `),jc(226,`code`),lO(227,`padding`),wg(),lO(228,` com valor igual a `),jc(229,`code`),lO(230,`40px`),wg(),lO(231,`;`),wg()(),jc(232,`blockquote`)(233,`p`),lO(234,`Estas classes podem ser usadas instalando o `),jc(235,`code`),lO(236,`@po-ui/style`),wg(),lO(237,` do `),jc(238,`strong`),lO(239,`PO`),wg(),lO(240,`. Veja mais em `),jc(241,`a`,1),lO(242,`Como instalar o PO`),wg(),lO(243,`.`),wg()(),jc(244,`h2`),lO(245,`Exemplos`),wg(),jc(246,`p`),lO(247,`Alguns exemplos de aplicação das classes:`),wg(),jc(248,`div`,2)(249,`div`,3)(250,`div`,4),lO(251,`po-m-5`),wg()()(),jc(252,`div`,2)(253,`div`,3)(254,`div`,5),lO(255,`po-ml-5`),wg()()(),jc(256,`div`,2)(257,`div`,3)(258,`div`,6),lO(259,`po-ml-md-5`),wg()()(),jc(260,`div`,2)(261,`div`,3)(262,`div`,7),lO(263,`po-ml-lg-5`),wg()()(),jc(264,`div`,2)(265,`div`,3)(266,`div`,8),lO(267,`po-ml-5 po-mr-5`),wg()()(),jc(268,`div`,2)(269,`div`,3)(270,`div`,9),lO(271,`po-ml-md-5 po-ml-xl-0`),wg()()(),jc(272,`pre`)(273,`code`,10),lO(274,`<div class="po-m-5">po-m-5</div>
<div class="po-ml-5">po-ml-5</div>
<div class="po-ml-md-5">po-ml-md-5</div>
<div class="po-ml-lg-5">po-ml-lg-5</div>
<div class="po-ml-5 po-mr-5">po-ml-5 po-mr-5</div>
<div class="po-ml-md-5 po-ml-xl-0">po-ml-md-5 po-ml-xl-0</div>
`),wg()(),jc(275,`blockquote`)(276,`p`),lO(277,`Quando duas margens verticais entrarem em contato entre si, ocorrerá um `),jc(278,`a`,11),lO(279,`colapso de margem`),wg(),lO(280,`. Se uma margem for maior que a outra, esta sobrescreverá o valor da menor, sobrando apenas a definição de margem com maior valor.`),wg()(),jc(281,`blockquote`)(282,`p`),lO(283,`É considerada uma boa prática de CSS trabalhar, sempre que possível, apenas com definições de `),jc(284,`code`),lO(285,`margin-bottom`),wg(),lO(286,` para espaçamento entre elementos adjacentes.`),wg()()())},dependencies:[Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var X=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:122,vars:0,consts:[[`p-title`,`Personalizando o Tema Padrão com Tokens CSS`,1,`guides`,`app-portal`],[`href`,`guides/theme-service`],[1,`language-json`],[1,`language-css`],[`src`,`./assets/graphics/theme/button-green-and-black.png`,`alt`,`Componente Button com a cor preta.`],[`src`,`./assets/graphics/theme/components-custom-colors.png`,`alt`,`Exemplo dos componentes com cores customizadas. Scroll da página com track amarelo e thumb laranja.`],[`href`,`https://doc.animaliads.io/docs/components/button/#live-demo`],[`href`,`https://caniuse.com/#search=CSS%20Variables`]],template:function(o,s){o&1&&(jc(0,`po-page-default`,0)(1,`blockquote`)(2,`p`)(3,`strong`),lO(4,`⚠️ Atualização Importante para Versões 18+`),wg(),nu(5,`br`),lO(6,`A partir da versão 18.X.X do PO-UI, recomendamos `),jc(7,`strong`),lO(8,`fortemente`),wg(),lO(9,` a utilização do `),jc(10,`code`),lO(11,`PoThemeService`),wg(),lO(12,` para todas as customizações de temas, incluindo:`),wg(),jc(13,`ul`)(14,`li`),lO(15,`Tokens globais (cores, tipografia, espaçamentos) `),wg(),jc(16,`li`),lO(17,`Estilos específicos por componente `),wg(),jc(18,`li`),lO(19,`Gerenciamento de dark/light mode `),wg(),jc(20,`li`),lO(21,`Controle de acessibilidade (AA/AAA)`),wg()(),jc(22,`p`)(23,`strong`),lO(24,`Benefícios:`),wg(),nu(25,`br`),lO(26,`✅ Maior consistência visual`),nu(27,`br`),lO(28,`✅ Manutenção simplificada`),nu(29,`br`),lO(30,`✅ Transições suaves entre temas`),nu(31,`br`),lO(32,`✅ Suporte integrado a acessibilidade `),wg(),jc(33,`p`),lO(34,`📚 `),jc(35,`a`,1),lO(36,`Guia completo de Customização de Temas`),wg()()(),jc(37,`p`),lO(38,`A partir da versão 1.9.0, o `),jc(39,`strong`),lO(40,`PO UI`),wg(),lO(41,` oferece a flexibilidade de personalização do tema padrão. Você pode ajustar várias propriedades como as cores, fonte, tamanho da fonte entre outros. Para isso, basta modificar os valores das variáveis utilizadas no CSS do tema padrão.`),wg(),jc(42,`h3`),lO(43,`Como o tema do PO UI funciona`),wg(),jc(44,`p`),lO(45,`Se voc\xEA j\xE1 tem uma aplica\xE7\xE3o que est\xE1 usando o tema padr\xE3o do PO UI, voc\xEA deve ter seu arquivo
`),jc(46,`code`),lO(47,`angular.json`),wg(),lO(48,` configurado da seguinte maneira.`),wg(),jc(49,`pre`)(50,`code`,2),lO(51,`"styles": [
  // Arquivo com o tema do PO UI com as vari\xE1veis "compiladas"
  "node_modules/@po-ui/style/css/po-theme-default.min.css", 
  "src/styles.css"
],
`),wg()(),jc(52,`p`),lO(53,`Essa configuração usa o arquivo CSS minificado e `),jc(54,`em`),lO(55,`"compilado"`),wg(),lO(56,`, ou seja, as vari\xE1veis do CSS foram
substitu\xEDdas pelos valores hexadecimais correspondentes das cores usadas (entre outras coisas). Na pr\xE1tica e resumidamente falando, o que aconteceu com esse arquivo foi o seguinte:`),wg(),jc(57,`pre`)(58,`code`,3),lO(59,`/* Isso "compilando" ... */
po-button {
  --color: var(--color-action-default);
  --background-color: var(--color-transparent);
}

/* ... vira isso. */
.po-button{background-color: transparent;color: #753399;}
`),wg()(),jc(60,`h3`),lO(61,`Configurando sua aplicação para permitir personalização abrangente`),wg(),jc(62,`p`),lO(63,`Para possibilitar uma personalização abrangente, o `),jc(64,`em`),lO(65,`package`),wg(),jc(66,`code`),lO(67,`@po-ui/style`),wg(),lO(68,` agora disponibiliza os arquivos contendo as variáveis CSS, bem como o arquivo de estilo sem a `),jc(69,`em`),lO(70,`"compilação"`),wg(),lO(71,` das variáveis. Isso permite não apenas a modificação das cores, mas também de outras propriedades via tokens. Para realizar essa configuração em seu projeto, é necessário carregar esses novos arquivos, substituindo o arquivo anterior que restringia a modificação abrangente das cores.`),wg(),jc(72,`pre`)(73,`code`,2),lO(74,`"styles": [
  // Arquivo de vari\xE1veis (tema padr\xE3o)
  "node_modules/@po-ui/style/css/po-theme-default-variables.min.css",
  // Arquivo com os estilos sem as vari\xE1veis "compiladas"
  "node_modules/@po-ui/style/css/po-theme-core.min.css",
  "src/styles.css"
],
`),wg()(),jc(75,`blockquote`)(76,`p`),lO(77,`Só isso não vai fazer diferença no seu projeto, as cores padrões ainda serão mantidas.`),wg()(),jc(78,`h3`),lO(79,`Customizando Estilos no Seu Projeto`),wg(),jc(80,`p`),lO(81,`Para personalizar os estilos no seu projeto Angular, voc\xEA pode criar um novo arquivo CSS ou editar um existente e
adicionar as seguintes linhas de c\xF3digo:`),wg(),jc(82,`pre`)(83,`code`,3),lO(84,`po-button {
    --color: rgb(43, 215, 60);
    --border-radius: 12px;
    --font-size: 16px;
    --background-color: black;
}
`),wg()(),jc(85,`p`),lO(86,`Só com isso já conseguimos dar uma nova cara para os nossos botões.`),wg(),jc(87,`p`),nu(88,`img`,4),wg(),jc(89,`p`),lO(90,`Caso queira personalizar cores de forma global, é possível sobrescrever algumas variáveis globais:`),wg(),jc(91,`pre`)(92,`code`,3),lO(93,`:root {
  --color-track: #ffecb3;
  --color-thumb: orange;
}
`),wg()(),jc(94,`p`),nu(95,`img`,5),wg(),jc(96,`p`),lO(97,`Com essas personalizações, você terá controle não apenas sobre as cores, mas também sobre outros aspectos visuais dos componentes e templates em sua aplicação que utilizam o PO UI.`),wg(),jc(98,`blockquote`)(99,`p`),lO(100,`Para descobrir quais variáveis você pode personalizar, consulte o arquivo `),jc(101,`code`),lO(102,`po-theme-default-variables.css`),wg(),lO(103,` na pasta `),jc(104,`code`),lO(105,`node_modules/@po-ui/style/css`),wg(),lO(106,`, l\xE1, voc\xEA
encontrar\xE1 uma lista completa de todas as vari\xE1veis utilizadas pelo tema padr\xE3o. Voc\xEA tamb\xE9m pode consultar a documenta\xE7\xE3o de cada componente no pr\xF3prio portal.`),wg()(),jc(107,`blockquote`)(108,`p`),lO(109,`Para customização do componente `),jc(110,`code`),lO(111,`po-button`),wg(),lO(112,` verificar `),jc(113,`a`,6),lO(114,`variáveis customizaveis`),wg(),lO(115,` na aba de customização.`),wg()(),jc(116,`blockquote`)(117,`p`),lO(118,`Atenção: Para saber quais browsers dão suporte a variáveis você pode consultar a ferramenta `),jc(119,`a`,7),lO(120,`Can I use`),wg(),lO(121,`.`),wg()()())},dependencies:[Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var J=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:378,vars:0,consts:[[`p-title`,`Tipografia`,1,`guides`,`app-portal`],[1,`language-html`],[1,`po-font-text`],[1,`po-row`],[1,`po-md-8`,`po-lg-6`,`po-offset-md-2`,`po-offset-lg-3`,`po-offset-xl-3`,`po-shadow-card`],[1,`po-font-display`],[1,`po-sm-6`],[1,`po-font-text-large-bold`],[1,`po-font-large`],[1,`po-md-12`,`po-text-center`],[1,`po-font-title`],[1,`po-font-subtitle`],[1,`po-font-text-large`],[1,`po-font-text-bold`],[1,`po-font-text-uppercase`],[1,`po-font-text-small`],[1,`po-font-text-small-bold`],[1,`po-font-text-smaller`]],template:function(o,s){o&1&&(jc(0,`po-page-default`,0)(1,`p`),lO(2,`O PO disponibiliza as fontes usadas pelos componentes, essas fontes foram disponibilizadas no Style Guide pela equipe de UX.`),wg(),jc(3,`h3`),lO(4,`Como Usar?`),wg(),jc(5,`pre`)(6,`code`,1),lO(7,`<font class="po-font-text">Texto usado pelo PO</font>
`),wg()(),jc(8,`p`)(9,`font`,2),lO(10,`Texto usado pelo PO`),wg()(),jc(11,`h3`),lO(12,`Tipos Disponíveis`),wg(),jc(13,`div`,3)(14,`div`,4)(15,`div`,3)(16,`font`,5),lO(17,`Display`),wg()(),nu(18,`hr`),jc(19,`div`,3)(20,`div`,6)(21,`font`,7),lO(22,`Typeface:`),wg()(),jc(23,`div`,6)(24,`font`,8),lO(25,`NunitoSans-ExtraLight`),wg()()(),jc(26,`div`,3)(27,`div`,6)(28,`font`,7),lO(29,`Font-size:`),wg()(),jc(30,`div`,6)(31,`font`,8),lO(32,`50`),wg()()(),jc(33,`div`,3)(34,`div`,6)(35,`font`,7),lO(36,`Line-height:`),wg()(),jc(37,`div`,6)(38,`font`,8),lO(39,`64`),wg()()(),jc(40,`div`,3)(41,`div`,9)(42,`font`,7),lO(43,`.po-font-display`),wg()()()()(),nu(44,`br`),jc(45,`div`,3)(46,`div`,4)(47,`div`,3)(48,`font`,10),lO(49,`Title`),wg()(),nu(50,`hr`),jc(51,`div`,3)(52,`div`,6)(53,`font`,7),lO(54,`Typeface:`),wg()(),jc(55,`div`,6)(56,`font`,8),lO(57,`NunitoSans-ExtraLight`),wg()()(),jc(58,`div`,3)(59,`div`,6)(60,`font`,7),lO(61,`Font-size:`),wg()(),jc(62,`div`,6)(63,`font`,8),lO(64,`34`),wg()()(),jc(65,`div`,3)(66,`div`,6)(67,`font`,7),lO(68,`Line-height:`),wg()(),jc(69,`div`,6)(70,`font`,8),lO(71,`48`),wg()()(),jc(72,`div`,3)(73,`div`,9)(74,`font`,7),lO(75,`.po-font-title`),wg()()()()(),nu(76,`br`),jc(77,`div`,3)(78,`div`,4)(79,`div`,3)(80,`font`,11),lO(81,`Subtitle`),wg()(),nu(82,`hr`),jc(83,`div`,3)(84,`div`,6)(85,`font`,7),lO(86,`Typeface:`),wg()(),jc(87,`div`,6)(88,`font`,8),lO(89,`NunitoSans`),wg()()(),jc(90,`div`,3)(91,`div`,6)(92,`font`,7),lO(93,`Font-size:`),wg()(),jc(94,`div`,6)(95,`font`,8),lO(96,`24`),wg()()(),jc(97,`div`,3)(98,`div`,6)(99,`font`,7),lO(100,`Line-height:`),wg()(),jc(101,`div`,6)(102,`font`,8),lO(103,`32`),wg()()(),jc(104,`div`,3)(105,`div`,9)(106,`font`,7),lO(107,`.po-font-subtitle`),wg()()()()(),nu(108,`br`),jc(109,`div`,3)(110,`div`,4)(111,`div`,3)(112,`font`,12),lO(113,`Text Large`),wg()(),nu(114,`hr`),jc(115,`div`,3)(116,`div`,6)(117,`font`,7),lO(118,`Typeface:`),wg()(),jc(119,`div`,6)(120,`font`,8),lO(121,`NunitoSans`),wg()()(),jc(122,`div`,3)(123,`div`,6)(124,`font`,7),lO(125,`Font-size:`),wg()(),jc(126,`div`,6)(127,`font`,8),lO(128,`16`),wg()()(),jc(129,`div`,3)(130,`div`,6)(131,`font`,7),lO(132,`Line-height:`),wg()(),jc(133,`div`,6)(134,`font`,8),lO(135,`24`),wg()()(),jc(136,`div`,3)(137,`div`,9)(138,`font`,7),lO(139,`.po-font-text-large`),wg()()()()(),nu(140,`br`),jc(141,`div`,3)(142,`div`,4)(143,`div`,3)(144,`font`,7),lO(145,`Text Large Bold`),wg()(),nu(146,`hr`),jc(147,`div`,3)(148,`div`,6)(149,`font`,7),lO(150,`Typeface:`),wg()(),jc(151,`div`,6)(152,`font`,8),lO(153,`NunitoSans-Bold`),wg()()(),jc(154,`div`,3)(155,`div`,6)(156,`font`,7),lO(157,`Font-size:`),wg()(),jc(158,`div`,6)(159,`font`,8),lO(160,`16`),wg()()(),jc(161,`div`,3)(162,`div`,6)(163,`font`,7),lO(164,`Line-height:`),wg()(),jc(165,`div`,6)(166,`font`,8),lO(167,`24`),wg()()(),jc(168,`div`,3)(169,`div`,9)(170,`font`,7),lO(171,`.po-font-text-large-bold`),wg()()()()(),nu(172,`br`),jc(173,`div`,3)(174,`div`,4)(175,`div`,3)(176,`font`,2),lO(177,`Text`),wg()(),nu(178,`hr`),jc(179,`div`,3)(180,`div`,6)(181,`font`,7),lO(182,`Typeface:`),wg()(),jc(183,`div`,6)(184,`font`,8),lO(185,`NunitoSans`),wg()()(),jc(186,`div`,3)(187,`div`,6)(188,`font`,7),lO(189,`Font-size:`),wg()(),jc(190,`div`,6)(191,`font`,8),lO(192,`14`),wg()()(),jc(193,`div`,3)(194,`div`,6)(195,`font`,7),lO(196,`Line-height:`),wg()(),jc(197,`div`,6)(198,`font`,8),lO(199,`24`),wg()()(),jc(200,`div`,3)(201,`div`,9)(202,`font`,7),lO(203,`.po-font-text`),wg()()()()(),nu(204,`br`),jc(205,`div`,3)(206,`div`,4)(207,`div`,3)(208,`font`,13),lO(209,`Text Bold`),wg()(),nu(210,`hr`),jc(211,`div`,3)(212,`div`,6)(213,`font`,7),lO(214,`Typeface:`),wg()(),jc(215,`div`,6)(216,`font`,8),lO(217,`NunitoSans-Bold`),wg()()(),jc(218,`div`,3)(219,`div`,6)(220,`font`,7),lO(221,`Font-size:`),wg()(),jc(222,`div`,6)(223,`font`,8),lO(224,`14`),wg()()(),jc(225,`div`,3)(226,`div`,6)(227,`font`,7),lO(228,`Line-height:`),wg()(),jc(229,`div`,6)(230,`font`,8),lO(231,`24`),wg()()(),jc(232,`div`,3)(233,`div`,9)(234,`font`,7),lO(235,`.po-font-text-bold`),wg()()()()(),nu(236,`br`),jc(237,`div`,3)(238,`div`,4)(239,`div`,3)(240,`font`,14),lO(241,`Text Uppercase`),wg()(),nu(242,`hr`),jc(243,`div`,3)(244,`div`,6)(245,`font`,7),lO(246,`Typeface:`),wg()(),jc(247,`div`,6)(248,`font`,8),lO(249,`NunitoSans-Bold`),wg()()(),jc(250,`div`,3)(251,`div`,6)(252,`font`,7),lO(253,`Font-size:`),wg()(),jc(254,`div`,6)(255,`font`,8),lO(256,`14`),wg()()(),jc(257,`div`,3)(258,`div`,6)(259,`font`,7),lO(260,`Line-height:`),wg()(),jc(261,`div`,6)(262,`font`,8),lO(263,`24`),wg()()(),jc(264,`div`,3)(265,`div`,6)(266,`font`,7),lO(267,`Transform:`),wg()(),jc(268,`div`,6)(269,`font`,8),lO(270,`Uppercase`),wg()()(),jc(271,`div`,3)(272,`div`,9)(273,`font`,7),lO(274,`.po-font-text-uppercase`),wg()()()()(),nu(275,`br`),jc(276,`div`,3)(277,`div`,4)(278,`div`,3)(279,`font`,15),lO(280,`Text Small`),wg()(),nu(281,`hr`),jc(282,`div`,3)(283,`div`,6)(284,`font`,7),lO(285,`Typeface:`),wg()(),jc(286,`div`,6)(287,`font`,8),lO(288,`NunitoSans`),wg()()(),jc(289,`div`,3)(290,`div`,6)(291,`font`,7),lO(292,`Font-size:`),wg()(),jc(293,`div`,6)(294,`font`,8),lO(295,`12`),wg()()(),jc(296,`div`,3)(297,`div`,6)(298,`font`,7),lO(299,`Line-height:`),wg()(),jc(300,`div`,6)(301,`font`,8),lO(302,`16`),wg()()(),jc(303,`div`,3)(304,`div`,9)(305,`font`,7),lO(306,`.po-font-text-small`),wg()()()()(),nu(307,`br`),jc(308,`div`,3)(309,`div`,4)(310,`div`,3)(311,`font`,16),lO(312,`Text Small Bold`),wg()(),nu(313,`hr`),jc(314,`div`,3)(315,`div`,6)(316,`font`,7),lO(317,`Typeface:`),wg()(),jc(318,`div`,6)(319,`font`,8),lO(320,`NunitoSans-Bold`),wg()()(),jc(321,`div`,3)(322,`div`,6)(323,`font`,7),lO(324,`Font-size:`),wg()(),jc(325,`div`,6)(326,`font`,8),lO(327,`12`),wg()()(),jc(328,`div`,3)(329,`div`,6)(330,`font`,7),lO(331,`Line-height:`),wg()(),jc(332,`div`,6)(333,`font`,8),lO(334,`16`),wg()()(),jc(335,`div`,3)(336,`div`,9)(337,`font`,7),lO(338,`.po-font-text-small-bold`),wg()()()()(),nu(339,`br`),jc(340,`div`,3)(341,`div`,4)(342,`div`,3)(343,`font`,17),lO(344,`Text Smaller`),wg()(),nu(345,`hr`),jc(346,`div`,3)(347,`div`,6)(348,`font`,7),lO(349,`Typeface:`),wg()(),jc(350,`div`,6)(351,`font`,8),lO(352,`NunitoSans-Bold`),wg()()(),jc(353,`div`,3)(354,`div`,6)(355,`font`,7),lO(356,`Font-size:`),wg()(),jc(357,`div`,6)(358,`font`,8),lO(359,`10`),wg()()(),jc(360,`div`,3)(361,`div`,6)(362,`font`,7),lO(363,`Line-height:`),wg()(),jc(364,`div`,6)(365,`font`,8),lO(366,`16`),wg()()(),jc(367,`div`,3)(368,`div`,6)(369,`font`,7),lO(370,`Transform:`),wg()(),jc(371,`div`,6)(372,`font`,8),lO(373,`Uppercase`),wg()()(),jc(374,`div`,3)(375,`div`,9)(376,`font`,7),lO(377,`.po-font-text-smaller`),wg()()()()()())},dependencies:[Tze],styles:[`ul[_ngcontent-%COMP%]{margin-left:24px}li[_ngcontent-%COMP%]{margin-left:16px}`]})}return a})();var Y=[{path:``,component:F,children:[{path:`api`,component:T},{path:`browser-support`,component:O},{path:`deprecations`,component:D},{path:`development-flow`,component:M},{path:`getting-started`,component:I},{path:`guide-charts`,component:j},{path:`migration-poui-v2`,component:k},{path:`migration-poui`,component:w},{path:`migration-thf-to-po-ui`,component:G},{path:`press-kit`,component:U},{path:`release-schedule`,component:R},{path:`releases`,component:N},{path:`schematics`,component:L},{path:`sync-fundamentals`,component:_},{path:`sync-get-started`,component:B},{path:`theme-service`,component:H},{path:`create-theme-customization`,component:V},{path:`grid-system`,component:W},{path:`spacing`,component:Q},{path:`theme-customization`,component:X},{path:`typography`,component:J},{path:``,pathMatch:`full`,redirectTo:`getting-started`}]}];var K=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[I1.forChild(Y),I1]})}return a})();var Nt=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[M$1,K]})}return a})();export{Nt as GuideModule};