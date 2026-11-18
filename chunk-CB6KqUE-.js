import{p as M$1}from"./main-FL7X32TP.js";import{Ar as I,Lr as Kg,Oi as VO,Pn as tre,Pr as Jn,Pt as are,Sa as j_,Ti as U_,Ui as YO,Va as p,W as Mze,Zi as ar,ar as An,cr as B_,gi as Rb,io as vu,ki as V_,li as Qc,na as de,oo as wg,ro as vt,sa as ek,ua as ge,vi as Sk,wr as GV,xr as FO}from"./chunk-DtUf9FxZ.js";var M=(()=>{class o{router=p(An);openDoc(a){this.router.navigate([`/documentation`,a],{queryParams:{view:`doc`}})}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-i18n-doc`]],standalone:!1,decls:898,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[`href`,`documentation/po-i18n#poI18nConfig`],[`id`,`i18n-config`],[`href`,`http://10.0.0.1:3000/api/translations/crm`],[`href`,`http://10.0.0.1:3000/api/translations/general`],[`href`,`http://10.0.0.1:3000/api/translations/crm?language=pt-br`],[`href`,`http://10.0.0.1:3000/api/translations/crm?language=pt-br&literals=add,remove,text`],[`href`,`documentation/po-i18n#setLanguage`],[1,`docs-api-h3`],[`id`,`class-po-i18n-service`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-i18n#i18n-config`],[`href`,`https://angular.io/guide/observables`],[1,`language-typescript`],[1,`docs-api-h5`,`docs-api-method-header`],[`id`,`method-getLanguage`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-property-description`],[`id`,`get-language`],[`href`,`documentation/po-i18n#poI18nConfigDefault`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`],[`id`,`method-getShortLanguage`,1,`docs-api-method-table`],[`href`,`/documentation/po-i18n#get-language`],[`id`,`method-setLanguage`,1,`docs-api-method-table`],[`id`,`setLanguage`],[1,`docs-api-properties-name-cell`],[`id`,`interface-po-i18n-config-context`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`poI18nConfigContext`],[`id`,`interface-po-i18n-config-default`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`poI18nConfigDefault`],[`id`,`interface-po-i18n-config-default-cache`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`interface-po-i18n-config-default-context`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`interface-po-i18n-config-default-language`,1,`docs-api-properties-row`],[`id`,`interface-po-i18n-config`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`poI18nConfig`],[`id`,`interface-po-i18n-config-contexts`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoI18nConfigContext`],[`id`,`interface-po-i18n-config-default`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoI18nConfigDefault`],[`id`,`interface-po-i18n-literals`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-i18n-literals-context`,1,`docs-api-properties-row`],[`id`,`interface-po-i18n-literals-language`,1,`docs-api-properties-row`],[`id`,`interface-po-i18n-literals-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`id`,`interface-po-language`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`poI18nLanguage`],[`id`,`interface-po-language-description`,1,`docs-api-properties-row`],[`id`,`interface-po-language-language`,1,`docs-api-properties-row`],[`href`,`https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes`],[`id`,`interface-po-number-separator`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`PoNumberSeparator`],[`id`,`interface-po-number-separator-language`,1,`docs-api-properties-row`],[`id`,`interface-po-number-separator-separator`,1,`docs-api-properties-row`],[`id`,`interface-po-date-separator`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`PoDateSeparator`],[`id`,`interface-po-date-separator-locale`,1,`docs-api-properties-row`],[`id`,`interface-po-date-separator-separator`,1,`docs-api-properties-row`]],template:function(r,l){r&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoI18nModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do serviço `),Qc(7,`code`),Sk(8,`PoI18nService`),Kg(),Sk(9,` para controle de idiomas com PO.`),Kg(),Qc(10,`p`),Sk(11,`Para utilização do serviço de idiomas `),Qc(12,`code`),Sk(13,`PoI18nService`),Kg(),Sk(14,`, deve-se importar este m\xF3dulo mesmo j\xE1 havendo importado
o m\xF3dulo `),Qc(15,`code`),Sk(16,`PoModule`),Kg(),Sk(17,`. Na importação deve ser invocado o método `),Qc(18,`code`),Sk(19,`config`),Kg(),Sk(20,`, informando um objeto que deve implementar
a interface `),Qc(21,`a`,3)(22,`code`),Sk(23,`PoI18nConfig`),Kg()(),Sk(24,` para configuração.`),Kg(),Qc(25,`p`),vu(26,`a`,4),Qc(27,`strong`),Sk(28,`Exemplo de configuração do módulo do i18n:`),Kg()(),Qc(29,`pre`)(30,`code`),Sk(31,`import { PoI18nConfig } from '@po-ui/ng-components';

import { generalEn } from './i18n/general-en';
import { generalPt } from './i18n/general-pt';

const i18nConfig: PoI18nConfig = {
  default: {
    language: 'pt-BR',
    context: 'general',
    cache: true
  },
  contexts: {
    general: {
      'pt-BR': generalPt,
      'en-US': generalEn
    },
    hcm: {
      url: 'http://10.1.1.1/api/translations/hcm/'
    }
  }
};

@NgModule({
  declarations: [],
  imports: [
    PoModule,
    PoI18nModule.config(i18nConfig)
  ],
  bootstrap: [AppComponent]
})
`),Kg()(),Qc(32,`p`),Sk(33,`Para cada contexto \xE9 poss\xEDvel definir a origem das literais, que podem ser de um servi\xE7o REST ou
de um objeto. Exemplo:`),Kg(),Qc(34,`p`),Sk(35,`Arquivo general-pt.ts`),Kg(),Qc(36,`pre`)(37,`code`),Sk(38,`export const generalPt = {
 add: 'Adicionar',
 greeting: 'Prazer, {0} {1}',
 people: '{0} Pessoas,
 remove: 'Remover'
}
`),Kg()(),Qc(39,`p`),Sk(40,`Arquivo general-en.ts`),Kg(),Qc(41,`pre`)(42,`code`),Sk(43,`export const generalEn = {
 add: 'Add',
 greeting: 'Nice to meet you, {0} {1}',
 people: '{0} People,
 remove: 'Remove'
}
`),Kg()(),Qc(44,`p`)(45,`strong`),Sk(46,`Exemplo de configuração de contextos usando constantes externas:`),Kg()(),Qc(47,`pre`)(48,`code`),Sk(49,`import { PoI18nConfig } from '@po-ui/ng-components';

import { generalEn } from './i18n/general-en';
import { generalPt } from './i18n/general-pt';

const i18nConfig: PoI18nConfig = {
  contexts: {
    general: {
      'pt-BR': generalPt, // constantes em arquivos separados
      'en-US': generalEn // constantes em arquivos separados
    },
    crm: {
      url: 'http://10.0.0.1:3000/api/translations/crm'
    }
  },
  default: {}
}
`),Kg()(),Qc(50,`p`)(51,`strong`),Sk(52,`Exemplo de configuração de um contexto utilizando serviço:`),Kg()(),Qc(53,`p`),Sk(54,`Ao optar por utilizar um servi\xE7o para configura\xE7\xE3o de contexto, dever\xE1 ser definida a URL
espec\xEDfica do contexto, como nos exemplos abaixo:`),Kg(),Qc(55,`ul`)(56,`li`)(57,`a`,5),Sk(58,`http://10.0.0.1:3000/api/translations/crm`),Kg()(),Qc(59,`li`)(60,`a`,6),Sk(61,`http://10.0.0.1:3000/api/translations/general`),Kg()()(),Qc(62,`p`),Sk(63,`Os idiomas e literais serão automaticamente buscados com parâmetros na própria URL:`),Kg(),Qc(64,`ul`)(65,`li`)(66,`strong`),Sk(67,`language`),Kg(),Sk(68,`: o idioma ser\xE1 sempre passado por par\xE2metro e \xE9 recomendado utilizar uma das linguagens
suportadas pelo PO (`),Qc(69,`code`),Sk(70,`pt-br`),Kg(),Sk(71,`, `),Qc(72,`code`),Sk(73,`en-us`),Kg(),Sk(74,`, `),Qc(75,`code`),Sk(76,`es-es`),Kg(),Sk(77,` ou `),Qc(78,`code`),Sk(79,`ru`),Kg(),Sk(80,`).`),Kg(),Qc(81,`li`)(82,`strong`),Sk(83,`literals`),Kg(),Sk(84,`: as literais ser\xE3o separadas por v\xEDrgula. Caso esse par\xE2metro n\xE3o seja informado, o
servi\xE7o deve retornar todas as literais do idioma.`),Kg()(),Qc(85,`p`),Sk(86,`Exemplos de requisição:`),Kg(),Qc(87,`ul`)(88,`li`)(89,`a`,7),Sk(90,`http://10.0.0.1:3000/api/translations/crm?language=pt-br`),Kg()(),Qc(91,`li`)(92,`a`,8),Sk(93,`http://10.0.0.1:3000/api/translations/crm?language=pt-br&literals=add,remove,text`),Kg()()(),Qc(94,`blockquote`)(95,`p`),Sk(96,`Sempre que o idioma solicitado não for encontrado, será buscado por `),Qc(97,`code`),Sk(98,`pt-br`),Kg(),Sk(99,`.`),Kg()(),Qc(100,`p`),Sk(101,`Além dos contextos, é possível definir as configurações `),Qc(102,`em`),Sk(103,`default`),Kg(),Sk(104,` do sistema na configura\xE7\xE3o do
m\xF3dulo utilizando a interface `),Qc(105,`a`,3)(106,`code`),Sk(107,`PoI18nConfig`),Kg()(),Sk(108,`:`),Kg(),Qc(109,`p`)(110,`strong`),Sk(111,`Exemplo de padrões definidos:`),Kg()(),Qc(112,`pre`)(113,`code`),Sk(114,`const i18nConfig: PoI18nConfig = {
  contexts: {
    general: { }
  },
  default: {
   language: 'pt-BR',
   context: 'general',
   cache: true
  }
}
`),Kg()(),Qc(115,`p`)(116,`strong`),Sk(117,`Importante:`),Kg()(),Qc(118,`p`),Sk(119,`Recomenda-se que as definições `),Qc(120,`em`),Sk(121,`default`),Kg(),Sk(122,` sejam realizadas apenas uma vez na aplica\xE7\xE3o,
preferencialmente no m\xF3dulo `),Qc(123,`code`),Sk(124,`AppModule`),Kg(),Sk(125,`.`),Kg(),Qc(126,`p`)(127,`strong`),Sk(128,`i18n com `),Qc(129,`em`),Sk(130,`Lazy loading`),Kg()()(),Qc(131,`p`),Sk(132,`Para aplicações que utilizem a abordagem de módulos com carregamento `),Qc(133,`em`),Sk(134,`lazy loading`),Kg(),Sk(135,`, caso seja
definida outra configura\xE7\xE3o do `),Qc(136,`code`),Sk(137,`PoI18nModule`),Kg(),Sk(138,`, deve-se atentar os seguintes detalhes:`),Kg(),Qc(139,`ul`)(140,`li`),Sk(141,`Não defina outra `),Qc(142,`em`),Sk(143,`default language`),Kg(),Sk(144,` para este m\xF3dulo. Caso for definida, ser\xE1 sobreposta para
toda a aplica\xE7\xE3o;`),Kg(),Qc(145,`li`),Sk(146,`Caso precise de módulos carregados via `),Qc(147,`em`),Sk(148,`lazy loading`),Kg(),Sk(149,` com linguagens diferentes, utilize o
m\xE9todo `),Qc(150,`a`,9)(151,`code`),Sk(152,`setLanguage()`),Kg()(),Sk(153,` disponibilizado pelo `),Qc(154,`code`),Sk(155,`PoI18nService`),Kg(),Sk(156,`
para definir a linguagem da aplica\xE7\xE3o e dos m\xF3dulos com as linguagens diferentes.`),Kg()()(),Qc(157,`h3`,10),Sk(158,`Services`),Kg(),Qc(159,`h4`,11)(160,`code`,12),Sk(161,`PoI18nService`),Kg()(),Qc(162,`div`,2)(163,`p`),Sk(164,`O serviço `),Qc(165,`code`),Sk(166,`PoI18nService`),Kg(),Sk(167,` possibilita utilizar múltiplos idiomas e contextos na aplicação.`),Kg(),Qc(168,`blockquote`)(169,`p`),Sk(170,`Antes da utiliza\xE7\xE3o do servi\xE7o, \xE9 necess\xE1rio realizar a
`),Qc(171,`a`,13),Sk(172,`importação e configuração do módulo `),Qc(173,`code`),Sk(174,`PoI18nModule`),Kg()(),Sk(175,`.`),Kg()(),Qc(176,`p`)(177,`strong`),Sk(178,`Utilização do serviço `),Qc(179,`code`),Sk(180,`PoI18nService`),Kg(),Sk(181,`:`),Kg()(),Qc(182,`p`),Sk(183,`Para utilizar o servi\xE7o basta import\xE1-lo nos componentes que necessitarem de literais e fazer a inje\xE7\xE3o de
depend\xEAncia no construtor:`),Kg(),Qc(184,`pre`)(185,`code`),Sk(186,`import { PoI18nService } from '@po-ui/ng-components';
...
constructor(private poI18nService: PoI18nService) { }
...
`),Kg()(),Qc(187,`p`),Sk(188,`Por fim realizar a busca pelas literais, inscrevendo-se no `),Qc(189,`a`,14),Sk(190,`Observable`),Kg(),Sk(191,` pelo
m\xE9todo `),Qc(192,`code`),Sk(193,`getLiterals()`),Kg(),Sk(194,`.`),Kg(),Qc(195,`blockquote`)(196,`p`),Sk(197,`O método `),Qc(198,`code`),Sk(199,`getLiterals()`),Kg(),Sk(200,` pode receber um objeto do tipo da interface `),Qc(201,`code`),Sk(202,`PoI18nLiterals`),Kg(),Sk(203,` como par\xE2metro,
por\xE9m, nenhuma das propriedades s\xE3o obrigat\xF3rias. Caso nenhum par\xE2metro seja passado, ser\xE3o buscadas
todas as literais do contexto definido com padr\xE3o, no idioma definido como padr\xE3o.`),Kg()(),Qc(204,`ul`)(205,`li`)(206,`h2`),Sk(207,`Alterações a partir da versão 19`),Kg()()(),Qc(208,`p`),Sk(209,`A partir da vers\xE3o 19, para evitar conflitos com bibliotecas de terceiros que tamb\xE9m utilizam i18n,
\xE9 necess\xE1rio passar explicitamente o contexto ao chamar `),Qc(210,`code`),Sk(211,`getLiterals`),Kg(),Sk(212,`, garantindo a correta exibi\xE7\xE3o das literais.
Caso `),Qc(213,`code`),Sk(214,`getLiterals`),Kg(),Sk(215,` seja chamado sem parâmetros, o retorno pode vir das configurações da biblioteca de terceiros.`),Kg(),Qc(216,`p`)(217,`strong`),Sk(218,`Exemplo de chamada com contexto explícito:`),Kg()(),Qc(219,`pre`)(220,`code`,15),Sk(221,`poI18nService.getLiterals({ context: 'general' }).subscribe(literals => console.log(literals));
`),Kg()(),Qc(222,`p`)(223,`strong`),Sk(224,`Cenário de Contextos Iguais:`),Kg(),Sk(225,`
Caso tanto a aplica\xE7\xE3o quanto uma biblioteca de terceiros utilizem o mesmo nome de contexto,
o PO UI far\xE1 um merge das literais, priorizando os valores definidos na aplica\xE7\xE3o cliente.`),Kg(),Qc(226,`p`)(227,`strong`),Sk(228,`Recomendações:`),Kg()(),Qc(229,`ul`)(230,`li`),Sk(231,`Sempre informar o contexto ao chamar `),Qc(232,`code`),Sk(233,`getLiterals`),Kg(),Sk(234,` para evitar conflitos de literais.`),Kg(),Qc(235,`li`),Sk(236,`Caso a aplicação utilize `),Qc(237,`code`),Sk(238,`lazy loading`),Kg(),Sk(239,`, utilizar `),Qc(240,`code`),Sk(241,`setLanguage()`),Kg(),Sk(242,` para garantir a correta configuração de idioma.`),Kg()(),Qc(243,`p`),Sk(244,`Exemplos de requisição:`),Kg(),Qc(245,`pre`)(246,`code`),Sk(247,`literals = {};
literalsEn = {};
literalsCrm = {};

constructor(private poI18nService: PoI18nService) {
  poI18nService.getLiterals()
    .subscribe((literals) => {
      this.literals = literals;
    });

  poI18nService.getLiterals({context: 'crm', literals: ['add', 'remove']})
    .subscribe((literals) => {
      this.literalsCrm = literals;
    });

  poI18nService.getLiterals({language: 'en-us'})
    .subscribe((literals) => {
      this.literalsEn = literals;
    });
}
`),Kg()(),Qc(248,`p`),Sk(249,`Para apresentar as literais capturadas acima no HTML do componente, deve-se utilizar o
seguinte c\xF3digo:`),Kg(),Qc(250,`pre`),j_(),Sk(251,`{{ literals?.add }}
{{ literals?.remove }}
`),V_(),Kg(),Qc(252,`p`),Sk(253,`Caso as literais contenham variáveis que precisem ser substituídas, pode-se utilizar o `),Qc(254,`em`),Sk(255,`pipe`),Kg(),Qc(256,`code`),Sk(257,`poI18n`),Kg(),Sk(258,`.
\xC9 poss\xEDvel informar propriedades do componente como `),Qc(259,`code`),Sk(260,`name`),Kg(),Sk(261,` e `),Qc(262,`code`),Sk(263,`nickname`),Kg(),Sk(264,` ou
informar o valor diretamente com "" ou n\xFAmero, conforme o exemplo abaixo:`),Kg(),Qc(265,`pre`),j_(),Sk(266,`{{ literals?.people | poI18n:[120] }}
{{ literals?.greeting | poI18n:[name, nickname] }}
{{ literals?.greeting | poI18n:["Brad", "Green"] }}
`),V_(),Kg(),Qc(267,`blockquote`)(268,`p`),Sk(269,`É importante o uso do operador `),Qc(270,`code`),Sk(271,`?`),Kg(),Sk(272,` (Elvis) para evitar erros enquanto as literais não forem carregadas.`),Kg()(),Qc(273,`h3`),Sk(274,`Teste unitário`),Kg(),Qc(275,`p`),Sk(276,`Abaixo segue um exemplo de `),Qc(277,`em`),Sk(278,`setup`),Kg(),Sk(279,` inicial de teste unitário do `),Qc(280,`em`),Sk(281,`AppComponent`),Kg(),Sk(282,` que utiliza o `),Qc(283,`code`),Sk(284,`PoI18nService`),Kg(),Sk(285,`:`),Kg(),Qc(286,`blockquote`)(287,`p`),Sk(288,`Atenção: não declarar o `),Qc(289,`code`),Sk(290,`PoI18nService`),Kg(),Sk(291,` no providers do TestBed pois a biblioteca realiza a inje\xE7\xE3o de depend\xEAncia de forma din\xE2mica.
Se o servi\xE7o for declarado o teste n\xE3o far\xE1 a inje\xE7\xE3o e o teste apresentar\xE1 erros.`),Kg()(),Qc(292,`pre`)(293,`code`),Sk(294,`import { async, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PoI18nModule } from '@po-ui/ng-components';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  const anotherPT = {
    text: 'texto',
    add: 'adicionar',
    remove: 'remover'
  };

  const generalPT = {
    text: 'texto',
    add: 'adicionar',
    remove: 'remover'
  };

  const config = {
    default: {
      language: 'pt-BR',
      context: 'general',
      cache: false
    },
    contexts: {
      general: {
        'pt-br': generalPT
      },
      another: {
        'pt-br': anotherPT
      }
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HttpClientTestingModule,
        PoI18nModule.config(config)
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  }));

});
`),Kg()()(),Qc(295,`h3`,16),Sk(296,`Métodos`),Kg(),Qc(297,`table`,17)(298,`tr`,18)(299,`th`,19)(300,`div`,20)(301,`h4`)(302,`span`,21),Sk(303,` getLanguage `),Kg()()()()(),Qc(304,`tr`,22)(305,`td`,22)(306,`p`),vu(307,`a`,23),Sk(308,`
M\xE9todo que retorna o idioma padr\xE3o ativo.`),Kg(),Qc(309,`p`),Sk(310,`A busca deste idioma pelo método será feita na seguinte ordem:`),Kg(),Qc(311,`p`),Sk(312,` 1 - o idioma que foi armazenado no `),Qc(313,`em`),Sk(314,`localStorage`),Kg(),Sk(315,`, através do método `),Qc(316,`a`,9)(317,`code`),Sk(318,`setLanguage()`),Kg()(),Sk(319,`.`),Kg(),Qc(320,`p`),Sk(321,` 2 - o valor inserido no módulo do i18n através do parâmetro `),Qc(322,`code`),Sk(323,`config`),Kg(),Sk(324,`, sendo o idioma inserido na propriedade
`),Qc(325,`code`),Sk(326,`language`),Kg(),Sk(327,` da interface `),Qc(328,`a`,24)(329,`code`),Sk(330,`PoI18nConfigDefault`),Kg()(),Sk(331,`.`),Kg(),Qc(332,`p`),Sk(333,` 3 - o idioma do navegador utilizado.`),Kg(),Qc(334,`blockquote`)(335,`p`),Sk(336,`Caso o idioma do navegador não seja suportado pelo PO (`),Qc(337,`code`),Sk(338,`pt`),Kg(),Sk(339,`, `),Qc(340,`code`),Sk(341,`en`),Kg(),Sk(342,`, `),Qc(343,`code`),Sk(344,`es`),Kg(),Sk(345,` ou `),Qc(346,`code`),Sk(347,`ru`),Kg(),Sk(348,`), será retornado valor `),Qc(349,`code`),Sk(350,`pt`),Kg(),Sk(351,`.`),Kg()()()()(),Qc(352,`h5`)(353,`b`),Sk(354,`Retorno`),Kg()(),Qc(355,`table`,25)(356,`tr`,26)(357,`th`,27),Sk(358,`Tipo`),Kg(),Qc(359,`th`,27),Sk(360,`Descrição`),Kg()(),Qc(361,`tr`,18)(362,`td`,28)(363,`code`,29),Sk(364,`string`),Kg()(),Qc(365,`td`,22)(366,`p`),Sk(367,`sigla do idioma padrão.`),Kg()()()(),vu(368,`br`),Qc(369,`table`,30)(370,`tr`,18)(371,`th`,19)(372,`div`,20)(373,`h4`)(374,`span`,21),Sk(375,` getShortLanguage `),Kg()()()()(),Qc(376,`tr`,22)(377,`td`,22)(378,`p`),Sk(379,`M\xE9todo que retorna o idioma padr\xE3o ativo, com somente a abrevia\xE7\xE3o do idioma (duas primeiras letras).
Por exemplo: "pt" ou "es".`),Kg(),Qc(380,`p`),Sk(381,`A busca deste idioma é baseada no método `),Qc(382,`a`,31)(383,`strong`),Sk(384,`getLanguage()`),Kg()(),Sk(385,`.`),Kg()()()(),Qc(386,`h5`)(387,`b`),Sk(388,`Retorno`),Kg()(),Qc(389,`table`,25)(390,`tr`,26)(391,`th`,27),Sk(392,`Tipo`),Kg(),Qc(393,`th`,27),Sk(394,`Descrição`),Kg()(),Qc(395,`tr`,18)(396,`td`,28)(397,`code`,29),Sk(398,`string`),Kg()(),Qc(399,`td`,22)(400,`p`),Sk(401,`sigla do idioma padrão.`),Kg()()()(),vu(402,`br`),Qc(403,`table`,32)(404,`tr`,18)(405,`th`,19)(406,`div`,20)(407,`h4`)(408,`span`,21),Sk(409,` setLanguage `),Kg()()()()(),Qc(410,`tr`,22)(411,`td`,22)(412,`p`),vu(413,`a`,33),Sk(414,`
M\xE9todo para alterar o idioma padr\xE3o do m\xF3dulo do i18n.`),Kg(),Qc(415,`p`),Sk(416,`Ao utilizar este m\xE9todo, o idioma ficar\xE1 gravado no armazenamento local do navegador, que ser\xE1 utilizado pelo
servi\xE7o do `),Qc(417,`code`),Sk(418,`i18n`),Kg(),Sk(419,` para buscar as literais no idioma padrão.`),Kg()()()(),Qc(420,`h5`)(421,`b`),Sk(422,`Parâmetros`),Kg()(),Qc(423,`table`,25)(424,`tr`,26)(425,`th`,27),Sk(426,`Nome`),Kg(),Qc(427,`th`,27),Sk(428,`Tipo`),Kg(),Qc(429,`th`,27),Sk(430,`Descrição`),Kg()(),Qc(431,`tr`,18)(432,`td`,34),Sk(433,` language`),Kg(),Qc(434,`td`,28)(435,`code`,29),Sk(436,` string `),Kg()(),Qc(437,`td`,22)(438,`p`),Sk(439,`Sigla do idioma.`),Kg(),Qc(440,`p`),Sk(441,`Esta sigla deve ser composta por duas letras representando o idioma,
podendo ser adicionado outras duas letras representando o pa\xEDs, por exemplo: `),Qc(442,`code`),Sk(443,`pt`),Kg(),Sk(444,`, `),Qc(445,`code`),Sk(446,`pt-BR`),Kg(),Sk(447,`, `),Qc(448,`code`),Sk(449,`pt-br`),Kg(),Sk(450,`, `),Qc(451,`code`),Sk(452,`en`),Kg(),Sk(453,` ou `),Qc(454,`code`),Sk(455,`en-US`),Kg(),Sk(456,`.`),Kg(),Qc(457,`blockquote`)(458,`p`),Sk(459,`Caso seja informado um valor diferente deste padrão, o mesmo será ignorado.`),Kg()()()(),Qc(460,`tr`,18)(461,`td`,34),Sk(462,` reload`),Kg(),Qc(463,`td`,28)(464,`code`,29),Sk(465,` boolean `),Kg()(),Qc(466,`td`,22)(467,`p`),Sk(468,`Indica se a página atual poderá ser recarregada após a alteração do idioma.`),Kg(),Qc(469,`p`),Sk(470,`Este recurso pode ser útil para os usuários que utilizam o método `),Qc(471,`code`),Sk(472,`getLiterals()`),Kg(),Sk(473,` do servi\xE7o do i18n para poder
buscar novamente as literais no novo idioma configurado.`),Kg()()()(),vu(474,`br`),Qc(475,`h3`),Sk(476,`Interfaces`),Kg(),Qc(477,`h4`,35)(478,`code`,12),Sk(479,`PoI18nConfigContext`),Kg()(),Qc(480,`div`,2)(481,`p`),vu(482,`a`,36),Kg(),Qc(483,`p`),Sk(484,`Interface para a configuração dos contextos do módulo `),Qc(485,`code`),Sk(486,`PoI18nModule`),Kg(),Sk(487,`.`),Kg()(),Qc(488,`h4`,37)(489,`code`,12),Sk(490,`PoI18nConfigDefault`),Kg()(),Qc(491,`div`,2)(492,`p`),vu(493,`a`,38),Kg(),Qc(494,`p`),Sk(495,`Interface para a configuração padrão do módulo PoI18nModule.`),Kg()(),Qc(496,`h4`,16),Sk(497,`Propriedades`),Kg(),Qc(498,`table`,25)(499,`tr`,26)(500,`th`,27),Sk(501,`Nome`),Kg(),Qc(502,`th`,27),Sk(503,`Tipo`),Kg(),Qc(504,`th`,27),Sk(505,`Descrição`),Kg()(),Qc(506,`tr`,39)(507,`td`,34)(508,`div`,20)(509,`span`,21),Sk(510,` cache`),vu(511,`br`),Kg()()(),Qc(512,`td`,28)(513,`code`,40),Sk(514,`boolean`),Kg()(),Qc(515,`td`,22)(516,`em`)(517,`strong`),Sk(518,`(opcional)`),Kg()(),Qc(519,`p`),Sk(520,`Define se as literais buscadas no servi\xE7o dever\xE3o ser armazenadas no cache do
navegador, lembrando que cada navegador possui sua pr\xF3pria limita\xE7\xE3o de cache.`),Kg(),Qc(521,`p`),Sk(522,`Para contextos com grande quantidade de literais, recomenda-se o uso de constantes ao inv\xE9s de servi\xE7os, desta forma
n\xE3o ser\xE1 usado o cache do navegador.`),Kg(),Qc(523,`p`),Sk(524,`Por padrão não utiliza.`),Kg()()(),Qc(525,`tr`,41)(526,`td`,34)(527,`div`,20)(528,`span`,21),Sk(529,` context`),vu(530,`br`),Kg()()(),Qc(531,`td`,28)(532,`code`,42),Sk(533,`string`),Kg()(),Qc(534,`td`,22)(535,`em`)(536,`strong`),Sk(537,`(opcional)`),Kg()(),Qc(538,`p`),Sk(539,`Define o contexto que será buscado por padrão pelo serviço.`),Kg(),Qc(540,`blockquote`)(541,`p`),Sk(542,`Caso não seja especificado será usado o primeiro contexto da lista de contextos.`),Kg()()()(),Qc(543,`tr`,43)(544,`td`,34)(545,`div`,20)(546,`span`,21),Sk(547,` language`),vu(548,`br`),Kg()()(),Qc(549,`td`,28)(550,`code`,42),Sk(551,`string`),Kg()(),Qc(552,`td`,22)(553,`em`)(554,`strong`),Sk(555,`(opcional)`),Kg()(),Qc(556,`p`),Sk(557,`Idioma que será buscado por padrão pelo serviço.`),Kg(),Qc(558,`p`),Sk(559,`Esta defini\xE7\xE3o somente ser\xE1 utilizada se n\xE3o tiver sido definido o idioma atrav\xE9s do m\xE9todo
`),Qc(560,`a`,9)(561,`code`),Sk(562,`setLanguage()`),Kg()(),Sk(563,`. Caso nenhum dos dois tenha sido configurado, ser\xE1 utilizado
o idioma do navegador.`),Kg()()()(),Qc(564,`h4`,44)(565,`code`,12),Sk(566,`PoI18nConfig`),Kg()(),Qc(567,`div`,2)(568,`p`),vu(569,`a`,45),Kg(),Qc(570,`p`),Sk(571,`Interface para a configuração do módulo `),Qc(572,`code`),Sk(573,`PoI18nModule`),Kg(),Sk(574,`.`),Kg()(),Qc(575,`h4`,16),Sk(576,`Propriedades`),Kg(),Qc(577,`table`,25)(578,`tr`,26)(579,`th`,27),Sk(580,`Nome`),Kg(),Qc(581,`th`,27),Sk(582,`Tipo`),Kg(),Qc(583,`th`,27),Sk(584,`Descrição`),Kg()(),Qc(585,`tr`,46)(586,`td`,34)(587,`div`,20)(588,`span`,21),Sk(589,` contexts`),vu(590,`br`),Kg()()(),Qc(591,`td`,28)(592,`code`,47),Sk(593,`PoI18nConfigContext`),Kg()(),Qc(594,`td`,22)(595,`p`),Sk(596,`Deve ser atribu\xEDdo a esta propriedade um objeto que contenha os contextos com os
idiomas suportados e suas respectivas tradu\xE7\xF5es literais,
como tamb\xE9m informar a propriedade `),Qc(597,`code`),Sk(598,`url`),Kg(),Sk(599,` onde pode ser informado o serviço que retorne as literais traduzidas.`),Kg(),Qc(600,`p`),Sk(601,`Portanto podemos utilizar constantes, onde devemos informar o nome do contexto recebendo um objeto com os
idiomas suportados e o arquivo de literais, por exemplo:`),Kg(),Qc(602,`pre`)(603,`code`),Sk(604,` import { generalEn } from './i18n/general-en';
 import { generalPt } from './i18n/general-pt';
