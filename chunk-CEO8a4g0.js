import{t as M}from"./main-G4GMLTOQ.js";import{Ei as WV,Fr as Jc,H as Mze,Hi as ar,Ii as ZO,Mn as tre,Mt as are,Nr as Ig,Or as H_,Ri as Zg,Rr as Jn,Vi as _u,Zn as $_,ea as ge,er as Ab,gi as Tk,ir as BO,jr as I,nr as An,or as B_,qa as vt,qi as de,va as nk,xi as VO,yi as U_}from"./chunk-BJubg121.js";var L=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-i18n-doc`]],standalone:!1,decls:898,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[`href`,`documentation/po-i18n#poI18nConfig`],[`id`,`i18n-config`],[`href`,`http://10.0.0.1:3000/api/translations/crm`],[`href`,`http://10.0.0.1:3000/api/translations/general`],[`href`,`http://10.0.0.1:3000/api/translations/crm?language=pt-br`],[`href`,`http://10.0.0.1:3000/api/translations/crm?language=pt-br&literals=add,remove,text`],[`href`,`documentation/po-i18n#setLanguage`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-i18n#i18n-config`],[`href`,`https://angular.io/guide/observables`],[1,`language-typescript`],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-property-description`],[`id`,`get-language`],[`href`,`documentation/po-i18n#poI18nConfigDefault`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`],[`href`,`/documentation/po-i18n#get-language`],[`id`,`setLanguage`],[1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`id`,`poI18nConfigContext`],[`id`,`poI18nConfigDefault`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`poI18nConfig`],[`pan`,``,1,`docs-api-property-type`,`PoI18nConfigContext`],[`pan`,``,1,`docs-api-property-type`,`PoI18nConfigDefault`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`id`,`poI18nLanguage`],[`href`,`https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes`],[`id`,`PoNumberSeparator`],[`id`,`PoDateSeparator`]],template:function(a,l){a&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoI18nModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do serviço `),Jc(7,`code`),Tk(8,`PoI18nService`),Zg(),Tk(9,` para controle de idiomas com PO.`),Zg(),Jc(10,`p`),Tk(11,`Para utilização do serviço de idiomas `),Jc(12,`code`),Tk(13,`PoI18nService`),Zg(),Tk(14,`, deve-se importar este m\xF3dulo mesmo j\xE1 havendo importado
o m\xF3dulo `),Jc(15,`code`),Tk(16,`PoModule`),Zg(),Tk(17,`. Na importação deve ser invocado o método `),Jc(18,`code`),Tk(19,`config`),Zg(),Tk(20,`, informando um objeto que deve implementar
a interface `),Jc(21,`a`,3)(22,`code`),Tk(23,`PoI18nConfig`),Zg()(),Tk(24,` para configuração.`),Zg(),Jc(25,`p`),_u(26,`a`,4),Jc(27,`strong`),Tk(28,`Exemplo de configuração do módulo do i18n:`),Zg()(),Jc(29,`pre`)(30,`code`),Tk(31,`import { PoI18nConfig } from '@po-ui/ng-components';

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
`),Zg()(),Jc(32,`p`),Tk(33,`Para cada contexto \xE9 poss\xEDvel definir a origem das literais, que podem ser de um servi\xE7o REST ou
de um objeto. Exemplo:`),Zg(),Jc(34,`p`),Tk(35,`Arquivo general-pt.ts`),Zg(),Jc(36,`pre`)(37,`code`),Tk(38,`export const generalPt = {
 add: 'Adicionar',
 greeting: 'Prazer, {0} {1}',
 people: '{0} Pessoas,
 remove: 'Remover'
}
`),Zg()(),Jc(39,`p`),Tk(40,`Arquivo general-en.ts`),Zg(),Jc(41,`pre`)(42,`code`),Tk(43,`export const generalEn = {
 add: 'Add',
 greeting: 'Nice to meet you, {0} {1}',
 people: '{0} People,
 remove: 'Remove'
}
`),Zg()(),Jc(44,`p`)(45,`strong`),Tk(46,`Exemplo de configuração de contextos usando constantes externas:`),Zg()(),Jc(47,`pre`)(48,`code`),Tk(49,`import { PoI18nConfig } from '@po-ui/ng-components';

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
`),Zg()(),Jc(50,`p`)(51,`strong`),Tk(52,`Exemplo de configuração de um contexto utilizando serviço:`),Zg()(),Jc(53,`p`),Tk(54,`Ao optar por utilizar um servi\xE7o para configura\xE7\xE3o de contexto, dever\xE1 ser definida a URL
espec\xEDfica do contexto, como nos exemplos abaixo:`),Zg(),Jc(55,`ul`)(56,`li`)(57,`a`,5),Tk(58,`http://10.0.0.1:3000/api/translations/crm`),Zg()(),Jc(59,`li`)(60,`a`,6),Tk(61,`http://10.0.0.1:3000/api/translations/general`),Zg()()(),Jc(62,`p`),Tk(63,`Os idiomas e literais serão automaticamente buscados com parâmetros na própria URL:`),Zg(),Jc(64,`ul`)(65,`li`)(66,`strong`),Tk(67,`language`),Zg(),Tk(68,`: o idioma ser\xE1 sempre passado por par\xE2metro e \xE9 recomendado utilizar uma das linguagens
suportadas pelo PO (`),Jc(69,`code`),Tk(70,`pt-br`),Zg(),Tk(71,`, `),Jc(72,`code`),Tk(73,`en-us`),Zg(),Tk(74,`, `),Jc(75,`code`),Tk(76,`es-es`),Zg(),Tk(77,` ou `),Jc(78,`code`),Tk(79,`ru`),Zg(),Tk(80,`).`),Zg(),Jc(81,`li`)(82,`strong`),Tk(83,`literals`),Zg(),Tk(84,`: as literais ser\xE3o separadas por v\xEDrgula. Caso esse par\xE2metro n\xE3o seja informado, o
servi\xE7o deve retornar todas as literais do idioma.`),Zg()(),Jc(85,`p`),Tk(86,`Exemplos de requisição:`),Zg(),Jc(87,`ul`)(88,`li`)(89,`a`,7),Tk(90,`http://10.0.0.1:3000/api/translations/crm?language=pt-br`),Zg()(),Jc(91,`li`)(92,`a`,8),Tk(93,`http://10.0.0.1:3000/api/translations/crm?language=pt-br&literals=add,remove,text`),Zg()()(),Jc(94,`blockquote`)(95,`p`),Tk(96,`Sempre que o idioma solicitado não for encontrado, será buscado por `),Jc(97,`code`),Tk(98,`pt-br`),Zg(),Tk(99,`.`),Zg()(),Jc(100,`p`),Tk(101,`Além dos contextos, é possível definir as configurações `),Jc(102,`em`),Tk(103,`default`),Zg(),Tk(104,` do sistema na configura\xE7\xE3o do
m\xF3dulo utilizando a interface `),Jc(105,`a`,3)(106,`code`),Tk(107,`PoI18nConfig`),Zg()(),Tk(108,`:`),Zg(),Jc(109,`p`)(110,`strong`),Tk(111,`Exemplo de padrões definidos:`),Zg()(),Jc(112,`pre`)(113,`code`),Tk(114,`const i18nConfig: PoI18nConfig = {
  contexts: {
    general: { }
  },
  default: {
   language: 'pt-BR',
   context: 'general',
   cache: true
  }
}
`),Zg()(),Jc(115,`p`)(116,`strong`),Tk(117,`Importante:`),Zg()(),Jc(118,`p`),Tk(119,`Recomenda-se que as definições `),Jc(120,`em`),Tk(121,`default`),Zg(),Tk(122,` sejam realizadas apenas uma vez na aplica\xE7\xE3o,
preferencialmente no m\xF3dulo `),Jc(123,`code`),Tk(124,`AppModule`),Zg(),Tk(125,`.`),Zg(),Jc(126,`p`)(127,`strong`),Tk(128,`i18n com `),Jc(129,`em`),Tk(130,`Lazy loading`),Zg()()(),Jc(131,`p`),Tk(132,`Para aplicações que utilizem a abordagem de módulos com carregamento `),Jc(133,`em`),Tk(134,`lazy loading`),Zg(),Tk(135,`, caso seja
definida outra configura\xE7\xE3o do `),Jc(136,`code`),Tk(137,`PoI18nModule`),Zg(),Tk(138,`, deve-se atentar os seguintes detalhes:`),Zg(),Jc(139,`ul`)(140,`li`),Tk(141,`Não defina outra `),Jc(142,`em`),Tk(143,`default language`),Zg(),Tk(144,` para este m\xF3dulo. Caso for definida, ser\xE1 sobreposta para
toda a aplica\xE7\xE3o;`),Zg(),Jc(145,`li`),Tk(146,`Caso precise de módulos carregados via `),Jc(147,`em`),Tk(148,`lazy loading`),Zg(),Tk(149,` com linguagens diferentes, utilize o
m\xE9todo `),Jc(150,`a`,9)(151,`code`),Tk(152,`setLanguage()`),Zg()(),Tk(153,` disponibilizado pelo `),Jc(154,`code`),Tk(155,`PoI18nService`),Zg(),Tk(156,`
para definir a linguagem da aplica\xE7\xE3o e dos m\xF3dulos com as linguagens diferentes.`),Zg()()(),Jc(157,`h3`,10),Tk(158,`Services`),Zg(),Jc(159,`h4`,11)(160,`code`,12),Tk(161,`PoI18nService`),Zg()(),Jc(162,`div`,2)(163,`p`),Tk(164,`O serviço `),Jc(165,`code`),Tk(166,`PoI18nService`),Zg(),Tk(167,` possibilita utilizar múltiplos idiomas e contextos na aplicação.`),Zg(),Jc(168,`blockquote`)(169,`p`),Tk(170,`Antes da utiliza\xE7\xE3o do servi\xE7o, \xE9 necess\xE1rio realizar a
`),Jc(171,`a`,13),Tk(172,`importação e configuração do módulo `),Jc(173,`code`),Tk(174,`PoI18nModule`),Zg()(),Tk(175,`.`),Zg()(),Jc(176,`p`)(177,`strong`),Tk(178,`Utilização do serviço `),Jc(179,`code`),Tk(180,`PoI18nService`),Zg(),Tk(181,`:`),Zg()(),Jc(182,`p`),Tk(183,`Para utilizar o servi\xE7o basta import\xE1-lo nos componentes que necessitarem de literais e fazer a inje\xE7\xE3o de
depend\xEAncia no construtor:`),Zg(),Jc(184,`pre`)(185,`code`),Tk(186,`import { PoI18nService } from '@po-ui/ng-components';
...
constructor(private poI18nService: PoI18nService) { }
...
`),Zg()(),Jc(187,`p`),Tk(188,`Por fim realizar a busca pelas literais, inscrevendo-se no `),Jc(189,`a`,14),Tk(190,`Observable`),Zg(),Tk(191,` pelo
m\xE9todo `),Jc(192,`code`),Tk(193,`getLiterals()`),Zg(),Tk(194,`.`),Zg(),Jc(195,`blockquote`)(196,`p`),Tk(197,`O método `),Jc(198,`code`),Tk(199,`getLiterals()`),Zg(),Tk(200,` pode receber um objeto do tipo da interface `),Jc(201,`code`),Tk(202,`PoI18nLiterals`),Zg(),Tk(203,` como par\xE2metro,
por\xE9m, nenhuma das propriedades s\xE3o obrigat\xF3rias. Caso nenhum par\xE2metro seja passado, ser\xE3o buscadas
todas as literais do contexto definido com padr\xE3o, no idioma definido como padr\xE3o.`),Zg()(),Jc(204,`ul`)(205,`li`)(206,`h2`),Tk(207,`Alterações a partir da versão 19`),Zg()()(),Jc(208,`p`),Tk(209,`A partir da vers\xE3o 19, para evitar conflitos com bibliotecas de terceiros que tamb\xE9m utilizam i18n,
\xE9 necess\xE1rio passar explicitamente o contexto ao chamar `),Jc(210,`code`),Tk(211,`getLiterals`),Zg(),Tk(212,`, garantindo a correta exibi\xE7\xE3o das literais.
Caso `),Jc(213,`code`),Tk(214,`getLiterals`),Zg(),Tk(215,` seja chamado sem parâmetros, o retorno pode vir das configurações da biblioteca de terceiros.`),Zg(),Jc(216,`p`)(217,`strong`),Tk(218,`Exemplo de chamada com contexto explícito:`),Zg()(),Jc(219,`pre`)(220,`code`,15),Tk(221,`poI18nService.getLiterals({ context: 'general' }).subscribe(literals => console.log(literals));
`),Zg()(),Jc(222,`p`)(223,`strong`),Tk(224,`Cenário de Contextos Iguais:`),Zg(),Tk(225,`
Caso tanto a aplica\xE7\xE3o quanto uma biblioteca de terceiros utilizem o mesmo nome de contexto,
o PO UI far\xE1 um merge das literais, priorizando os valores definidos na aplica\xE7\xE3o cliente.`),Zg(),Jc(226,`p`)(227,`strong`),Tk(228,`Recomendações:`),Zg()(),Jc(229,`ul`)(230,`li`),Tk(231,`Sempre informar o contexto ao chamar `),Jc(232,`code`),Tk(233,`getLiterals`),Zg(),Tk(234,` para evitar conflitos de literais.`),Zg(),Jc(235,`li`),Tk(236,`Caso a aplicação utilize `),Jc(237,`code`),Tk(238,`lazy loading`),Zg(),Tk(239,`, utilizar `),Jc(240,`code`),Tk(241,`setLanguage()`),Zg(),Tk(242,` para garantir a correta configuração de idioma.`),Zg()(),Jc(243,`p`),Tk(244,`Exemplos de requisição:`),Zg(),Jc(245,`pre`)(246,`code`),Tk(247,`literals = {};
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
`),Zg()(),Jc(248,`p`),Tk(249,`Para apresentar as literais capturadas acima no HTML do componente, deve-se utilizar o
seguinte c\xF3digo:`),Zg(),Jc(250,`pre`),U_(),Tk(251,`{{ literals?.add }}
{{ literals?.remove }}
`),B_(),Zg(),Jc(252,`p`),Tk(253,`Caso as literais contenham variáveis que precisem ser substituídas, pode-se utilizar o `),Jc(254,`em`),Tk(255,`pipe`),Zg(),Jc(256,`code`),Tk(257,`poI18n`),Zg(),Tk(258,`.
\xC9 poss\xEDvel informar propriedades do componente como `),Jc(259,`code`),Tk(260,`name`),Zg(),Tk(261,` e `),Jc(262,`code`),Tk(263,`nickname`),Zg(),Tk(264,` ou
informar o valor diretamente com "" ou n\xFAmero, conforme o exemplo abaixo:`),Zg(),Jc(265,`pre`),U_(),Tk(266,`{{ literals?.people | poI18n:[120] }}
{{ literals?.greeting | poI18n:[name, nickname] }}
{{ literals?.greeting | poI18n:["Brad", "Green"] }}
`),B_(),Zg(),Jc(267,`blockquote`)(268,`p`),Tk(269,`É importante o uso do operador `),Jc(270,`code`),Tk(271,`?`),Zg(),Tk(272,` (Elvis) para evitar erros enquanto as literais não forem carregadas.`),Zg()(),Jc(273,`h3`),Tk(274,`Teste unitário`),Zg(),Jc(275,`p`),Tk(276,`Abaixo segue um exemplo de `),Jc(277,`em`),Tk(278,`setup`),Zg(),Tk(279,` inicial de teste unitário do `),Jc(280,`em`),Tk(281,`AppComponent`),Zg(),Tk(282,` que utiliza o `),Jc(283,`code`),Tk(284,`PoI18nService`),Zg(),Tk(285,`:`),Zg(),Jc(286,`blockquote`)(287,`p`),Tk(288,`Atenção: não declarar o `),Jc(289,`code`),Tk(290,`PoI18nService`),Zg(),Tk(291,` no providers do TestBed pois a biblioteca realiza a inje\xE7\xE3o de depend\xEAncia de forma din\xE2mica.
Se o servi\xE7o for declarado o teste n\xE3o far\xE1 a inje\xE7\xE3o e o teste apresentar\xE1 erros.`),Zg()(),Jc(292,`pre`)(293,`code`),Tk(294,`import { async, TestBed } from '@angular/core/testing';
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
`),Zg()()(),Jc(295,`h3`,16),Tk(296,`Métodos`),Zg(),Jc(297,`table`,17)(298,`tr`,18)(299,`th`,19)(300,`div`,20)(301,`h4`)(302,`span`,21),Tk(303,` getLanguage `),Zg()()()()(),Jc(304,`tr`,22)(305,`td`,22)(306,`p`),_u(307,`a`,23),Tk(308,`
M\xE9todo que retorna o idioma padr\xE3o ativo.`),Zg(),Jc(309,`p`),Tk(310,`A busca deste idioma pelo método será feita na seguinte ordem:`),Zg(),Jc(311,`p`),Tk(312,` 1 - o idioma que foi armazenado no `),Jc(313,`em`),Tk(314,`localStorage`),Zg(),Tk(315,`, através do método `),Jc(316,`a`,9)(317,`code`),Tk(318,`setLanguage()`),Zg()(),Tk(319,`.`),Zg(),Jc(320,`p`),Tk(321,` 2 - o valor inserido no módulo do i18n através do parâmetro `),Jc(322,`code`),Tk(323,`config`),Zg(),Tk(324,`, sendo o idioma inserido na propriedade
`),Jc(325,`code`),Tk(326,`language`),Zg(),Tk(327,` da interface `),Jc(328,`a`,24)(329,`code`),Tk(330,`PoI18nConfigDefault`),Zg()(),Tk(331,`.`),Zg(),Jc(332,`p`),Tk(333,` 3 - o idioma do navegador utilizado.`),Zg(),Jc(334,`blockquote`)(335,`p`),Tk(336,`Caso o idioma do navegador não seja suportado pelo PO (`),Jc(337,`code`),Tk(338,`pt`),Zg(),Tk(339,`, `),Jc(340,`code`),Tk(341,`en`),Zg(),Tk(342,`, `),Jc(343,`code`),Tk(344,`es`),Zg(),Tk(345,` ou `),Jc(346,`code`),Tk(347,`ru`),Zg(),Tk(348,`), será retornado valor `),Jc(349,`code`),Tk(350,`pt`),Zg(),Tk(351,`.`),Zg()()()()(),Jc(352,`h5`)(353,`b`),Tk(354,`Retorno`),Zg()(),Jc(355,`table`,25)(356,`tr`,26)(357,`th`,27),Tk(358,`Tipo`),Zg(),Jc(359,`th`,27),Tk(360,`Descrição`),Zg()(),Jc(361,`tr`,18)(362,`td`,28)(363,`code`,29),Tk(364,`string`),Zg()(),Jc(365,`td`,22)(366,`p`),Tk(367,`sigla do idioma padrão.`),Zg()()()(),_u(368,`br`),Jc(369,`table`,17)(370,`tr`,18)(371,`th`,19)(372,`div`,20)(373,`h4`)(374,`span`,21),Tk(375,` getShortLanguage `),Zg()()()()(),Jc(376,`tr`,22)(377,`td`,22)(378,`p`),Tk(379,`M\xE9todo que retorna o idioma padr\xE3o ativo, com somente a abrevia\xE7\xE3o do idioma (duas primeiras letras).
Por exemplo: "pt" ou "es".`),Zg(),Jc(380,`p`),Tk(381,`A busca deste idioma é baseada no método `),Jc(382,`a`,30)(383,`strong`),Tk(384,`getLanguage()`),Zg()(),Tk(385,`.`),Zg()()()(),Jc(386,`h5`)(387,`b`),Tk(388,`Retorno`),Zg()(),Jc(389,`table`,25)(390,`tr`,26)(391,`th`,27),Tk(392,`Tipo`),Zg(),Jc(393,`th`,27),Tk(394,`Descrição`),Zg()(),Jc(395,`tr`,18)(396,`td`,28)(397,`code`,29),Tk(398,`string`),Zg()(),Jc(399,`td`,22)(400,`p`),Tk(401,`sigla do idioma padrão.`),Zg()()()(),_u(402,`br`),Jc(403,`table`,17)(404,`tr`,18)(405,`th`,19)(406,`div`,20)(407,`h4`)(408,`span`,21),Tk(409,` setLanguage `),Zg()()()()(),Jc(410,`tr`,22)(411,`td`,22)(412,`p`),_u(413,`a`,31),Tk(414,`
M\xE9todo para alterar o idioma padr\xE3o do m\xF3dulo do i18n.`),Zg(),Jc(415,`p`),Tk(416,`Ao utilizar este m\xE9todo, o idioma ficar\xE1 gravado no armazenamento local do navegador, que ser\xE1 utilizado pelo
servi\xE7o do `),Jc(417,`code`),Tk(418,`i18n`),Zg(),Tk(419,` para buscar as literais no idioma padrão.`),Zg()()()(),Jc(420,`h5`)(421,`b`),Tk(422,`Parâmetros`),Zg()(),Jc(423,`table`,25)(424,`tr`,26)(425,`th`,27),Tk(426,`Nome`),Zg(),Jc(427,`th`,27),Tk(428,`Tipo`),Zg(),Jc(429,`th`,27),Tk(430,`Descrição`),Zg()(),Jc(431,`tr`,18)(432,`td`,32),Tk(433,` language`),Zg(),Jc(434,`td`,28)(435,`code`,29),Tk(436,` string `),Zg()(),Jc(437,`td`,22)(438,`p`),Tk(439,`Sigla do idioma.`),Zg(),Jc(440,`p`),Tk(441,`Esta sigla deve ser composta por duas letras representando o idioma,
podendo ser adicionado outras duas letras representando o pa\xEDs, por exemplo: `),Jc(442,`code`),Tk(443,`pt`),Zg(),Tk(444,`, `),Jc(445,`code`),Tk(446,`pt-BR`),Zg(),Tk(447,`, `),Jc(448,`code`),Tk(449,`pt-br`),Zg(),Tk(450,`, `),Jc(451,`code`),Tk(452,`en`),Zg(),Tk(453,` ou `),Jc(454,`code`),Tk(455,`en-US`),Zg(),Tk(456,`.`),Zg(),Jc(457,`blockquote`)(458,`p`),Tk(459,`Caso seja informado um valor diferente deste padrão, o mesmo será ignorado.`),Zg()()()(),Jc(460,`tr`,18)(461,`td`,32),Tk(462,` reload`),Zg(),Jc(463,`td`,28)(464,`code`,29),Tk(465,` boolean `),Zg()(),Jc(466,`td`,22)(467,`p`),Tk(468,`Indica se a página atual poderá ser recarregada após a alteração do idioma.`),Zg(),Jc(469,`p`),Tk(470,`Este recurso pode ser útil para os usuários que utilizam o método `),Jc(471,`code`),Tk(472,`getLiterals()`),Zg(),Tk(473,` do servi\xE7o do i18n para poder
buscar novamente as literais no novo idioma configurado.`),Zg()()()(),_u(474,`br`),Jc(475,`h3`),Tk(476,`Interfaces`),Zg(),Jc(477,`h4`,33)(478,`code`,12),Tk(479,`PoI18nConfigContext`),Zg()(),Jc(480,`div`,2)(481,`p`),_u(482,`a`,34),Zg(),Jc(483,`p`),Tk(484,`Interface para a configuração dos contextos do módulo `),Jc(485,`code`),Tk(486,`PoI18nModule`),Zg(),Tk(487,`.`),Zg()(),Jc(488,`h4`,33)(489,`code`,12),Tk(490,`PoI18nConfigDefault`),Zg()(),Jc(491,`div`,2)(492,`p`),_u(493,`a`,35),Zg(),Jc(494,`p`),Tk(495,`Interface para a configuração padrão do módulo PoI18nModule.`),Zg()(),Jc(496,`h4`,16),Tk(497,`Propriedades`),Zg(),Jc(498,`table`,25)(499,`tr`,26)(500,`th`,27),Tk(501,`Nome`),Zg(),Jc(502,`th`,27),Tk(503,`Tipo`),Zg(),Jc(504,`th`,27),Tk(505,`Descrição`),Zg()(),Jc(506,`tr`,18)(507,`td`,32)(508,`div`,20)(509,`span`,21),Tk(510,` cache`),_u(511,`br`),Zg()()(),Jc(512,`td`,28)(513,`code`,36),Tk(514,`boolean`),Zg()(),Jc(515,`td`,22)(516,`em`)(517,`strong`),Tk(518,`(opcional)`),Zg()(),Jc(519,`p`),Tk(520,`Define se as literais buscadas no servi\xE7o dever\xE3o ser armazenadas no cache do
navegador, lembrando que cada navegador possui sua pr\xF3pria limita\xE7\xE3o de cache.`),Zg(),Jc(521,`p`),Tk(522,`Para contextos com grande quantidade de literais, recomenda-se o uso de constantes ao inv\xE9s de servi\xE7os, desta forma
n\xE3o ser\xE1 usado o cache do navegador.`),Zg(),Jc(523,`p`),Tk(524,`Por padrão não utiliza.`),Zg()()(),Jc(525,`tr`,18)(526,`td`,32)(527,`div`,20)(528,`span`,21),Tk(529,` context`),_u(530,`br`),Zg()()(),Jc(531,`td`,28)(532,`code`,37),Tk(533,`string`),Zg()(),Jc(534,`td`,22)(535,`em`)(536,`strong`),Tk(537,`(opcional)`),Zg()(),Jc(538,`p`),Tk(539,`Define o contexto que será buscado por padrão pelo serviço.`),Zg(),Jc(540,`blockquote`)(541,`p`),Tk(542,`Caso não seja especificado será usado o primeiro contexto da lista de contextos.`),Zg()()()(),Jc(543,`tr`,18)(544,`td`,32)(545,`div`,20)(546,`span`,21),Tk(547,` language`),_u(548,`br`),Zg()()(),Jc(549,`td`,28)(550,`code`,37),Tk(551,`string`),Zg()(),Jc(552,`td`,22)(553,`em`)(554,`strong`),Tk(555,`(opcional)`),Zg()(),Jc(556,`p`),Tk(557,`Idioma que será buscado por padrão pelo serviço.`),Zg(),Jc(558,`p`),Tk(559,`Esta defini\xE7\xE3o somente ser\xE1 utilizada se n\xE3o tiver sido definido o idioma atrav\xE9s do m\xE9todo
`),Jc(560,`a`,9)(561,`code`),Tk(562,`setLanguage()`),Zg()(),Tk(563,`. Caso nenhum dos dois tenha sido configurado, ser\xE1 utilizado
o idioma do navegador.`),Zg()()()(),Jc(564,`h4`,33)(565,`code`,12),Tk(566,`PoI18nConfig`),Zg()(),Jc(567,`div`,2)(568,`p`),_u(569,`a`,38),Zg(),Jc(570,`p`),Tk(571,`Interface para a configuração do módulo `),Jc(572,`code`),Tk(573,`PoI18nModule`),Zg(),Tk(574,`.`),Zg()(),Jc(575,`h4`,16),Tk(576,`Propriedades`),Zg(),Jc(577,`table`,25)(578,`tr`,26)(579,`th`,27),Tk(580,`Nome`),Zg(),Jc(581,`th`,27),Tk(582,`Tipo`),Zg(),Jc(583,`th`,27),Tk(584,`Descrição`),Zg()(),Jc(585,`tr`,18)(586,`td`,32)(587,`div`,20)(588,`span`,21),Tk(589,` contexts`),_u(590,`br`),Zg()()(),Jc(591,`td`,28)(592,`code`,39),Tk(593,`PoI18nConfigContext`),Zg()(),Jc(594,`td`,22)(595,`p`),Tk(596,`Deve ser atribu\xEDdo a esta propriedade um objeto que contenha os contextos com os
idiomas suportados e suas respectivas tradu\xE7\xF5es literais,
como tamb\xE9m informar a propriedade `),Jc(597,`code`),Tk(598,`url`),Zg(),Tk(599,` onde pode ser informado o serviço que retorne as literais traduzidas.`),Zg(),Jc(600,`p`),Tk(601,`Portanto podemos utilizar constantes, onde devemos informar o nome do contexto recebendo um objeto com os
idiomas suportados e o arquivo de literais, por exemplo:`),Zg(),Jc(602,`pre`)(603,`code`),Tk(604,` import { generalEn } from './i18n/general-en';
 import { generalPt } from './i18n/general-pt';
