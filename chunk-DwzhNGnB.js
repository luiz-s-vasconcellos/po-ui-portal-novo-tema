import{Da as pe,Fa as rg,Ga as vx,Ha as v_,Ii as b,Mr as I1,Ra as ue,Xt as ere,Ya as wg,ai as Sn,ga as m_,gr as Dx,ia as ir,ji as __,ki as Zn,ma as lO,mt as Tze,no as y_,rr as Ax,rt as Qae,sa as jc,ui as UE,va as mt,wr as Fx,xa as nu}from"./chunk-VuVfKKNQ.js";import{t as M}from"./main-7FOYFSS2.js";var L=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-i18n-doc`]],standalone:!1,decls:898,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[`href`,`documentation/po-i18n#poI18nConfig`],[`id`,`i18n-config`],[`href`,`http://10.0.0.1:3000/api/translations/crm`],[`href`,`http://10.0.0.1:3000/api/translations/general`],[`href`,`http://10.0.0.1:3000/api/translations/crm?language=pt-br`],[`href`,`http://10.0.0.1:3000/api/translations/crm?language=pt-br&literals=add,remove,text`],[`href`,`documentation/po-i18n#setLanguage`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-i18n#i18n-config`],[`href`,`https://angular.io/guide/observables`],[1,`language-typescript`],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-property-description`],[`id`,`get-language`],[`href`,`documentation/po-i18n#poI18nConfigDefault`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`],[`href`,`/documentation/po-i18n#get-language`],[`id`,`setLanguage`],[1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`id`,`poI18nConfigContext`],[`id`,`poI18nConfigDefault`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`poI18nConfig`],[`pan`,``,1,`docs-api-property-type`,`PoI18nConfigContext`],[`pan`,``,1,`docs-api-property-type`,`PoI18nConfigDefault`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`id`,`poI18nLanguage`],[`href`,`https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes`],[`id`,`PoNumberSeparator`],[`id`,`PoDateSeparator`]],template:function(a,l){a&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoI18nModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`Módulo do serviço `),jc(7,`code`),lO(8,`PoI18nService`),wg(),lO(9,` para controle de idiomas com PO.`),wg(),jc(10,`p`),lO(11,`Para utilização do serviço de idiomas `),jc(12,`code`),lO(13,`PoI18nService`),wg(),lO(14,`, deve-se importar este m\xF3dulo mesmo j\xE1 havendo importado
o m\xF3dulo `),jc(15,`code`),lO(16,`PoModule`),wg(),lO(17,`. Na importação deve ser invocado o método `),jc(18,`code`),lO(19,`config`),wg(),lO(20,`, informando um objeto que deve implementar
a interface `),jc(21,`a`,3)(22,`code`),lO(23,`PoI18nConfig`),wg()(),lO(24,` para configuração.`),wg(),jc(25,`p`),nu(26,`a`,4),jc(27,`strong`),lO(28,`Exemplo de configuração do módulo do i18n:`),wg()(),jc(29,`pre`)(30,`code`),lO(31,`import { PoI18nConfig } from '@po-ui/ng-components';

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
`),wg()(),jc(32,`p`),lO(33,`Para cada contexto \xE9 poss\xEDvel definir a origem das literais, que podem ser de um servi\xE7o REST ou
de um objeto. Exemplo:`),wg(),jc(34,`p`),lO(35,`Arquivo general-pt.ts`),wg(),jc(36,`pre`)(37,`code`),lO(38,`export const generalPt = {
 add: 'Adicionar',
 greeting: 'Prazer, {0} {1}',
 people: '{0} Pessoas,
 remove: 'Remover'
}
`),wg()(),jc(39,`p`),lO(40,`Arquivo general-en.ts`),wg(),jc(41,`pre`)(42,`code`),lO(43,`export const generalEn = {
 add: 'Add',
 greeting: 'Nice to meet you, {0} {1}',
 people: '{0} People,
 remove: 'Remove'
}
`),wg()(),jc(44,`p`)(45,`strong`),lO(46,`Exemplo de configuração de contextos usando constantes externas:`),wg()(),jc(47,`pre`)(48,`code`),lO(49,`import { PoI18nConfig } from '@po-ui/ng-components';

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
`),wg()(),jc(50,`p`)(51,`strong`),lO(52,`Exemplo de configuração de um contexto utilizando serviço:`),wg()(),jc(53,`p`),lO(54,`Ao optar por utilizar um servi\xE7o para configura\xE7\xE3o de contexto, dever\xE1 ser definida a URL
espec\xEDfica do contexto, como nos exemplos abaixo:`),wg(),jc(55,`ul`)(56,`li`)(57,`a`,5),lO(58,`http://10.0.0.1:3000/api/translations/crm`),wg()(),jc(59,`li`)(60,`a`,6),lO(61,`http://10.0.0.1:3000/api/translations/general`),wg()()(),jc(62,`p`),lO(63,`Os idiomas e literais serão automaticamente buscados com parâmetros na própria URL:`),wg(),jc(64,`ul`)(65,`li`)(66,`strong`),lO(67,`language`),wg(),lO(68,`: o idioma ser\xE1 sempre passado por par\xE2metro e \xE9 recomendado utilizar uma das linguagens
suportadas pelo PO (`),jc(69,`code`),lO(70,`pt-br`),wg(),lO(71,`, `),jc(72,`code`),lO(73,`en-us`),wg(),lO(74,`, `),jc(75,`code`),lO(76,`es-es`),wg(),lO(77,` ou `),jc(78,`code`),lO(79,`ru`),wg(),lO(80,`).`),wg(),jc(81,`li`)(82,`strong`),lO(83,`literals`),wg(),lO(84,`: as literais ser\xE3o separadas por v\xEDrgula. Caso esse par\xE2metro n\xE3o seja informado, o
servi\xE7o deve retornar todas as literais do idioma.`),wg()(),jc(85,`p`),lO(86,`Exemplos de requisição:`),wg(),jc(87,`ul`)(88,`li`)(89,`a`,7),lO(90,`http://10.0.0.1:3000/api/translations/crm?language=pt-br`),wg()(),jc(91,`li`)(92,`a`,8),lO(93,`http://10.0.0.1:3000/api/translations/crm?language=pt-br&literals=add,remove,text`),wg()()(),jc(94,`blockquote`)(95,`p`),lO(96,`Sempre que o idioma solicitado não for encontrado, será buscado por `),jc(97,`code`),lO(98,`pt-br`),wg(),lO(99,`.`),wg()(),jc(100,`p`),lO(101,`Além dos contextos, é possível definir as configurações `),jc(102,`em`),lO(103,`default`),wg(),lO(104,` do sistema na configura\xE7\xE3o do
m\xF3dulo utilizando a interface `),jc(105,`a`,3)(106,`code`),lO(107,`PoI18nConfig`),wg()(),lO(108,`:`),wg(),jc(109,`p`)(110,`strong`),lO(111,`Exemplo de padrões definidos:`),wg()(),jc(112,`pre`)(113,`code`),lO(114,`const i18nConfig: PoI18nConfig = {
  contexts: {
    general: { }
  },
  default: {
   language: 'pt-BR',
   context: 'general',
   cache: true
  }
}
`),wg()(),jc(115,`p`)(116,`strong`),lO(117,`Importante:`),wg()(),jc(118,`p`),lO(119,`Recomenda-se que as definições `),jc(120,`em`),lO(121,`default`),wg(),lO(122,` sejam realizadas apenas uma vez na aplica\xE7\xE3o,
preferencialmente no m\xF3dulo `),jc(123,`code`),lO(124,`AppModule`),wg(),lO(125,`.`),wg(),jc(126,`p`)(127,`strong`),lO(128,`i18n com `),jc(129,`em`),lO(130,`Lazy loading`),wg()()(),jc(131,`p`),lO(132,`Para aplicações que utilizem a abordagem de módulos com carregamento `),jc(133,`em`),lO(134,`lazy loading`),wg(),lO(135,`, caso seja
definida outra configura\xE7\xE3o do `),jc(136,`code`),lO(137,`PoI18nModule`),wg(),lO(138,`, deve-se atentar os seguintes detalhes:`),wg(),jc(139,`ul`)(140,`li`),lO(141,`Não defina outra `),jc(142,`em`),lO(143,`default language`),wg(),lO(144,` para este m\xF3dulo. Caso for definida, ser\xE1 sobreposta para
toda a aplica\xE7\xE3o;`),wg(),jc(145,`li`),lO(146,`Caso precise de módulos carregados via `),jc(147,`em`),lO(148,`lazy loading`),wg(),lO(149,` com linguagens diferentes, utilize o
m\xE9todo `),jc(150,`a`,9)(151,`code`),lO(152,`setLanguage()`),wg()(),lO(153,` disponibilizado pelo `),jc(154,`code`),lO(155,`PoI18nService`),wg(),lO(156,`
para definir a linguagem da aplica\xE7\xE3o e dos m\xF3dulos com as linguagens diferentes.`),wg()()(),jc(157,`h3`,10),lO(158,`Services`),wg(),jc(159,`h4`,11)(160,`code`,12),lO(161,`PoI18nService`),wg()(),jc(162,`div`,2)(163,`p`),lO(164,`O serviço `),jc(165,`code`),lO(166,`PoI18nService`),wg(),lO(167,` possibilita utilizar múltiplos idiomas e contextos na aplicação.`),wg(),jc(168,`blockquote`)(169,`p`),lO(170,`Antes da utiliza\xE7\xE3o do servi\xE7o, \xE9 necess\xE1rio realizar a
`),jc(171,`a`,13),lO(172,`importação e configuração do módulo `),jc(173,`code`),lO(174,`PoI18nModule`),wg()(),lO(175,`.`),wg()(),jc(176,`p`)(177,`strong`),lO(178,`Utilização do serviço `),jc(179,`code`),lO(180,`PoI18nService`),wg(),lO(181,`:`),wg()(),jc(182,`p`),lO(183,`Para utilizar o servi\xE7o basta import\xE1-lo nos componentes que necessitarem de literais e fazer a inje\xE7\xE3o de
depend\xEAncia no construtor:`),wg(),jc(184,`pre`)(185,`code`),lO(186,`import { PoI18nService } from '@po-ui/ng-components';
...
constructor(private poI18nService: PoI18nService) { }
...
`),wg()(),jc(187,`p`),lO(188,`Por fim realizar a busca pelas literais, inscrevendo-se no `),jc(189,`a`,14),lO(190,`Observable`),wg(),lO(191,` pelo
m\xE9todo `),jc(192,`code`),lO(193,`getLiterals()`),wg(),lO(194,`.`),wg(),jc(195,`blockquote`)(196,`p`),lO(197,`O método `),jc(198,`code`),lO(199,`getLiterals()`),wg(),lO(200,` pode receber um objeto do tipo da interface `),jc(201,`code`),lO(202,`PoI18nLiterals`),wg(),lO(203,` como par\xE2metro,
por\xE9m, nenhuma das propriedades s\xE3o obrigat\xF3rias. Caso nenhum par\xE2metro seja passado, ser\xE3o buscadas
todas as literais do contexto definido com padr\xE3o, no idioma definido como padr\xE3o.`),wg()(),jc(204,`ul`)(205,`li`)(206,`h2`),lO(207,`Alterações a partir da versão 19`),wg()()(),jc(208,`p`),lO(209,`A partir da vers\xE3o 19, para evitar conflitos com bibliotecas de terceiros que tamb\xE9m utilizam i18n,
\xE9 necess\xE1rio passar explicitamente o contexto ao chamar `),jc(210,`code`),lO(211,`getLiterals`),wg(),lO(212,`, garantindo a correta exibi\xE7\xE3o das literais.
Caso `),jc(213,`code`),lO(214,`getLiterals`),wg(),lO(215,` seja chamado sem parâmetros, o retorno pode vir das configurações da biblioteca de terceiros.`),wg(),jc(216,`p`)(217,`strong`),lO(218,`Exemplo de chamada com contexto explícito:`),wg()(),jc(219,`pre`)(220,`code`,15),lO(221,`poI18nService.getLiterals({ context: 'general' }).subscribe(literals => console.log(literals));
`),wg()(),jc(222,`p`)(223,`strong`),lO(224,`Cenário de Contextos Iguais:`),wg(),lO(225,`
Caso tanto a aplica\xE7\xE3o quanto uma biblioteca de terceiros utilizem o mesmo nome de contexto,
o PO UI far\xE1 um merge das literais, priorizando os valores definidos na aplica\xE7\xE3o cliente.`),wg(),jc(226,`p`)(227,`strong`),lO(228,`Recomendações:`),wg()(),jc(229,`ul`)(230,`li`),lO(231,`Sempre informar o contexto ao chamar `),jc(232,`code`),lO(233,`getLiterals`),wg(),lO(234,` para evitar conflitos de literais.`),wg(),jc(235,`li`),lO(236,`Caso a aplicação utilize `),jc(237,`code`),lO(238,`lazy loading`),wg(),lO(239,`, utilizar `),jc(240,`code`),lO(241,`setLanguage()`),wg(),lO(242,` para garantir a correta configuração de idioma.`),wg()(),jc(243,`p`),lO(244,`Exemplos de requisição:`),wg(),jc(245,`pre`)(246,`code`),lO(247,`literals = {};
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
`),wg()(),jc(248,`p`),lO(249,`Para apresentar as literais capturadas acima no HTML do componente, deve-se utilizar o
seguinte c\xF3digo:`),wg(),jc(250,`pre`),y_(),lO(251,`{{ literals?.add }}
{{ literals?.remove }}
`),m_(),wg(),jc(252,`p`),lO(253,`Caso as literais contenham variáveis que precisem ser substituídas, pode-se utilizar o `),jc(254,`em`),lO(255,`pipe`),wg(),jc(256,`code`),lO(257,`poI18n`),wg(),lO(258,`.
\xC9 poss\xEDvel informar propriedades do componente como `),jc(259,`code`),lO(260,`name`),wg(),lO(261,` e `),jc(262,`code`),lO(263,`nickname`),wg(),lO(264,` ou
informar o valor diretamente com "" ou n\xFAmero, conforme o exemplo abaixo:`),wg(),jc(265,`pre`),y_(),lO(266,`{{ literals?.people | poI18n:[120] }}
{{ literals?.greeting | poI18n:[name, nickname] }}
{{ literals?.greeting | poI18n:["Brad", "Green"] }}
`),m_(),wg(),jc(267,`blockquote`)(268,`p`),lO(269,`É importante o uso do operador `),jc(270,`code`),lO(271,`?`),wg(),lO(272,` (Elvis) para evitar erros enquanto as literais não forem carregadas.`),wg()(),jc(273,`h3`),lO(274,`Teste unitário`),wg(),jc(275,`p`),lO(276,`Abaixo segue um exemplo de `),jc(277,`em`),lO(278,`setup`),wg(),lO(279,` inicial de teste unitário do `),jc(280,`em`),lO(281,`AppComponent`),wg(),lO(282,` que utiliza o `),jc(283,`code`),lO(284,`PoI18nService`),wg(),lO(285,`:`),wg(),jc(286,`blockquote`)(287,`p`),lO(288,`Atenção: não declarar o `),jc(289,`code`),lO(290,`PoI18nService`),wg(),lO(291,` no providers do TestBed pois a biblioteca realiza a inje\xE7\xE3o de depend\xEAncia de forma din\xE2mica.
Se o servi\xE7o for declarado o teste n\xE3o far\xE1 a inje\xE7\xE3o e o teste apresentar\xE1 erros.`),wg()(),jc(292,`pre`)(293,`code`),lO(294,`import { async, TestBed } from '@angular/core/testing';
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
`),wg()()(),jc(295,`h3`,16),lO(296,`Métodos`),wg(),jc(297,`table`,17)(298,`tr`,18)(299,`th`,19)(300,`div`,20)(301,`h4`)(302,`span`,21),lO(303,` getLanguage `),wg()()()()(),jc(304,`tr`,22)(305,`td`,22)(306,`p`),nu(307,`a`,23),lO(308,`
M\xE9todo que retorna o idioma padr\xE3o ativo.`),wg(),jc(309,`p`),lO(310,`A busca deste idioma pelo método será feita na seguinte ordem:`),wg(),jc(311,`p`),lO(312,` 1 - o idioma que foi armazenado no `),jc(313,`em`),lO(314,`localStorage`),wg(),lO(315,`, através do método `),jc(316,`a`,9)(317,`code`),lO(318,`setLanguage()`),wg()(),lO(319,`.`),wg(),jc(320,`p`),lO(321,` 2 - o valor inserido no módulo do i18n através do parâmetro `),jc(322,`code`),lO(323,`config`),wg(),lO(324,`, sendo o idioma inserido na propriedade
`),jc(325,`code`),lO(326,`language`),wg(),lO(327,` da interface `),jc(328,`a`,24)(329,`code`),lO(330,`PoI18nConfigDefault`),wg()(),lO(331,`.`),wg(),jc(332,`p`),lO(333,` 3 - o idioma do navegador utilizado.`),wg(),jc(334,`blockquote`)(335,`p`),lO(336,`Caso o idioma do navegador não seja suportado pelo PO (`),jc(337,`code`),lO(338,`pt`),wg(),lO(339,`, `),jc(340,`code`),lO(341,`en`),wg(),lO(342,`, `),jc(343,`code`),lO(344,`es`),wg(),lO(345,` ou `),jc(346,`code`),lO(347,`ru`),wg(),lO(348,`), será retornado valor `),jc(349,`code`),lO(350,`pt`),wg(),lO(351,`.`),wg()()()()(),jc(352,`h5`)(353,`b`),lO(354,`Retorno`),wg()(),jc(355,`table`,25)(356,`tr`,26)(357,`th`,27),lO(358,`Tipo`),wg(),jc(359,`th`,27),lO(360,`Descrição`),wg()(),jc(361,`tr`,18)(362,`td`,28)(363,`code`,29),lO(364,`string`),wg()(),jc(365,`td`,22)(366,`p`),lO(367,`sigla do idioma padrão.`),wg()()()(),nu(368,`br`),jc(369,`table`,17)(370,`tr`,18)(371,`th`,19)(372,`div`,20)(373,`h4`)(374,`span`,21),lO(375,` getShortLanguage `),wg()()()()(),jc(376,`tr`,22)(377,`td`,22)(378,`p`),lO(379,`M\xE9todo que retorna o idioma padr\xE3o ativo, com somente a abrevia\xE7\xE3o do idioma (duas primeiras letras).
Por exemplo: "pt" ou "es".`),wg(),jc(380,`p`),lO(381,`A busca deste idioma é baseada no método `),jc(382,`a`,30)(383,`strong`),lO(384,`getLanguage()`),wg()(),lO(385,`.`),wg()()()(),jc(386,`h5`)(387,`b`),lO(388,`Retorno`),wg()(),jc(389,`table`,25)(390,`tr`,26)(391,`th`,27),lO(392,`Tipo`),wg(),jc(393,`th`,27),lO(394,`Descrição`),wg()(),jc(395,`tr`,18)(396,`td`,28)(397,`code`,29),lO(398,`string`),wg()(),jc(399,`td`,22)(400,`p`),lO(401,`sigla do idioma padrão.`),wg()()()(),nu(402,`br`),jc(403,`table`,17)(404,`tr`,18)(405,`th`,19)(406,`div`,20)(407,`h4`)(408,`span`,21),lO(409,` setLanguage `),wg()()()()(),jc(410,`tr`,22)(411,`td`,22)(412,`p`),nu(413,`a`,31),lO(414,`
M\xE9todo para alterar o idioma padr\xE3o do m\xF3dulo do i18n.`),wg(),jc(415,`p`),lO(416,`Ao utilizar este m\xE9todo, o idioma ficar\xE1 gravado no armazenamento local do navegador, que ser\xE1 utilizado pelo
servi\xE7o do `),jc(417,`code`),lO(418,`i18n`),wg(),lO(419,` para buscar as literais no idioma padrão.`),wg()()()(),jc(420,`h5`)(421,`b`),lO(422,`Parâmetros`),wg()(),jc(423,`table`,25)(424,`tr`,26)(425,`th`,27),lO(426,`Nome`),wg(),jc(427,`th`,27),lO(428,`Tipo`),wg(),jc(429,`th`,27),lO(430,`Descrição`),wg()(),jc(431,`tr`,18)(432,`td`,32),lO(433,` language`),wg(),jc(434,`td`,28)(435,`code`,29),lO(436,` string `),wg()(),jc(437,`td`,22)(438,`p`),lO(439,`Sigla do idioma.`),wg(),jc(440,`p`),lO(441,`Esta sigla deve ser composta por duas letras representando o idioma,
podendo ser adicionado outras duas letras representando o pa\xEDs, por exemplo: `),jc(442,`code`),lO(443,`pt`),wg(),lO(444,`, `),jc(445,`code`),lO(446,`pt-BR`),wg(),lO(447,`, `),jc(448,`code`),lO(449,`pt-br`),wg(),lO(450,`, `),jc(451,`code`),lO(452,`en`),wg(),lO(453,` ou `),jc(454,`code`),lO(455,`en-US`),wg(),lO(456,`.`),wg(),jc(457,`blockquote`)(458,`p`),lO(459,`Caso seja informado um valor diferente deste padrão, o mesmo será ignorado.`),wg()()()(),jc(460,`tr`,18)(461,`td`,32),lO(462,` reload`),wg(),jc(463,`td`,28)(464,`code`,29),lO(465,` boolean `),wg()(),jc(466,`td`,22)(467,`p`),lO(468,`Indica se a página atual poderá ser recarregada após a alteração do idioma.`),wg(),jc(469,`p`),lO(470,`Este recurso pode ser útil para os usuários que utilizam o método `),jc(471,`code`),lO(472,`getLiterals()`),wg(),lO(473,` do servi\xE7o do i18n para poder
buscar novamente as literais no novo idioma configurado.`),wg()()()(),nu(474,`br`),jc(475,`h3`),lO(476,`Interfaces`),wg(),jc(477,`h4`,33)(478,`code`,12),lO(479,`PoI18nConfigContext`),wg()(),jc(480,`div`,2)(481,`p`),nu(482,`a`,34),wg(),jc(483,`p`),lO(484,`Interface para a configuração dos contextos do módulo `),jc(485,`code`),lO(486,`PoI18nModule`),wg(),lO(487,`.`),wg()(),jc(488,`h4`,33)(489,`code`,12),lO(490,`PoI18nConfigDefault`),wg()(),jc(491,`div`,2)(492,`p`),nu(493,`a`,35),wg(),jc(494,`p`),lO(495,`Interface para a configuração padrão do módulo PoI18nModule.`),wg()(),jc(496,`h4`,16),lO(497,`Propriedades`),wg(),jc(498,`table`,25)(499,`tr`,26)(500,`th`,27),lO(501,`Nome`),wg(),jc(502,`th`,27),lO(503,`Tipo`),wg(),jc(504,`th`,27),lO(505,`Descrição`),wg()(),jc(506,`tr`,18)(507,`td`,32)(508,`div`,20)(509,`span`,21),lO(510,` cache`),nu(511,`br`),wg()()(),jc(512,`td`,28)(513,`code`,36),lO(514,`boolean`),wg()(),jc(515,`td`,22)(516,`em`)(517,`strong`),lO(518,`(opcional)`),wg()(),jc(519,`p`),lO(520,`Define se as literais buscadas no servi\xE7o dever\xE3o ser armazenadas no cache do
navegador, lembrando que cada navegador possui sua pr\xF3pria limita\xE7\xE3o de cache.`),wg(),jc(521,`p`),lO(522,`Para contextos com grande quantidade de literais, recomenda-se o uso de constantes ao inv\xE9s de servi\xE7os, desta forma
n\xE3o ser\xE1 usado o cache do navegador.`),wg(),jc(523,`p`),lO(524,`Por padrão não utiliza.`),wg()()(),jc(525,`tr`,18)(526,`td`,32)(527,`div`,20)(528,`span`,21),lO(529,` context`),nu(530,`br`),wg()()(),jc(531,`td`,28)(532,`code`,37),lO(533,`string`),wg()(),jc(534,`td`,22)(535,`em`)(536,`strong`),lO(537,`(opcional)`),wg()(),jc(538,`p`),lO(539,`Define o contexto que será buscado por padrão pelo serviço.`),wg(),jc(540,`blockquote`)(541,`p`),lO(542,`Caso não seja especificado será usado o primeiro contexto da lista de contextos.`),wg()()()(),jc(543,`tr`,18)(544,`td`,32)(545,`div`,20)(546,`span`,21),lO(547,` language`),nu(548,`br`),wg()()(),jc(549,`td`,28)(550,`code`,37),lO(551,`string`),wg()(),jc(552,`td`,22)(553,`em`)(554,`strong`),lO(555,`(opcional)`),wg()(),jc(556,`p`),lO(557,`Idioma que será buscado por padrão pelo serviço.`),wg(),jc(558,`p`),lO(559,`Esta defini\xE7\xE3o somente ser\xE1 utilizada se n\xE3o tiver sido definido o idioma atrav\xE9s do m\xE9todo
`),jc(560,`a`,9)(561,`code`),lO(562,`setLanguage()`),wg()(),lO(563,`. Caso nenhum dos dois tenha sido configurado, ser\xE1 utilizado
o idioma do navegador.`),wg()()()(),jc(564,`h4`,33)(565,`code`,12),lO(566,`PoI18nConfig`),wg()(),jc(567,`div`,2)(568,`p`),nu(569,`a`,38),wg(),jc(570,`p`),lO(571,`Interface para a configuração do módulo `),jc(572,`code`),lO(573,`PoI18nModule`),wg(),lO(574,`.`),wg()(),jc(575,`h4`,16),lO(576,`Propriedades`),wg(),jc(577,`table`,25)(578,`tr`,26)(579,`th`,27),lO(580,`Nome`),wg(),jc(581,`th`,27),lO(582,`Tipo`),wg(),jc(583,`th`,27),lO(584,`Descrição`),wg()(),jc(585,`tr`,18)(586,`td`,32)(587,`div`,20)(588,`span`,21),lO(589,` contexts`),nu(590,`br`),wg()()(),jc(591,`td`,28)(592,`code`,39),lO(593,`PoI18nConfigContext`),wg()(),jc(594,`td`,22)(595,`p`),lO(596,`Deve ser atribu\xEDdo a esta propriedade um objeto que contenha os contextos com os
idiomas suportados e suas respectivas tradu\xE7\xF5es literais,
como tamb\xE9m informar a propriedade `),jc(597,`code`),lO(598,`url`),wg(),lO(599,` onde pode ser informado o serviço que retorne as literais traduzidas.`),wg(),jc(600,`p`),lO(601,`Portanto podemos utilizar constantes, onde devemos informar o nome do contexto recebendo um objeto com os
idiomas suportados e o arquivo de literais, por exemplo:`),wg(),jc(602,`pre`)(603,`code`),lO(604,` import { generalEn } from './i18n/general-en';
 import { generalPt } from './i18n/general-pt';