...
 general: {
   pt: generalPt,
   en: generalEn
 }
...
`),Kg()(),Qc(605,`p`),Sk(606,`E como informado, podemos utilizar a propriedade `),Qc(607,`code`),Sk(608,`url`),Kg(),Sk(609,` que deve receber a URL do servi\xE7o que
retorne as literais traduzidas, por exemplo:`),Kg(),Qc(610,`pre`)(611,`code`),Sk(612,`hcm: {
  url: 'http://localhost:3000/api/translations/hcm/'
}
`),Kg()(),Qc(613,`p`),Sk(614,`Ao optar por utilizar um servi\xE7o, dever\xE1 ser definida a URL espec\xEDfica do contexto,
como nos exemplos abaixo:`),Kg(),Qc(615,`pre`)(616,`code`),Sk(617,`http://server:port/api/translations/crm
http://server:port/api/translations/general
`),Kg()(),Qc(618,`p`),Sk(619,`Os idiomas e literais serão automaticamente buscados com parâmetros na própria URL:`),Kg(),Qc(620,`ul`)(621,`li`)(622,`code`),Sk(623,`language`),Kg(),Sk(624,`: o idioma ser\xE1 sempre passado por par\xE2metro, sendo recomendado a utiliza\xE7\xE3o do padr\xE3o suportado
pelos navegadores (`),Qc(625,`code`),Sk(626,`pt-br`),Kg(),Sk(627,`, `),Qc(628,`code`),Sk(629,`en-us`),Kg(),Sk(630,`);`),Kg(),Qc(631,`li`)(632,`code`),Sk(633,`literals`),Kg(),Sk(634,`: as literais ser\xE3o separadas por v\xEDrgula. Caso esse par\xE2metro n\xE3o seja informado, o
servi\xE7o deve retornar todas as literais do idioma.`),Kg()(),Qc(635,`p`),Sk(636,`Exemplos de requisição:`),Kg(),Qc(637,`pre`)(638,`code`),Sk(639,`http://server:port/api/translations/crm?language=pt-br
http://server:port/api/translations/crm?language=pt-br&literals=add,remove,text
`),Kg()(),Qc(640,`blockquote`)(641,`p`),Sk(642,`Sempre que o idioma solicitado não for encontrado, será buscado por `),Qc(643,`code`),Sk(644,`pt-br`),Kg(),Sk(645,`.`),Kg()(),Qc(646,`p`),Sk(647,`Existe tamb\xE9m a possibilidade de utilizar ambos, onde ser\xE1 feito a busca das literais nas constantes e depois efetua
a busca no servi\xE7o, com isso as constantes podem servir como `),Qc(648,`em`),Sk(649,`backup`),Kg(),Sk(650,` caso o serviço esteja indisponível, por exemplo:`),Kg(),Qc(651,`pre`)(652,`code`),Sk(653,` import { generalEn } from './i18n/general-en';
 import { generalPt } from './i18n/general-pt';
