import{p as M}from"./main-ZE6YMYJ4.js";import{Er as GV,Ia as p,Ir as Jc,Ji as ar,Ki as _u,Lr as Jn,Pr as I,Vr as Kg,W as Mze,Wr as LO,Ya as tk,_a as jO,ar as B_,ca as ge,ea as de,er as Ab,qr as Mk,ro as wg,tr as An,va as j_}from"./chunk-CTJH0VS3.js";var q=(()=>{class o{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-i18n-doc`]],standalone:!1,decls:898,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[`href`,`documentation/po-i18n#poI18nConfig`],[`id`,`i18n-config`],[`href`,`http://10.0.0.1:3000/api/translations/crm`],[`href`,`http://10.0.0.1:3000/api/translations/general`],[`href`,`http://10.0.0.1:3000/api/translations/crm?language=pt-br`],[`href`,`http://10.0.0.1:3000/api/translations/crm?language=pt-br&literals=add,remove,text`],[`href`,`documentation/po-i18n#setLanguage`],[1,`docs-api-h3`],[`id`,`class-po-i18n-service`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-i18n#i18n-config`],[`href`,`https://angular.io/guide/observables`],[1,`language-typescript`],[1,`docs-api-h5`,`docs-api-method-header`],[`id`,`method-getLanguage`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-property-description`],[`id`,`get-language`],[`href`,`documentation/po-i18n#poI18nConfigDefault`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`],[`id`,`method-getShortLanguage`,1,`docs-api-method-table`],[`href`,`/documentation/po-i18n#get-language`],[`id`,`method-setLanguage`,1,`docs-api-method-table`],[`id`,`setLanguage`],[1,`docs-api-properties-name-cell`],[`id`,`interface-po-i18n-config-context`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`poI18nConfigContext`],[`id`,`interface-po-i18n-config-default`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`poI18nConfigDefault`],[`id`,`interface-po-i18n-config-default-cache`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`interface-po-i18n-config-default-context`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`interface-po-i18n-config-default-language`,1,`docs-api-properties-row`],[`id`,`interface-po-i18n-config`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`poI18nConfig`],[`id`,`interface-po-i18n-config-contexts`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoI18nConfigContext`],[`id`,`interface-po-i18n-config-default`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoI18nConfigDefault`],[`id`,`interface-po-i18n-literals`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-i18n-literals-context`,1,`docs-api-properties-row`],[`id`,`interface-po-i18n-literals-language`,1,`docs-api-properties-row`],[`id`,`interface-po-i18n-literals-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`id`,`interface-po-language`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`poI18nLanguage`],[`id`,`interface-po-language-description`,1,`docs-api-properties-row`],[`id`,`interface-po-language-language`,1,`docs-api-properties-row`],[`href`,`https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes`],[`id`,`interface-po-number-separator`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`PoNumberSeparator`],[`id`,`interface-po-number-separator-language`,1,`docs-api-properties-row`],[`id`,`interface-po-number-separator-separator`,1,`docs-api-properties-row`],[`id`,`interface-po-date-separator`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`PoDateSeparator`],[`id`,`interface-po-date-separator-locale`,1,`docs-api-properties-row`],[`id`,`interface-po-date-separator-separator`,1,`docs-api-properties-row`]],template:function(a,l){a&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoI18nModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do serviço `),Jc(7,`code`),Mk(8,`PoI18nService`),Kg(),Mk(9,` para controle de idiomas com PO.`),Kg(),Jc(10,`p`),Mk(11,`Para utilização do serviço de idiomas `),Jc(12,`code`),Mk(13,`PoI18nService`),Kg(),Mk(14,`, deve-se importar este m\xF3dulo mesmo j\xE1 havendo importado
o m\xF3dulo `),Jc(15,`code`),Mk(16,`PoModule`),Kg(),Mk(17,`. Na importação deve ser invocado o método `),Jc(18,`code`),Mk(19,`config`),Kg(),Mk(20,`, informando um objeto que deve implementar
a interface `),Jc(21,`a`,3)(22,`code`),Mk(23,`PoI18nConfig`),Kg()(),Mk(24,` para configuração.`),Kg(),Jc(25,`p`),_u(26,`a`,4),Jc(27,`strong`),Mk(28,`Exemplo de configuração do módulo do i18n:`),Kg()(),Jc(29,`pre`)(30,`code`),Mk(31,`import { PoI18nConfig } from '@po-ui/ng-components';

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
`),Kg()(),Jc(32,`p`),Mk(33,`Para cada contexto \xE9 poss\xEDvel definir a origem das literais, que podem ser de um servi\xE7o REST ou
de um objeto. Exemplo:`),Kg(),Jc(34,`p`),Mk(35,`Arquivo general-pt.ts`),Kg(),Jc(36,`pre`)(37,`code`),Mk(38,`export const generalPt = {
 add: 'Adicionar',
 greeting: 'Prazer, {0} {1}',
 people: '{0} Pessoas,
 remove: 'Remover'
}
`),Kg()(),Jc(39,`p`),Mk(40,`Arquivo general-en.ts`),Kg(),Jc(41,`pre`)(42,`code`),Mk(43,`export const generalEn = {
 add: 'Add',
 greeting: 'Nice to meet you, {0} {1}',
 people: '{0} People,
 remove: 'Remove'
}
`),Kg()(),Jc(44,`p`)(45,`strong`),Mk(46,`Exemplo de configuração de contextos usando constantes externas:`),Kg()(),Jc(47,`pre`)(48,`code`),Mk(49,`import { PoI18nConfig } from '@po-ui/ng-components';

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
`),Kg()(),Jc(50,`p`)(51,`strong`),Mk(52,`Exemplo de configuração de um contexto utilizando serviço:`),Kg()(),Jc(53,`p`),Mk(54,`Ao optar por utilizar um servi\xE7o para configura\xE7\xE3o de contexto, dever\xE1 ser definida a URL
espec\xEDfica do contexto, como nos exemplos abaixo:`),Kg(),Jc(55,`ul`)(56,`li`)(57,`a`,5),Mk(58,`http://10.0.0.1:3000/api/translations/crm`),Kg()(),Jc(59,`li`)(60,`a`,6),Mk(61,`http://10.0.0.1:3000/api/translations/general`),Kg()()(),Jc(62,`p`),Mk(63,`Os idiomas e literais serão automaticamente buscados com parâmetros na própria URL:`),Kg(),Jc(64,`ul`)(65,`li`)(66,`strong`),Mk(67,`language`),Kg(),Mk(68,`: o idioma ser\xE1 sempre passado por par\xE2metro e \xE9 recomendado utilizar uma das linguagens
suportadas pelo PO (`),Jc(69,`code`),Mk(70,`pt-br`),Kg(),Mk(71,`, `),Jc(72,`code`),Mk(73,`en-us`),Kg(),Mk(74,`, `),Jc(75,`code`),Mk(76,`es-es`),Kg(),Mk(77,` ou `),Jc(78,`code`),Mk(79,`ru`),Kg(),Mk(80,`).`),Kg(),Jc(81,`li`)(82,`strong`),Mk(83,`literals`),Kg(),Mk(84,`: as literais ser\xE3o separadas por v\xEDrgula. Caso esse par\xE2metro n\xE3o seja informado, o
servi\xE7o deve retornar todas as literais do idioma.`),Kg()(),Jc(85,`p`),Mk(86,`Exemplos de requisição:`),Kg(),Jc(87,`ul`)(88,`li`)(89,`a`,7),Mk(90,`http://10.0.0.1:3000/api/translations/crm?language=pt-br`),Kg()(),Jc(91,`li`)(92,`a`,8),Mk(93,`http://10.0.0.1:3000/api/translations/crm?language=pt-br&literals=add,remove,text`),Kg()()(),Jc(94,`blockquote`)(95,`p`),Mk(96,`Sempre que o idioma solicitado não for encontrado, será buscado por `),Jc(97,`code`),Mk(98,`pt-br`),Kg(),Mk(99,`.`),Kg()(),Jc(100,`p`),Mk(101,`Além dos contextos, é possível definir as configurações `),Jc(102,`em`),Mk(103,`default`),Kg(),Mk(104,` do sistema na configura\xE7\xE3o do
m\xF3dulo utilizando a interface `),Jc(105,`a`,3)(106,`code`),Mk(107,`PoI18nConfig`),Kg()(),Mk(108,`:`),Kg(),Jc(109,`p`)(110,`strong`),Mk(111,`Exemplo de padrões definidos:`),Kg()(),Jc(112,`pre`)(113,`code`),Mk(114,`const i18nConfig: PoI18nConfig = {
  contexts: {
    general: { }
  },
  default: {
   language: 'pt-BR',
   context: 'general',
   cache: true
  }
}
`),Kg()(),Jc(115,`p`)(116,`strong`),Mk(117,`Importante:`),Kg()(),Jc(118,`p`),Mk(119,`Recomenda-se que as definições `),Jc(120,`em`),Mk(121,`default`),Kg(),Mk(122,` sejam realizadas apenas uma vez na aplica\xE7\xE3o,
preferencialmente no m\xF3dulo `),Jc(123,`code`),Mk(124,`AppModule`),Kg(),Mk(125,`.`),Kg(),Jc(126,`p`)(127,`strong`),Mk(128,`i18n com `),Jc(129,`em`),Mk(130,`Lazy loading`),Kg()()(),Jc(131,`p`),Mk(132,`Para aplicações que utilizem a abordagem de módulos com carregamento `),Jc(133,`em`),Mk(134,`lazy loading`),Kg(),Mk(135,`, caso seja
definida outra configura\xE7\xE3o do `),Jc(136,`code`),Mk(137,`PoI18nModule`),Kg(),Mk(138,`, deve-se atentar os seguintes detalhes:`),Kg(),Jc(139,`ul`)(140,`li`),Mk(141,`Não defina outra `),Jc(142,`em`),Mk(143,`default language`),Kg(),Mk(144,` para este m\xF3dulo. Caso for definida, ser\xE1 sobreposta para
toda a aplica\xE7\xE3o;`),Kg(),Jc(145,`li`),Mk(146,`Caso precise de módulos carregados via `),Jc(147,`em`),Mk(148,`lazy loading`),Kg(),Mk(149,` com linguagens diferentes, utilize o
m\xE9todo `),Jc(150,`a`,9)(151,`code`),Mk(152,`setLanguage()`),Kg()(),Mk(153,` disponibilizado pelo `),Jc(154,`code`),Mk(155,`PoI18nService`),Kg(),Mk(156,`
para definir a linguagem da aplica\xE7\xE3o e dos m\xF3dulos com as linguagens diferentes.`),Kg()()(),Jc(157,`h3`,10),Mk(158,`Services`),Kg(),Jc(159,`h4`,11)(160,`code`,12),Mk(161,`PoI18nService`),Kg()(),Jc(162,`div`,2)(163,`p`),Mk(164,`O serviço `),Jc(165,`code`),Mk(166,`PoI18nService`),Kg(),Mk(167,` possibilita utilizar múltiplos idiomas e contextos na aplicação.`),Kg(),Jc(168,`blockquote`)(169,`p`),Mk(170,`Antes da utiliza\xE7\xE3o do servi\xE7o, \xE9 necess\xE1rio realizar a
`),Jc(171,`a`,13),Mk(172,`importação e configuração do módulo `),Jc(173,`code`),Mk(174,`PoI18nModule`),Kg()(),Mk(175,`.`),Kg()(),Jc(176,`p`)(177,`strong`),Mk(178,`Utilização do serviço `),Jc(179,`code`),Mk(180,`PoI18nService`),Kg(),Mk(181,`:`),Kg()(),Jc(182,`p`),Mk(183,`Para utilizar o servi\xE7o basta import\xE1-lo nos componentes que necessitarem de literais e fazer a inje\xE7\xE3o de
depend\xEAncia no construtor:`),Kg(),Jc(184,`pre`)(185,`code`),Mk(186,`import { PoI18nService } from '@po-ui/ng-components';
...
constructor(private poI18nService: PoI18nService) { }
...
`),Kg()(),Jc(187,`p`),Mk(188,`Por fim realizar a busca pelas literais, inscrevendo-se no `),Jc(189,`a`,14),Mk(190,`Observable`),Kg(),Mk(191,` pelo
m\xE9todo `),Jc(192,`code`),Mk(193,`getLiterals()`),Kg(),Mk(194,`.`),Kg(),Jc(195,`blockquote`)(196,`p`),Mk(197,`O método `),Jc(198,`code`),Mk(199,`getLiterals()`),Kg(),Mk(200,` pode receber um objeto do tipo da interface `),Jc(201,`code`),Mk(202,`PoI18nLiterals`),Kg(),Mk(203,` como par\xE2metro,
por\xE9m, nenhuma das propriedades s\xE3o obrigat\xF3rias. Caso nenhum par\xE2metro seja passado, ser\xE3o buscadas
todas as literais do contexto definido com padr\xE3o, no idioma definido como padr\xE3o.`),Kg()(),Jc(204,`ul`)(205,`li`)(206,`h2`),Mk(207,`Alterações a partir da versão 19`),Kg()()(),Jc(208,`p`),Mk(209,`A partir da vers\xE3o 19, para evitar conflitos com bibliotecas de terceiros que tamb\xE9m utilizam i18n,
\xE9 necess\xE1rio passar explicitamente o contexto ao chamar `),Jc(210,`code`),Mk(211,`getLiterals`),Kg(),Mk(212,`, garantindo a correta exibi\xE7\xE3o das literais.
Caso `),Jc(213,`code`),Mk(214,`getLiterals`),Kg(),Mk(215,` seja chamado sem parâmetros, o retorno pode vir das configurações da biblioteca de terceiros.`),Kg(),Jc(216,`p`)(217,`strong`),Mk(218,`Exemplo de chamada com contexto explícito:`),Kg()(),Jc(219,`pre`)(220,`code`,15),Mk(221,`poI18nService.getLiterals({ context: 'general' }).subscribe(literals => console.log(literals));
`),Kg()(),Jc(222,`p`)(223,`strong`),Mk(224,`Cenário de Contextos Iguais:`),Kg(),Mk(225,`
Caso tanto a aplica\xE7\xE3o quanto uma biblioteca de terceiros utilizem o mesmo nome de contexto,
o PO UI far\xE1 um merge das literais, priorizando os valores definidos na aplica\xE7\xE3o cliente.`),Kg(),Jc(226,`p`)(227,`strong`),Mk(228,`Recomendações:`),Kg()(),Jc(229,`ul`)(230,`li`),Mk(231,`Sempre informar o contexto ao chamar `),Jc(232,`code`),Mk(233,`getLiterals`),Kg(),Mk(234,` para evitar conflitos de literais.`),Kg(),Jc(235,`li`),Mk(236,`Caso a aplicação utilize `),Jc(237,`code`),Mk(238,`lazy loading`),Kg(),Mk(239,`, utilizar `),Jc(240,`code`),Mk(241,`setLanguage()`),Kg(),Mk(242,` para garantir a correta configuração de idioma.`),Kg()(),Jc(243,`p`),Mk(244,`Exemplos de requisição:`),Kg(),Jc(245,`pre`)(246,`code`),Mk(247,`literals = {};
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
`),Kg()(),Jc(248,`p`),Mk(249,`Para apresentar as literais capturadas acima no HTML do componente, deve-se utilizar o
seguinte c\xF3digo:`),Kg(),Jc(250,`pre`),B_(),Mk(251,`{{ literals?.add }}
{{ literals?.remove }}
`),j_(),Kg(),Jc(252,`p`),Mk(253,`Caso as literais contenham variáveis que precisem ser substituídas, pode-se utilizar o `),Jc(254,`em`),Mk(255,`pipe`),Kg(),Jc(256,`code`),Mk(257,`poI18n`),Kg(),Mk(258,`.
\xC9 poss\xEDvel informar propriedades do componente como `),Jc(259,`code`),Mk(260,`name`),Kg(),Mk(261,` e `),Jc(262,`code`),Mk(263,`nickname`),Kg(),Mk(264,` ou
informar o valor diretamente com "" ou n\xFAmero, conforme o exemplo abaixo:`),Kg(),Jc(265,`pre`),B_(),Mk(266,`{{ literals?.people | poI18n:[120] }}
{{ literals?.greeting | poI18n:[name, nickname] }}
{{ literals?.greeting | poI18n:["Brad", "Green"] }}
`),j_(),Kg(),Jc(267,`blockquote`)(268,`p`),Mk(269,`É importante o uso do operador `),Jc(270,`code`),Mk(271,`?`),Kg(),Mk(272,` (Elvis) para evitar erros enquanto as literais não forem carregadas.`),Kg()(),Jc(273,`h3`),Mk(274,`Teste unitário`),Kg(),Jc(275,`p`),Mk(276,`Abaixo segue um exemplo de `),Jc(277,`em`),Mk(278,`setup`),Kg(),Mk(279,` inicial de teste unitário do `),Jc(280,`em`),Mk(281,`AppComponent`),Kg(),Mk(282,` que utiliza o `),Jc(283,`code`),Mk(284,`PoI18nService`),Kg(),Mk(285,`:`),Kg(),Jc(286,`blockquote`)(287,`p`),Mk(288,`Atenção: não declarar o `),Jc(289,`code`),Mk(290,`PoI18nService`),Kg(),Mk(291,` no providers do TestBed pois a biblioteca realiza a inje\xE7\xE3o de depend\xEAncia de forma din\xE2mica.
Se o servi\xE7o for declarado o teste n\xE3o far\xE1 a inje\xE7\xE3o e o teste apresentar\xE1 erros.`),Kg()(),Jc(292,`pre`)(293,`code`),Mk(294,`import { async, TestBed } from '@angular/core/testing';
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
`),Kg()()(),Jc(295,`h3`,16),Mk(296,`Métodos`),Kg(),Jc(297,`table`,17)(298,`tr`,18)(299,`th`,19)(300,`div`,20)(301,`h4`)(302,`span`,21),Mk(303,` getLanguage `),Kg()()()()(),Jc(304,`tr`,22)(305,`td`,22)(306,`p`),_u(307,`a`,23),Mk(308,`
M\xE9todo que retorna o idioma padr\xE3o ativo.`),Kg(),Jc(309,`p`),Mk(310,`A busca deste idioma pelo método será feita na seguinte ordem:`),Kg(),Jc(311,`p`),Mk(312,` 1 - o idioma que foi armazenado no `),Jc(313,`em`),Mk(314,`localStorage`),Kg(),Mk(315,`, através do método `),Jc(316,`a`,9)(317,`code`),Mk(318,`setLanguage()`),Kg()(),Mk(319,`.`),Kg(),Jc(320,`p`),Mk(321,` 2 - o valor inserido no módulo do i18n através do parâmetro `),Jc(322,`code`),Mk(323,`config`),Kg(),Mk(324,`, sendo o idioma inserido na propriedade
`),Jc(325,`code`),Mk(326,`language`),Kg(),Mk(327,` da interface `),Jc(328,`a`,24)(329,`code`),Mk(330,`PoI18nConfigDefault`),Kg()(),Mk(331,`.`),Kg(),Jc(332,`p`),Mk(333,` 3 - o idioma do navegador utilizado.`),Kg(),Jc(334,`blockquote`)(335,`p`),Mk(336,`Caso o idioma do navegador não seja suportado pelo PO (`),Jc(337,`code`),Mk(338,`pt`),Kg(),Mk(339,`, `),Jc(340,`code`),Mk(341,`en`),Kg(),Mk(342,`, `),Jc(343,`code`),Mk(344,`es`),Kg(),Mk(345,` ou `),Jc(346,`code`),Mk(347,`ru`),Kg(),Mk(348,`), será retornado valor `),Jc(349,`code`),Mk(350,`pt`),Kg(),Mk(351,`.`),Kg()()()()(),Jc(352,`h5`)(353,`b`),Mk(354,`Retorno`),Kg()(),Jc(355,`table`,25)(356,`tr`,26)(357,`th`,27),Mk(358,`Tipo`),Kg(),Jc(359,`th`,27),Mk(360,`Descrição`),Kg()(),Jc(361,`tr`,18)(362,`td`,28)(363,`code`,29),Mk(364,`string`),Kg()(),Jc(365,`td`,22)(366,`p`),Mk(367,`sigla do idioma padrão.`),Kg()()()(),_u(368,`br`),Jc(369,`table`,30)(370,`tr`,18)(371,`th`,19)(372,`div`,20)(373,`h4`)(374,`span`,21),Mk(375,` getShortLanguage `),Kg()()()()(),Jc(376,`tr`,22)(377,`td`,22)(378,`p`),Mk(379,`M\xE9todo que retorna o idioma padr\xE3o ativo, com somente a abrevia\xE7\xE3o do idioma (duas primeiras letras).
Por exemplo: "pt" ou "es".`),Kg(),Jc(380,`p`),Mk(381,`A busca deste idioma é baseada no método `),Jc(382,`a`,31)(383,`strong`),Mk(384,`getLanguage()`),Kg()(),Mk(385,`.`),Kg()()()(),Jc(386,`h5`)(387,`b`),Mk(388,`Retorno`),Kg()(),Jc(389,`table`,25)(390,`tr`,26)(391,`th`,27),Mk(392,`Tipo`),Kg(),Jc(393,`th`,27),Mk(394,`Descrição`),Kg()(),Jc(395,`tr`,18)(396,`td`,28)(397,`code`,29),Mk(398,`string`),Kg()(),Jc(399,`td`,22)(400,`p`),Mk(401,`sigla do idioma padrão.`),Kg()()()(),_u(402,`br`),Jc(403,`table`,32)(404,`tr`,18)(405,`th`,19)(406,`div`,20)(407,`h4`)(408,`span`,21),Mk(409,` setLanguage `),Kg()()()()(),Jc(410,`tr`,22)(411,`td`,22)(412,`p`),_u(413,`a`,33),Mk(414,`
M\xE9todo para alterar o idioma padr\xE3o do m\xF3dulo do i18n.`),Kg(),Jc(415,`p`),Mk(416,`Ao utilizar este m\xE9todo, o idioma ficar\xE1 gravado no armazenamento local do navegador, que ser\xE1 utilizado pelo
servi\xE7o do `),Jc(417,`code`),Mk(418,`i18n`),Kg(),Mk(419,` para buscar as literais no idioma padrão.`),Kg()()()(),Jc(420,`h5`)(421,`b`),Mk(422,`Parâmetros`),Kg()(),Jc(423,`table`,25)(424,`tr`,26)(425,`th`,27),Mk(426,`Nome`),Kg(),Jc(427,`th`,27),Mk(428,`Tipo`),Kg(),Jc(429,`th`,27),Mk(430,`Descrição`),Kg()(),Jc(431,`tr`,18)(432,`td`,34),Mk(433,` language`),Kg(),Jc(434,`td`,28)(435,`code`,29),Mk(436,` string `),Kg()(),Jc(437,`td`,22)(438,`p`),Mk(439,`Sigla do idioma.`),Kg(),Jc(440,`p`),Mk(441,`Esta sigla deve ser composta por duas letras representando o idioma,
podendo ser adicionado outras duas letras representando o pa\xEDs, por exemplo: `),Jc(442,`code`),Mk(443,`pt`),Kg(),Mk(444,`, `),Jc(445,`code`),Mk(446,`pt-BR`),Kg(),Mk(447,`, `),Jc(448,`code`),Mk(449,`pt-br`),Kg(),Mk(450,`, `),Jc(451,`code`),Mk(452,`en`),Kg(),Mk(453,` ou `),Jc(454,`code`),Mk(455,`en-US`),Kg(),Mk(456,`.`),Kg(),Jc(457,`blockquote`)(458,`p`),Mk(459,`Caso seja informado um valor diferente deste padrão, o mesmo será ignorado.`),Kg()()()(),Jc(460,`tr`,18)(461,`td`,34),Mk(462,` reload`),Kg(),Jc(463,`td`,28)(464,`code`,29),Mk(465,` boolean `),Kg()(),Jc(466,`td`,22)(467,`p`),Mk(468,`Indica se a página atual poderá ser recarregada após a alteração do idioma.`),Kg(),Jc(469,`p`),Mk(470,`Este recurso pode ser útil para os usuários que utilizam o método `),Jc(471,`code`),Mk(472,`getLiterals()`),Kg(),Mk(473,` do servi\xE7o do i18n para poder
buscar novamente as literais no novo idioma configurado.`),Kg()()()(),_u(474,`br`),Jc(475,`h3`),Mk(476,`Interfaces`),Kg(),Jc(477,`h4`,35)(478,`code`,12),Mk(479,`PoI18nConfigContext`),Kg()(),Jc(480,`div`,2)(481,`p`),_u(482,`a`,36),Kg(),Jc(483,`p`),Mk(484,`Interface para a configuração dos contextos do módulo `),Jc(485,`code`),Mk(486,`PoI18nModule`),Kg(),Mk(487,`.`),Kg()(),Jc(488,`h4`,37)(489,`code`,12),Mk(490,`PoI18nConfigDefault`),Kg()(),Jc(491,`div`,2)(492,`p`),_u(493,`a`,38),Kg(),Jc(494,`p`),Mk(495,`Interface para a configuração padrão do módulo PoI18nModule.`),Kg()(),Jc(496,`h4`,16),Mk(497,`Propriedades`),Kg(),Jc(498,`table`,25)(499,`tr`,26)(500,`th`,27),Mk(501,`Nome`),Kg(),Jc(502,`th`,27),Mk(503,`Tipo`),Kg(),Jc(504,`th`,27),Mk(505,`Descrição`),Kg()(),Jc(506,`tr`,39)(507,`td`,34)(508,`div`,20)(509,`span`,21),Mk(510,` cache`),_u(511,`br`),Kg()()(),Jc(512,`td`,28)(513,`code`,40),Mk(514,`boolean`),Kg()(),Jc(515,`td`,22)(516,`em`)(517,`strong`),Mk(518,`(opcional)`),Kg()(),Jc(519,`p`),Mk(520,`Define se as literais buscadas no servi\xE7o dever\xE3o ser armazenadas no cache do
navegador, lembrando que cada navegador possui sua pr\xF3pria limita\xE7\xE3o de cache.`),Kg(),Jc(521,`p`),Mk(522,`Para contextos com grande quantidade de literais, recomenda-se o uso de constantes ao inv\xE9s de servi\xE7os, desta forma
n\xE3o ser\xE1 usado o cache do navegador.`),Kg(),Jc(523,`p`),Mk(524,`Por padrão não utiliza.`),Kg()()(),Jc(525,`tr`,41)(526,`td`,34)(527,`div`,20)(528,`span`,21),Mk(529,` context`),_u(530,`br`),Kg()()(),Jc(531,`td`,28)(532,`code`,42),Mk(533,`string`),Kg()(),Jc(534,`td`,22)(535,`em`)(536,`strong`),Mk(537,`(opcional)`),Kg()(),Jc(538,`p`),Mk(539,`Define o contexto que será buscado por padrão pelo serviço.`),Kg(),Jc(540,`blockquote`)(541,`p`),Mk(542,`Caso não seja especificado será usado o primeiro contexto da lista de contextos.`),Kg()()()(),Jc(543,`tr`,43)(544,`td`,34)(545,`div`,20)(546,`span`,21),Mk(547,` language`),_u(548,`br`),Kg()()(),Jc(549,`td`,28)(550,`code`,42),Mk(551,`string`),Kg()(),Jc(552,`td`,22)(553,`em`)(554,`strong`),Mk(555,`(opcional)`),Kg()(),Jc(556,`p`),Mk(557,`Idioma que será buscado por padrão pelo serviço.`),Kg(),Jc(558,`p`),Mk(559,`Esta defini\xE7\xE3o somente ser\xE1 utilizada se n\xE3o tiver sido definido o idioma atrav\xE9s do m\xE9todo
`),Jc(560,`a`,9)(561,`code`),Mk(562,`setLanguage()`),Kg()(),Mk(563,`. Caso nenhum dos dois tenha sido configurado, ser\xE1 utilizado
o idioma do navegador.`),Kg()()()(),Jc(564,`h4`,44)(565,`code`,12),Mk(566,`PoI18nConfig`),Kg()(),Jc(567,`div`,2)(568,`p`),_u(569,`a`,45),Kg(),Jc(570,`p`),Mk(571,`Interface para a configuração do módulo `),Jc(572,`code`),Mk(573,`PoI18nModule`),Kg(),Mk(574,`.`),Kg()(),Jc(575,`h4`,16),Mk(576,`Propriedades`),Kg(),Jc(577,`table`,25)(578,`tr`,26)(579,`th`,27),Mk(580,`Nome`),Kg(),Jc(581,`th`,27),Mk(582,`Tipo`),Kg(),Jc(583,`th`,27),Mk(584,`Descrição`),Kg()(),Jc(585,`tr`,46)(586,`td`,34)(587,`div`,20)(588,`span`,21),Mk(589,` contexts`),_u(590,`br`),Kg()()(),Jc(591,`td`,28)(592,`code`,47),Mk(593,`PoI18nConfigContext`),Kg()(),Jc(594,`td`,22)(595,`p`),Mk(596,`Deve ser atribu\xEDdo a esta propriedade um objeto que contenha os contextos com os
idiomas suportados e suas respectivas tradu\xE7\xF5es literais,
como tamb\xE9m informar a propriedade `),Jc(597,`code`),Mk(598,`url`),Kg(),Mk(599,` onde pode ser informado o serviço que retorne as literais traduzidas.`),Kg(),Jc(600,`p`),Mk(601,`Portanto podemos utilizar constantes, onde devemos informar o nome do contexto recebendo um objeto com os
idiomas suportados e o arquivo de literais, por exemplo:`),Kg(),Jc(602,`pre`)(603,`code`),Mk(604,` import { generalEn } from './i18n/general-en';
 import { generalPt } from './i18n/general-pt';
...
 general: {
   pt: generalPt,
   en: generalEn
 }
...
`),Kg()(),Jc(605,`p`),Mk(606,`E como informado, podemos utilizar a propriedade `),Jc(607,`code`),Mk(608,`url`),Kg(),Mk(609,` que deve receber a URL do servi\xE7o que
retorne as literais traduzidas, por exemplo:`),Kg(),Jc(610,`pre`)(611,`code`),Mk(612,`hcm: {
  url: 'http://localhost:3000/api/translations/hcm/'
}
`),Kg()(),Jc(613,`p`),Mk(614,`Ao optar por utilizar um servi\xE7o, dever\xE1 ser definida a URL espec\xEDfica do contexto,
como nos exemplos abaixo:`),Kg(),Jc(615,`pre`)(616,`code`),Mk(617,`http://server:port/api/translations/crm
http://server:port/api/translations/general
`),Kg()(),Jc(618,`p`),Mk(619,`Os idiomas e literais serão automaticamente buscados com parâmetros na própria URL:`),Kg(),Jc(620,`ul`)(621,`li`)(622,`code`),Mk(623,`language`),Kg(),Mk(624,`: o idioma ser\xE1 sempre passado por par\xE2metro, sendo recomendado a utiliza\xE7\xE3o do padr\xE3o suportado
pelos navegadores (`),Jc(625,`code`),Mk(626,`pt-br`),Kg(),Mk(627,`, `),Jc(628,`code`),Mk(629,`en-us`),Kg(),Mk(630,`);`),Kg(),Jc(631,`li`)(632,`code`),Mk(633,`literals`),Kg(),Mk(634,`: as literais ser\xE3o separadas por v\xEDrgula. Caso esse par\xE2metro n\xE3o seja informado, o
servi\xE7o deve retornar todas as literais do idioma.`),Kg()(),Jc(635,`p`),Mk(636,`Exemplos de requisição:`),Kg(),Jc(637,`pre`)(638,`code`),Mk(639,`http://server:port/api/translations/crm?language=pt-br
http://server:port/api/translations/crm?language=pt-br&literals=add,remove,text
`),Kg()(),Jc(640,`blockquote`)(641,`p`),Mk(642,`Sempre que o idioma solicitado não for encontrado, será buscado por `),Jc(643,`code`),Mk(644,`pt-br`),Kg(),Mk(645,`.`),Kg()(),Jc(646,`p`),Mk(647,`Existe tamb\xE9m a possibilidade de utilizar ambos, onde ser\xE1 feito a busca das literais nas constantes e depois efetua
a busca no servi\xE7o, com isso as constantes podem servir como `),Jc(648,`em`),Mk(649,`backup`),Kg(),Mk(650,` caso o serviço esteja indisponível, por exemplo:`),Kg(),Jc(651,`pre`)(652,`code`),Mk(653,` import { generalEn } from './i18n/general-en';
 import { generalPt } from './i18n/general-pt';
...
 general: {
   pt: generalPt,
   en: generalEn,
   url: 'http://localhost:3000/api/translations/hcm/'
 }
...
`),Kg()(),Jc(654,`blockquote`)(655,`p`),Mk(656,`Caso a constante contenha alguma literal que o serviço não possua será utilizado a literal da constante.`),Kg()()()(),Jc(657,`tr`,48)(658,`td`,34)(659,`div`,20)(660,`span`,21),Mk(661,` default`),_u(662,`br`),Kg()()(),Jc(663,`td`,28)(664,`code`,49),Mk(665,`PoI18nConfigDefault`),Kg()(),Jc(666,`td`,22)(667,`em`)(668,`strong`),Mk(669,`(opcional)`),Kg()(),Jc(670,`p`),Mk(671,`Configurações padrões.`),Kg()()()(),Jc(672,`h4`,50)(673,`code`,12),Mk(674,`PoI18nLiterals`),Kg()(),Jc(675,`div`,2)(676,`p`),Mk(677,`Interface para o método `),Jc(678,`code`),Mk(679,`getLiterals()`),Kg(),Mk(680,` do serviço PoI18nService.`),Kg()(),Jc(681,`h4`,16),Mk(682,`Propriedades`),Kg(),Jc(683,`table`,25)(684,`tr`,26)(685,`th`,27),Mk(686,`Nome`),Kg(),Jc(687,`th`,27),Mk(688,`Tipo`),Kg(),Jc(689,`th`,27),Mk(690,`Descrição`),Kg()(),Jc(691,`tr`,51)(692,`td`,34)(693,`div`,20)(694,`span`,21),Mk(695,` context`),_u(696,`br`),Kg()()(),Jc(697,`td`,28)(698,`code`,42),Mk(699,`string`),Kg()(),Jc(700,`td`,22)(701,`em`)(702,`strong`),Mk(703,`(opcional)`),Kg()(),Jc(704,`p`),Mk(705,`Contexto utilizado na busca das literais.`),Kg()()(),Jc(706,`tr`,52)(707,`td`,34)(708,`div`,20)(709,`span`,21),Mk(710,` language`),_u(711,`br`),Kg()()(),Jc(712,`td`,28)(713,`code`,42),Mk(714,`string`),Kg()(),Jc(715,`td`,22)(716,`em`)(717,`strong`),Mk(718,`(opcional)`),Kg()(),Jc(719,`p`),Mk(720,`Idioma a ser buscado.`),Kg()()(),Jc(721,`tr`,53)(722,`td`,34)(723,`div`,20)(724,`span`,21),Mk(725,` literals`),_u(726,`br`),Kg()()(),Jc(727,`td`,28)(728,`code`,54),Mk(729,`Array<string>`),Kg()(),Jc(730,`td`,22)(731,`em`)(732,`strong`),Mk(733,`(opcional)`),Kg()(),Jc(734,`p`),Mk(735,`Lista das literais.`),Kg()()()(),Jc(736,`h4`,55)(737,`code`,12),Mk(738,`PoLanguage`),Kg()(),Jc(739,`div`,2)(740,`p`),_u(741,`a`,56),Kg(),Jc(742,`p`),Mk(743,`Interface para descrição das linguagens disponíveis no sistema.`),Kg()(),Jc(744,`h4`,16),Mk(745,`Propriedades`),Kg(),Jc(746,`table`,25)(747,`tr`,26)(748,`th`,27),Mk(749,`Nome`),Kg(),Jc(750,`th`,27),Mk(751,`Tipo`),Kg(),Jc(752,`th`,27),Mk(753,`Descrição`),Kg()(),Jc(754,`tr`,57)(755,`td`,34)(756,`div`,20)(757,`span`,21),Mk(758,` description`),_u(759,`br`),Kg()()(),Jc(760,`td`,28)(761,`code`,42),Mk(762,`string`),Kg()(),Jc(763,`td`,22)(764,`em`)(765,`strong`),Mk(766,`(opcional)`),Kg()(),Jc(767,`p`),Mk(768,`Descrição do idioma`),Kg()()(),Jc(769,`tr`,58)(770,`td`,34)(771,`div`,20)(772,`span`,21),Mk(773,` language`),_u(774,`br`),Kg()()(),Jc(775,`td`,28)(776,`code`,42),Mk(777,`string`),Kg()(),Jc(778,`td`,22)(779,`em`)(780,`strong`),Mk(781,`(opcional)`),Kg()(),Jc(782,`p`),Mk(783,`Código do idioma `),Jc(784,`a`,59),Mk(785,`ISO 639-1`),Kg()(),Jc(786,`blockquote`)(787,`p`),Mk(788,`Exemplo: 'pt','en'`),Kg()()()()(),Jc(789,`h4`,60)(790,`code`,12),Mk(791,`PoNumberSeparator`),Kg()(),Jc(792,`div`,2)(793,`p`),_u(794,`a`,61),Kg(),Jc(795,`p`),Mk(796,`Interface para os separadores numéricos das linguagens disponíveis no sistema.`),Kg()(),Jc(797,`h4`,16),Mk(798,`Propriedades`),Kg(),Jc(799,`table`,25)(800,`tr`,26)(801,`th`,27),Mk(802,`Nome`),Kg(),Jc(803,`th`,27),Mk(804,`Tipo`),Kg(),Jc(805,`th`,27),Mk(806,`Descrição`),Kg()(),Jc(807,`tr`,62)(808,`td`,34)(809,`div`,20)(810,`span`,21),Mk(811,` language`),_u(812,`br`),Kg()()(),Jc(813,`td`,28)(814,`code`,42),Mk(815,`string`),Kg()(),Jc(816,`td`,22)(817,`em`)(818,`strong`),Mk(819,`(opcional)`),Kg()(),Jc(820,`p`),Mk(821,`Código do idioma `),Jc(822,`a`,59),Mk(823,`ISO 639-1`),Kg()(),Jc(824,`blockquote`)(825,`p`),Mk(826,`Exemplo: 'pt','en'`),Kg()()()(),Jc(827,`tr`,63)(828,`td`,34)(829,`div`,20)(830,`span`,21),Mk(831,` separator`),_u(832,`br`),Kg()()(),Jc(833,`td`,28)(834,`code`,42),Mk(835,`string`),Kg()(),Jc(836,`td`,22)(837,`em`)(838,`strong`),Mk(839,`(opcional)`),Kg()(),Jc(840,`p`),Mk(841,`Separador numérico`),Kg()()()(),Jc(842,`h4`,64)(843,`code`,12),Mk(844,`PoDateSeparator`),Kg()(),Jc(845,`div`,2)(846,`p`),_u(847,`a`,65),Kg(),Jc(848,`p`),Mk(849,`Interface para o separador de data das linguagens disponíveis no sistema.`),Kg()(),Jc(850,`h4`,16),Mk(851,`Propriedades`),Kg(),Jc(852,`table`,25)(853,`tr`,26)(854,`th`,27),Mk(855,`Nome`),Kg(),Jc(856,`th`,27),Mk(857,`Tipo`),Kg(),Jc(858,`th`,27),Mk(859,`Descrição`),Kg()(),Jc(860,`tr`,66)(861,`td`,34)(862,`div`,20)(863,`span`,21),Mk(864,` locale`),_u(865,`br`),Kg()()(),Jc(866,`td`,28)(867,`code`,42),Mk(868,`string`),Kg()(),Jc(869,`td`,22)(870,`em`)(871,`strong`),Mk(872,`(opcional)`),Kg()(),Jc(873,`p`),Mk(874,`Código do locale `),Jc(875,`a`,59),Mk(876,`ISO 639-1`),Kg()(),Jc(877,`blockquote`)(878,`p`),Mk(879,`Exemplo: 'pt','en'`),Kg()()()(),Jc(880,`tr`,67)(881,`td`,34)(882,`div`,20)(883,`span`,21),Mk(884,` separator`),_u(885,`br`),Kg()()(),Jc(886,`td`,28)(887,`code`,42),Mk(888,`string`),Kg()(),Jc(889,`td`,22)(890,`em`)(891,`strong`),Mk(892,`(opcional)`),Kg()(),Jc(893,`p`),Mk(894,`Separador de data`),Kg(),Jc(895,`blockquote`)(896,`p`),Mk(897,`Exemplo: '/','.','-'`),Kg()()()()()())},encapsulation:2,changeDetection:1})}return o})();function L(o,M){if(o&1&&_u(0,`div`,1),o&2){let r=tk();Ab(`hidden`,r.activeTab!==`web`)}}var T=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;title=`I18n`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`,this.title=`I18n · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[`data-tour-mode`,`web`,3,`hidden`],[`data-tour-mode`,`doc`,3,`hidden`]],template:function(a,l){a&1&&(Jc(0,`po-page-default`,0),LO(1,L,1,1,`div`,1),Jc(2,`div`,2),_u(3,`sample-po-i18n-doc`),Kg()()),a&2&&(Ab(`p-title`,l.title)(`p-actions`,l.actions),wg(),jO(l.hidePoWebSample?-1:1),wg(),Ab(`hidden`,l.activeTab!==`doc`))},dependencies:[Mze,q],encapsulation:2,changeDetection:1})}return o})()}];var y=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[GV.forChild(T),GV]})}return o})();var Q=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[M,y]})}return o})();export{Q as DocPoI18nModule};