...
 general: {
   pt: generalPt,
   en: generalEn
 }
...
`),wg()(),jc(605,`p`),lO(606,`E como informado, podemos utilizar a propriedade `),jc(607,`code`),lO(608,`url`),wg(),lO(609,` que deve receber a URL do servi\xE7o que
retorne as literais traduzidas, por exemplo:`),wg(),jc(610,`pre`)(611,`code`),lO(612,`hcm: {
  url: 'http://localhost:3000/api/translations/hcm/'
}
`),wg()(),jc(613,`p`),lO(614,`Ao optar por utilizar um servi\xE7o, dever\xE1 ser definida a URL espec\xEDfica do contexto,
como nos exemplos abaixo:`),wg(),jc(615,`pre`)(616,`code`),lO(617,`http://server:port/api/translations/crm
http://server:port/api/translations/general
`),wg()(),jc(618,`p`),lO(619,`Os idiomas e literais serão automaticamente buscados com parâmetros na própria URL:`),wg(),jc(620,`ul`)(621,`li`)(622,`code`),lO(623,`language`),wg(),lO(624,`: o idioma ser\xE1 sempre passado por par\xE2metro, sendo recomendado a utiliza\xE7\xE3o do padr\xE3o suportado
pelos navegadores (`),jc(625,`code`),lO(626,`pt-br`),wg(),lO(627,`, `),jc(628,`code`),lO(629,`en-us`),wg(),lO(630,`);`),wg(),jc(631,`li`)(632,`code`),lO(633,`literals`),wg(),lO(634,`: as literais ser\xE3o separadas por v\xEDrgula. Caso esse par\xE2metro n\xE3o seja informado, o
servi\xE7o deve retornar todas as literais do idioma.`),wg()(),jc(635,`p`),lO(636,`Exemplos de requisição:`),wg(),jc(637,`pre`)(638,`code`),lO(639,`http://server:port/api/translations/crm?language=pt-br
http://server:port/api/translations/crm?language=pt-br&literals=add,remove,text
`),wg()(),jc(640,`blockquote`)(641,`p`),lO(642,`Sempre que o idioma solicitado não for encontrado, será buscado por `),jc(643,`code`),lO(644,`pt-br`),wg(),lO(645,`.`),wg()(),jc(646,`p`),lO(647,`Existe tamb\xE9m a possibilidade de utilizar ambos, onde ser\xE1 feito a busca das literais nas constantes e depois efetua
a busca no servi\xE7o, com isso as constantes podem servir como `),jc(648,`em`),lO(649,`backup`),wg(),lO(650,` caso o serviço esteja indisponível, por exemplo:`),wg(),jc(651,`pre`)(652,`code`),lO(653,` import { generalEn } from './i18n/general-en';
 import { generalPt } from './i18n/general-pt';