...
 general: {
   pt: generalPt,
   en: generalEn,
   url: 'http://localhost:3000/api/translations/hcm/'
 }
...
`),Kg()(),Qc(654,`blockquote`)(655,`p`),Sk(656,`Caso a constante contenha alguma literal que o serviço não possua será utilizado a literal da constante.`),Kg()()()(),Qc(657,`tr`,48)(658,`td`,34)(659,`div`,20)(660,`span`,21),Sk(661,` default`),vu(662,`br`),Kg()()(),Qc(663,`td`,28)(664,`code`,49),Sk(665,`PoI18nConfigDefault`),Kg()(),Qc(666,`td`,22)(667,`em`)(668,`strong`),Sk(669,`(opcional)`),Kg()(),Qc(670,`p`),Sk(671,`Configurações padrões.`),Kg()()()(),Qc(672,`h4`,50)(673,`code`,12),Sk(674,`PoI18nLiterals`),Kg()(),Qc(675,`div`,2)(676,`p`),Sk(677,`Interface para o método `),Qc(678,`code`),Sk(679,`getLiterals()`),Kg(),Sk(680,` do serviço PoI18nService.`),Kg()(),Qc(681,`h4`,16),Sk(682,`Propriedades`),Kg(),Qc(683,`table`,25)(684,`tr`,26)(685,`th`,27),Sk(686,`Nome`),Kg(),Qc(687,`th`,27),Sk(688,`Tipo`),Kg(),Qc(689,`th`,27),Sk(690,`Descrição`),Kg()(),Qc(691,`tr`,51)(692,`td`,34)(693,`div`,20)(694,`span`,21),Sk(695,` context`),vu(696,`br`),Kg()()(),Qc(697,`td`,28)(698,`code`,42),Sk(699,`string`),Kg()(),Qc(700,`td`,22)(701,`em`)(702,`strong`),Sk(703,`(opcional)`),Kg()(),Qc(704,`p`),Sk(705,`Contexto utilizado na busca das literais.`),Kg()()(),Qc(706,`tr`,52)(707,`td`,34)(708,`div`,20)(709,`span`,21),Sk(710,` language`),vu(711,`br`),Kg()()(),Qc(712,`td`,28)(713,`code`,42),Sk(714,`string`),Kg()(),Qc(715,`td`,22)(716,`em`)(717,`strong`),Sk(718,`(opcional)`),Kg()(),Qc(719,`p`),Sk(720,`Idioma a ser buscado.`),Kg()()(),Qc(721,`tr`,53)(722,`td`,34)(723,`div`,20)(724,`span`,21),Sk(725,` literals`),vu(726,`br`),Kg()()(),Qc(727,`td`,28)(728,`code`,54),Sk(729,`Array<string>`),Kg()(),Qc(730,`td`,22)(731,`em`)(732,`strong`),Sk(733,`(opcional)`),Kg()(),Qc(734,`p`),Sk(735,`Lista das literais.`),Kg()()()(),Qc(736,`h4`,55)(737,`code`,12),Sk(738,`PoLanguage`),Kg()(),Qc(739,`div`,2)(740,`p`),vu(741,`a`,56),Kg(),Qc(742,`p`),Sk(743,`Interface para descrição das linguagens disponíveis no sistema.`),Kg()(),Qc(744,`h4`,16),Sk(745,`Propriedades`),Kg(),Qc(746,`table`,25)(747,`tr`,26)(748,`th`,27),Sk(749,`Nome`),Kg(),Qc(750,`th`,27),Sk(751,`Tipo`),Kg(),Qc(752,`th`,27),Sk(753,`Descrição`),Kg()(),Qc(754,`tr`,57)(755,`td`,34)(756,`div`,20)(757,`span`,21),Sk(758,` description`),vu(759,`br`),Kg()()(),Qc(760,`td`,28)(761,`code`,42),Sk(762,`string`),Kg()(),Qc(763,`td`,22)(764,`em`)(765,`strong`),Sk(766,`(opcional)`),Kg()(),Qc(767,`p`),Sk(768,`Descrição do idioma`),Kg()()(),Qc(769,`tr`,58)(770,`td`,34)(771,`div`,20)(772,`span`,21),Sk(773,` language`),vu(774,`br`),Kg()()(),Qc(775,`td`,28)(776,`code`,42),Sk(777,`string`),Kg()(),Qc(778,`td`,22)(779,`em`)(780,`strong`),Sk(781,`(opcional)`),Kg()(),Qc(782,`p`),Sk(783,`Código do idioma `),Qc(784,`a`,59),Sk(785,`ISO 639-1`),Kg()(),Qc(786,`blockquote`)(787,`p`),Sk(788,`Exemplo: 'pt','en'`),Kg()()()()(),Qc(789,`h4`,60)(790,`code`,12),Sk(791,`PoNumberSeparator`),Kg()(),Qc(792,`div`,2)(793,`p`),vu(794,`a`,61),Kg(),Qc(795,`p`),Sk(796,`Interface para os separadores numéricos das linguagens disponíveis no sistema.`),Kg()(),Qc(797,`h4`,16),Sk(798,`Propriedades`),Kg(),Qc(799,`table`,25)(800,`tr`,26)(801,`th`,27),Sk(802,`Nome`),Kg(),Qc(803,`th`,27),Sk(804,`Tipo`),Kg(),Qc(805,`th`,27),Sk(806,`Descrição`),Kg()(),Qc(807,`tr`,62)(808,`td`,34)(809,`div`,20)(810,`span`,21),Sk(811,` language`),vu(812,`br`),Kg()()(),Qc(813,`td`,28)(814,`code`,42),Sk(815,`string`),Kg()(),Qc(816,`td`,22)(817,`em`)(818,`strong`),Sk(819,`(opcional)`),Kg()(),Qc(820,`p`),Sk(821,`Código do idioma `),Qc(822,`a`,59),Sk(823,`ISO 639-1`),Kg()(),Qc(824,`blockquote`)(825,`p`),Sk(826,`Exemplo: 'pt','en'`),Kg()()()(),Qc(827,`tr`,63)(828,`td`,34)(829,`div`,20)(830,`span`,21),Sk(831,` separator`),vu(832,`br`),Kg()()(),Qc(833,`td`,28)(834,`code`,42),Sk(835,`string`),Kg()(),Qc(836,`td`,22)(837,`em`)(838,`strong`),Sk(839,`(opcional)`),Kg()(),Qc(840,`p`),Sk(841,`Separador numérico`),Kg()()()(),Qc(842,`h4`,64)(843,`code`,12),Sk(844,`PoDateSeparator`),Kg()(),Qc(845,`div`,2)(846,`p`),vu(847,`a`,65),Kg(),Qc(848,`p`),Sk(849,`Interface para o separador de data das linguagens disponíveis no sistema.`),Kg()(),Qc(850,`h4`,16),Sk(851,`Propriedades`),Kg(),Qc(852,`table`,25)(853,`tr`,26)(854,`th`,27),Sk(855,`Nome`),Kg(),Qc(856,`th`,27),Sk(857,`Tipo`),Kg(),Qc(858,`th`,27),Sk(859,`Descrição`),Kg()(),Qc(860,`tr`,66)(861,`td`,34)(862,`div`,20)(863,`span`,21),Sk(864,` locale`),vu(865,`br`),Kg()()(),Qc(866,`td`,28)(867,`code`,42),Sk(868,`string`),Kg()(),Qc(869,`td`,22)(870,`em`)(871,`strong`),Sk(872,`(opcional)`),Kg()(),Qc(873,`p`),Sk(874,`Código do locale `),Qc(875,`a`,59),Sk(876,`ISO 639-1`),Kg()(),Qc(877,`blockquote`)(878,`p`),Sk(879,`Exemplo: 'pt','en'`),Kg()()()(),Qc(880,`tr`,67)(881,`td`,34)(882,`div`,20)(883,`span`,21),Sk(884,` separator`),vu(885,`br`),Kg()()(),Qc(886,`td`,28)(887,`code`,42),Sk(888,`string`),Kg()(),Qc(889,`td`,22)(890,`em`)(891,`strong`),Sk(892,`(opcional)`),Kg()(),Qc(893,`p`),Sk(894,`Separador de data`),Kg(),Qc(895,`blockquote`)(896,`p`),Sk(897,`Exemplo: '/','.','-'`),Kg()()()()()())},encapsulation:2,changeDetection:1})}return o})();function j(o,_){if(o&1){let a=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(a);let l=ek();return U_(l.changeTab(`web`))}),Kg()}if(o&2){let a=ek();Rb(`p-active`,a.activeTab===`web`)}}var R=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,r){this.route=a,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let r=a.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:r||`web`})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`I18n`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(r,l){r&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,j,1,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return l.changeTab(`doc`)}),vu(4,`sample-po-i18n-doc`),Kg()()()),r&2&&(Rb(`p-actions`,l.actions),wg(2),VO(l.hidePoWebSample?-1:2),wg(),Rb(`p-active`,l.activeTab===`doc`))},dependencies:[Mze,tre,are,M],encapsulation:2,changeDetection:1})}return o})()}];var A=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[GV.forChild(R),GV]})}return o})();var ie=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[M$1,A]})}return o})();export{ie as DocPoI18nModule};