...
 general: {
   pt: generalPt,
   en: generalEn
 }
...
`),Zg()(),Jc(605,`p`),Tk(606,`E como informado, podemos utilizar a propriedade `),Jc(607,`code`),Tk(608,`url`),Zg(),Tk(609,` que deve receber a URL do servi\xE7o que
retorne as literais traduzidas, por exemplo:`),Zg(),Jc(610,`pre`)(611,`code`),Tk(612,`hcm: {
  url: 'http://localhost:3000/api/translations/hcm/'
}
`),Zg()(),Jc(613,`p`),Tk(614,`Ao optar por utilizar um servi\xE7o, dever\xE1 ser definida a URL espec\xEDfica do contexto,
como nos exemplos abaixo:`),Zg(),Jc(615,`pre`)(616,`code`),Tk(617,`http://server:port/api/translations/crm
http://server:port/api/translations/general
`),Zg()(),Jc(618,`p`),Tk(619,`Os idiomas e literais serão automaticamente buscados com parâmetros na própria URL:`),Zg(),Jc(620,`ul`)(621,`li`)(622,`code`),Tk(623,`language`),Zg(),Tk(624,`: o idioma ser\xE1 sempre passado por par\xE2metro, sendo recomendado a utiliza\xE7\xE3o do padr\xE3o suportado
pelos navegadores (`),Jc(625,`code`),Tk(626,`pt-br`),Zg(),Tk(627,`, `),Jc(628,`code`),Tk(629,`en-us`),Zg(),Tk(630,`);`),Zg(),Jc(631,`li`)(632,`code`),Tk(633,`literals`),Zg(),Tk(634,`: as literais ser\xE3o separadas por v\xEDrgula. Caso esse par\xE2metro n\xE3o seja informado, o
servi\xE7o deve retornar todas as literais do idioma.`),Zg()(),Jc(635,`p`),Tk(636,`Exemplos de requisição:`),Zg(),Jc(637,`pre`)(638,`code`),Tk(639,`http://server:port/api/translations/crm?language=pt-br
http://server:port/api/translations/crm?language=pt-br&literals=add,remove,text
`),Zg()(),Jc(640,`blockquote`)(641,`p`),Tk(642,`Sempre que o idioma solicitado não for encontrado, será buscado por `),Jc(643,`code`),Tk(644,`pt-br`),Zg(),Tk(645,`.`),Zg()(),Jc(646,`p`),Tk(647,`Existe tamb\xE9m a possibilidade de utilizar ambos, onde ser\xE1 feito a busca das literais nas constantes e depois efetua
a busca no servi\xE7o, com isso as constantes podem servir como `),Jc(648,`em`),Tk(649,`backup`),Zg(),Tk(650,` caso o serviço esteja indisponível, por exemplo:`),Zg(),Jc(651,`pre`)(652,`code`),Tk(653,` import { generalEn } from './i18n/general-en';
 import { generalPt } from './i18n/general-pt';