...
 general: {
   pt: generalPt,
   en: generalEn,
   url: 'http://localhost:3000/api/translations/hcm/'
 }
...
`),wg()(),jc(654,`blockquote`)(655,`p`),lO(656,`Caso a constante contenha alguma literal que o serviço não possua será utilizado a literal da constante.`),wg()()()(),jc(657,`tr`,18)(658,`td`,32)(659,`div`,20)(660,`span`,21),lO(661,` default`),nu(662,`br`),wg()()(),jc(663,`td`,28)(664,`code`,40),lO(665,`PoI18nConfigDefault`),wg()(),jc(666,`td`,22)(667,`em`)(668,`strong`),lO(669,`(opcional)`),wg()(),jc(670,`p`),lO(671,`Configurações padrões.`),wg()()()(),jc(672,`h4`,33)(673,`code`,12),lO(674,`PoI18nLiterals`),wg()(),jc(675,`div`,2)(676,`p`),lO(677,`Interface para o método `),jc(678,`code`),lO(679,`getLiterals()`),wg(),lO(680,` do serviço PoI18nService.`),wg()(),jc(681,`h4`,16),lO(682,`Propriedades`),wg(),jc(683,`table`,25)(684,`tr`,26)(685,`th`,27),lO(686,`Nome`),wg(),jc(687,`th`,27),lO(688,`Tipo`),wg(),jc(689,`th`,27),lO(690,`Descrição`),wg()(),jc(691,`tr`,18)(692,`td`,32)(693,`div`,20)(694,`span`,21),lO(695,` context`),nu(696,`br`),wg()()(),jc(697,`td`,28)(698,`code`,37),lO(699,`string`),wg()(),jc(700,`td`,22)(701,`em`)(702,`strong`),lO(703,`(opcional)`),wg()(),jc(704,`p`),lO(705,`Contexto utilizado na busca das literais.`),wg()()(),jc(706,`tr`,18)(707,`td`,32)(708,`div`,20)(709,`span`,21),lO(710,` language`),nu(711,`br`),wg()()(),jc(712,`td`,28)(713,`code`,37),lO(714,`string`),wg()(),jc(715,`td`,22)(716,`em`)(717,`strong`),lO(718,`(opcional)`),wg()(),jc(719,`p`),lO(720,`Idioma a ser buscado.`),wg()()(),jc(721,`tr`,18)(722,`td`,32)(723,`div`,20)(724,`span`,21),lO(725,` literals`),nu(726,`br`),wg()()(),jc(727,`td`,28)(728,`code`,41),lO(729,`Array<string>`),wg()(),jc(730,`td`,22)(731,`em`)(732,`strong`),lO(733,`(opcional)`),wg()(),jc(734,`p`),lO(735,`Lista das literais.`),wg()()()(),jc(736,`h4`,33)(737,`code`,12),lO(738,`PoLanguage`),wg()(),jc(739,`div`,2)(740,`p`),nu(741,`a`,42),wg(),jc(742,`p`),lO(743,`Interface para descrição das linguagens disponíveis no sistema.`),wg()(),jc(744,`h4`,16),lO(745,`Propriedades`),wg(),jc(746,`table`,25)(747,`tr`,26)(748,`th`,27),lO(749,`Nome`),wg(),jc(750,`th`,27),lO(751,`Tipo`),wg(),jc(752,`th`,27),lO(753,`Descrição`),wg()(),jc(754,`tr`,18)(755,`td`,32)(756,`div`,20)(757,`span`,21),lO(758,` description`),nu(759,`br`),wg()()(),jc(760,`td`,28)(761,`code`,37),lO(762,`string`),wg()(),jc(763,`td`,22)(764,`em`)(765,`strong`),lO(766,`(opcional)`),wg()(),jc(767,`p`),lO(768,`Descrição do idioma`),wg()()(),jc(769,`tr`,18)(770,`td`,32)(771,`div`,20)(772,`span`,21),lO(773,` language`),nu(774,`br`),wg()()(),jc(775,`td`,28)(776,`code`,37),lO(777,`string`),wg()(),jc(778,`td`,22)(779,`em`)(780,`strong`),lO(781,`(opcional)`),wg()(),jc(782,`p`),lO(783,`Código do idioma `),jc(784,`a`,43),lO(785,`ISO 639-1`),wg()(),jc(786,`blockquote`)(787,`p`),lO(788,`Exemplo: 'pt','en'`),wg()()()()(),jc(789,`h4`,33)(790,`code`,12),lO(791,`PoNumberSeparator`),wg()(),jc(792,`div`,2)(793,`p`),nu(794,`a`,44),wg(),jc(795,`p`),lO(796,`Interface para os separadores numéricos das linguagens disponíveis no sistema.`),wg()(),jc(797,`h4`,16),lO(798,`Propriedades`),wg(),jc(799,`table`,25)(800,`tr`,26)(801,`th`,27),lO(802,`Nome`),wg(),jc(803,`th`,27),lO(804,`Tipo`),wg(),jc(805,`th`,27),lO(806,`Descrição`),wg()(),jc(807,`tr`,18)(808,`td`,32)(809,`div`,20)(810,`span`,21),lO(811,` language`),nu(812,`br`),wg()()(),jc(813,`td`,28)(814,`code`,37),lO(815,`string`),wg()(),jc(816,`td`,22)(817,`em`)(818,`strong`),lO(819,`(opcional)`),wg()(),jc(820,`p`),lO(821,`Código do idioma `),jc(822,`a`,43),lO(823,`ISO 639-1`),wg()(),jc(824,`blockquote`)(825,`p`),lO(826,`Exemplo: 'pt','en'`),wg()()()(),jc(827,`tr`,18)(828,`td`,32)(829,`div`,20)(830,`span`,21),lO(831,` separator`),nu(832,`br`),wg()()(),jc(833,`td`,28)(834,`code`,37),lO(835,`string`),wg()(),jc(836,`td`,22)(837,`em`)(838,`strong`),lO(839,`(opcional)`),wg()(),jc(840,`p`),lO(841,`Separador numérico`),wg()()()(),jc(842,`h4`,33)(843,`code`,12),lO(844,`PoDateSeparator`),wg()(),jc(845,`div`,2)(846,`p`),nu(847,`a`,45),wg(),jc(848,`p`),lO(849,`Interface para o separador de data das linguagens disponíveis no sistema.`),wg()(),jc(850,`h4`,16),lO(851,`Propriedades`),wg(),jc(852,`table`,25)(853,`tr`,26)(854,`th`,27),lO(855,`Nome`),wg(),jc(856,`th`,27),lO(857,`Tipo`),wg(),jc(858,`th`,27),lO(859,`Descrição`),wg()(),jc(860,`tr`,18)(861,`td`,32)(862,`div`,20)(863,`span`,21),lO(864,` locale`),nu(865,`br`),wg()()(),jc(866,`td`,28)(867,`code`,37),lO(868,`string`),wg()(),jc(869,`td`,22)(870,`em`)(871,`strong`),lO(872,`(opcional)`),wg()(),jc(873,`p`),lO(874,`Código do locale `),jc(875,`a`,43),lO(876,`ISO 639-1`),wg()(),jc(877,`blockquote`)(878,`p`),lO(879,`Exemplo: 'pt','en'`),wg()()()(),jc(880,`tr`,18)(881,`td`,32)(882,`div`,20)(883,`span`,21),lO(884,` separator`),nu(885,`br`),wg()()(),jc(886,`td`,28)(887,`code`,37),lO(888,`string`),wg()(),jc(889,`td`,22)(890,`em`)(891,`strong`),lO(892,`(opcional)`),wg()(),jc(893,`p`),lO(894,`Separador de data`),wg(),jc(895,`blockquote`)(896,`p`),lO(897,`Exemplo: '/','.','-'`),wg()()()()()())},encapsulation:2,changeDetection:1})}return o})();function j(o,_){if(o&1){let r=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(r);let l=Fx();return __(l.changeTab(`web`))}),wg()}if(o&2){let r=Fx();UE(`p-active`,r.activeTab===`web`)}}var R=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(b(ir),b(Sn))};static ɵcmp=Zn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`I18n`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,l){a&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,j,1,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return l.changeTab(`doc`)}),nu(4,`sample-po-i18n-doc`),wg()()()),a&2&&(UE(`p-actions`,l.actions),rg(2),Dx(l.hidePoWebSample?-1:2),rg(),UE(`p-active`,l.activeTab===`doc`))},dependencies:[Tze,Qae,ere,L],encapsulation:2,changeDetection:1})}return o})()}];var A=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=pe({type:o});static ɵinj=ue({imports:[I1.forChild(R),I1]})}return o})();var Y=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=pe({type:o});static ɵinj=ue({imports:[M,A]})}return o})();export{Y as DocPoI18nModule};