...
 general: {
   pt: generalPt,
   en: generalEn,
   url: 'http://localhost:3000/api/translations/hcm/'
 }
...
`),Zg()(),Jc(654,`blockquote`)(655,`p`),Tk(656,`Caso a constante contenha alguma literal que o serviço não possua será utilizado a literal da constante.`),Zg()()()(),Jc(657,`tr`,18)(658,`td`,32)(659,`div`,20)(660,`span`,21),Tk(661,` default`),_u(662,`br`),Zg()()(),Jc(663,`td`,28)(664,`code`,40),Tk(665,`PoI18nConfigDefault`),Zg()(),Jc(666,`td`,22)(667,`em`)(668,`strong`),Tk(669,`(opcional)`),Zg()(),Jc(670,`p`),Tk(671,`Configurações padrões.`),Zg()()()(),Jc(672,`h4`,33)(673,`code`,12),Tk(674,`PoI18nLiterals`),Zg()(),Jc(675,`div`,2)(676,`p`),Tk(677,`Interface para o método `),Jc(678,`code`),Tk(679,`getLiterals()`),Zg(),Tk(680,` do serviço PoI18nService.`),Zg()(),Jc(681,`h4`,16),Tk(682,`Propriedades`),Zg(),Jc(683,`table`,25)(684,`tr`,26)(685,`th`,27),Tk(686,`Nome`),Zg(),Jc(687,`th`,27),Tk(688,`Tipo`),Zg(),Jc(689,`th`,27),Tk(690,`Descrição`),Zg()(),Jc(691,`tr`,18)(692,`td`,32)(693,`div`,20)(694,`span`,21),Tk(695,` context`),_u(696,`br`),Zg()()(),Jc(697,`td`,28)(698,`code`,37),Tk(699,`string`),Zg()(),Jc(700,`td`,22)(701,`em`)(702,`strong`),Tk(703,`(opcional)`),Zg()(),Jc(704,`p`),Tk(705,`Contexto utilizado na busca das literais.`),Zg()()(),Jc(706,`tr`,18)(707,`td`,32)(708,`div`,20)(709,`span`,21),Tk(710,` language`),_u(711,`br`),Zg()()(),Jc(712,`td`,28)(713,`code`,37),Tk(714,`string`),Zg()(),Jc(715,`td`,22)(716,`em`)(717,`strong`),Tk(718,`(opcional)`),Zg()(),Jc(719,`p`),Tk(720,`Idioma a ser buscado.`),Zg()()(),Jc(721,`tr`,18)(722,`td`,32)(723,`div`,20)(724,`span`,21),Tk(725,` literals`),_u(726,`br`),Zg()()(),Jc(727,`td`,28)(728,`code`,41),Tk(729,`Array<string>`),Zg()(),Jc(730,`td`,22)(731,`em`)(732,`strong`),Tk(733,`(opcional)`),Zg()(),Jc(734,`p`),Tk(735,`Lista das literais.`),Zg()()()(),Jc(736,`h4`,33)(737,`code`,12),Tk(738,`PoLanguage`),Zg()(),Jc(739,`div`,2)(740,`p`),_u(741,`a`,42),Zg(),Jc(742,`p`),Tk(743,`Interface para descrição das linguagens disponíveis no sistema.`),Zg()(),Jc(744,`h4`,16),Tk(745,`Propriedades`),Zg(),Jc(746,`table`,25)(747,`tr`,26)(748,`th`,27),Tk(749,`Nome`),Zg(),Jc(750,`th`,27),Tk(751,`Tipo`),Zg(),Jc(752,`th`,27),Tk(753,`Descrição`),Zg()(),Jc(754,`tr`,18)(755,`td`,32)(756,`div`,20)(757,`span`,21),Tk(758,` description`),_u(759,`br`),Zg()()(),Jc(760,`td`,28)(761,`code`,37),Tk(762,`string`),Zg()(),Jc(763,`td`,22)(764,`em`)(765,`strong`),Tk(766,`(opcional)`),Zg()(),Jc(767,`p`),Tk(768,`Descrição do idioma`),Zg()()(),Jc(769,`tr`,18)(770,`td`,32)(771,`div`,20)(772,`span`,21),Tk(773,` language`),_u(774,`br`),Zg()()(),Jc(775,`td`,28)(776,`code`,37),Tk(777,`string`),Zg()(),Jc(778,`td`,22)(779,`em`)(780,`strong`),Tk(781,`(opcional)`),Zg()(),Jc(782,`p`),Tk(783,`Código do idioma `),Jc(784,`a`,43),Tk(785,`ISO 639-1`),Zg()(),Jc(786,`blockquote`)(787,`p`),Tk(788,`Exemplo: 'pt','en'`),Zg()()()()(),Jc(789,`h4`,33)(790,`code`,12),Tk(791,`PoNumberSeparator`),Zg()(),Jc(792,`div`,2)(793,`p`),_u(794,`a`,44),Zg(),Jc(795,`p`),Tk(796,`Interface para os separadores numéricos das linguagens disponíveis no sistema.`),Zg()(),Jc(797,`h4`,16),Tk(798,`Propriedades`),Zg(),Jc(799,`table`,25)(800,`tr`,26)(801,`th`,27),Tk(802,`Nome`),Zg(),Jc(803,`th`,27),Tk(804,`Tipo`),Zg(),Jc(805,`th`,27),Tk(806,`Descrição`),Zg()(),Jc(807,`tr`,18)(808,`td`,32)(809,`div`,20)(810,`span`,21),Tk(811,` language`),_u(812,`br`),Zg()()(),Jc(813,`td`,28)(814,`code`,37),Tk(815,`string`),Zg()(),Jc(816,`td`,22)(817,`em`)(818,`strong`),Tk(819,`(opcional)`),Zg()(),Jc(820,`p`),Tk(821,`Código do idioma `),Jc(822,`a`,43),Tk(823,`ISO 639-1`),Zg()(),Jc(824,`blockquote`)(825,`p`),Tk(826,`Exemplo: 'pt','en'`),Zg()()()(),Jc(827,`tr`,18)(828,`td`,32)(829,`div`,20)(830,`span`,21),Tk(831,` separator`),_u(832,`br`),Zg()()(),Jc(833,`td`,28)(834,`code`,37),Tk(835,`string`),Zg()(),Jc(836,`td`,22)(837,`em`)(838,`strong`),Tk(839,`(opcional)`),Zg()(),Jc(840,`p`),Tk(841,`Separador numérico`),Zg()()()(),Jc(842,`h4`,33)(843,`code`,12),Tk(844,`PoDateSeparator`),Zg()(),Jc(845,`div`,2)(846,`p`),_u(847,`a`,45),Zg(),Jc(848,`p`),Tk(849,`Interface para o separador de data das linguagens disponíveis no sistema.`),Zg()(),Jc(850,`h4`,16),Tk(851,`Propriedades`),Zg(),Jc(852,`table`,25)(853,`tr`,26)(854,`th`,27),Tk(855,`Nome`),Zg(),Jc(856,`th`,27),Tk(857,`Tipo`),Zg(),Jc(858,`th`,27),Tk(859,`Descrição`),Zg()(),Jc(860,`tr`,18)(861,`td`,32)(862,`div`,20)(863,`span`,21),Tk(864,` locale`),_u(865,`br`),Zg()()(),Jc(866,`td`,28)(867,`code`,37),Tk(868,`string`),Zg()(),Jc(869,`td`,22)(870,`em`)(871,`strong`),Tk(872,`(opcional)`),Zg()(),Jc(873,`p`),Tk(874,`Código do locale `),Jc(875,`a`,43),Tk(876,`ISO 639-1`),Zg()(),Jc(877,`blockquote`)(878,`p`),Tk(879,`Exemplo: 'pt','en'`),Zg()()()(),Jc(880,`tr`,18)(881,`td`,32)(882,`div`,20)(883,`span`,21),Tk(884,` separator`),_u(885,`br`),Zg()()(),Jc(886,`td`,28)(887,`code`,37),Tk(888,`string`),Zg()(),Jc(889,`td`,22)(890,`em`)(891,`strong`),Tk(892,`(opcional)`),Zg()(),Jc(893,`p`),Tk(894,`Separador de data`),Zg(),Jc(895,`blockquote`)(896,`p`),Tk(897,`Exemplo: '/','.','-'`),Zg()()()()()())},encapsulation:2,changeDetection:1})}return o})();function j(o,_){if(o&1){let r=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){H_(r);let l=nk();return $_(l.changeTab(`web`))}),Zg()}if(o&2){let r=nk();Ab(`p-active`,r.activeTab===`web`)}}var R=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`I18n`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,l){a&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,j,1,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return l.changeTab(`doc`)}),_u(4,`sample-po-i18n-doc`),Zg()()()),a&2&&(Ab(`p-actions`,l.actions),Ig(2),BO(l.hidePoWebSample?-1:2),Ig(),Ab(`p-active`,l.activeTab===`doc`))},dependencies:[Mze,tre,are,L],encapsulation:2,changeDetection:1})}return o})()}];var A=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[WV.forChild(R),WV]})}return o})();var Y=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[M,A]})}return o})();export{Y as DocPoI18nModule};