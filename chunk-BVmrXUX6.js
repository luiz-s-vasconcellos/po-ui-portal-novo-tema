import{Ar as Ig,Ei as WV,Er as H_,Fr as Jn,Hi as ar,Ja as vt,Li as ZO,Mr as Jc,Ri as Zg,Vi as _u,Xt as ere,ea as ge,er as An,fi as Rb,gi as Tk,kr as I$1,mt as Tze,nr as BO,qi as de,rt as Qae,va as nk,xi as VO,yi as U_}from"./chunk-BQaN6dko.js";import{n as P,t as M}from"./main-SRPMFWZC.js";var k=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-table-column-template-doc`]],standalone:!1,decls:94,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`language-html`],[1,`language-typescript`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`]],template:function(a,l){a&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoTableModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente po-table`),Zg()(),Jc(7,`h3`,3),Tk(8,`Componente`),Zg(),Jc(9,`h4`,4)(10,`code`,5),Tk(11,`PoTableColumnTemplateDirective`),Zg()(),Jc(12,`div`,2)(13,`p`),Tk(14,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),Zg(),Jc(15,`p`),Tk(16,`Em seu uso, deve-se utilizar como par\xE2metro de entrada o input [p-property], o qual \xE9 respons\xE1vel por informar ao PO-TABLE qual a coluna que
ser\xE1 adicionado o conte\xFAdo do template.`),Zg(),Jc(17,`p`),Tk(18,`Retorno:`),Zg(),Jc(19,`ul`)(20,`li`),Tk(21,`value: valor referente ao conteúdo da linha corrente.`),Zg()(),Jc(22,`p`),Tk(23,`Modo de uso:`),Zg(),Jc(24,`pre`)(25,`code`,6),Tk(26,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
  <ng-template p-table-column-template [p-property]="targetProperty" let-value>
    <span [innerText]="value"></span>
  </ng-template>
</po-table>
...
`),Zg()(),Jc(27,`blockquote`)(28,`p`),Tk(29,`No exemplo acima, todas as células correspondentes a coluna `),Jc(30,`code`),Tk(31,`status`),Zg(),Tk(32,` terão o conteúdo alterado para `),Jc(33,`code`),Tk(34,"<h1>${value}</h1>"),Zg(),Tk(35,`,
sendo que `),Jc(36,`code`),Tk(37,`value`),Zg(),Tk(38,` refere-se ao conteúdo da linha.`),Zg()(),Jc(39,`pre`)(40,`code`,6),Tk(41,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
  <ng-template  p-table-column-template [p-property]="targetProperty" let-value>
    <span *ngIf="value === 'FINISHED'" [style.background]="'silver'" [innerText]="value"></span>
    <span *ngIf="value === 'OPENED'" [style.background]="'gray'" [innerText]="value"></span>
  </ng-template>
</po-table>
...
`),Zg()(),Jc(42,`blockquote`)(43,`p`),Tk(44,`Agora, neste exemplo, com o valor da linha corrente retornado (value), \xE9 feito uma valida\xE7\xE3o para
definir o template exato para adicionar a uma espec\xEDfica c\xE9lula.`),Zg()(),Jc(45,`p`),Tk(46,`Abaixo, a declaração dos dados de entrada do PO-TABLE para o uso da directiva.`),Zg(),Jc(47,`pre`)(48,`code`,7),Tk(49,`...
export class AppComponent {

   targetProperty= 'status';

   items = [{
     code: 1200,
     product: 'Rice',
     status: 'CANCELED'
     },{
     code: 1355,
     product: 'Bean',
     status: 'FINISHED'
   }];

   columns = [
     { property: 'code', label: 'ID' },
     { property: 'product', label: 'PRODUTO' },
     { property: 'status', label: 'STATUS', type: 'columnTemplate' }
   ];
}
...
`),Zg()(),Jc(50,`blockquote`)(51,`p`),Tk(52,`Observação: Sempre adicionar o `),Jc(53,`strong`),Tk(54,`type`),Zg(),Tk(55,` da coluna que deseja manipular com a directiva como `),Jc(56,`code`),Tk(57,`columnTemplate`),Zg()()()(),Jc(58,`div`,8)(59,`h4`,9),Tk(60,`Seletor`),Zg(),Jc(61,`pre`,10),Tk(62,`<[p-table-column-template]
    p-property="string" >
</[p-table-column-template]>
`),Zg()(),Jc(63,`h4`,11),Tk(64,`Propriedades`),Zg(),Jc(65,`table`,12)(66,`tr`,13)(67,`th`,14),Tk(68,`Nome`),Zg(),Jc(69,`th`,14),Tk(70,`Tipo`),Zg(),Jc(71,`th`,14),Tk(72,`Padrão`),Zg(),Jc(73,`th`,14),Tk(74,`Descrição`),Zg()(),Jc(75,`tr`,15)(76,`td`,16)(77,`div`,17)(78,`span`,18),Tk(79,` p-property`),_u(80,`br`),Zg()()(),Jc(81,`td`,19)(82,`code`,20),Tk(83,`string`),Zg()(),Jc(84,`td`,21),Tk(85,`-`),Zg(),Jc(86,`td`,22)(87,`em`)(88,`strong`),Tk(89,`(opcional)`),Zg()(),Jc(90,`p`),Tk(91,`Variável responsável por armazenar a property da coluna da tabela que será adicionado o template.`),Zg(),Jc(92,`p`),Tk(93,`Caso não seja informada esta propriedade, serão apresentados normalmente os dados da coluna.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return n})();function I(n,j){if(n&1){let i=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(i);let l=nk();return H_(l.changeTab(`web`))}),Zg()}if(n&2){let i=nk();Rb(`p-active`,i.activeTab===`web`)}}var N=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(i,a){this.route=i,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(i=>{let a=i.view;this.activeTab=a||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(i){this.router.navigate([],{queryParams:{view:i},queryParamsHandling:`merge`}),this.activeTab=i}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(I$1(ar),I$1(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Table Column Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,l){a&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,I,1,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return l.changeTab(`doc`)}),_u(4,`sample-po-table-column-template-doc`),Zg()()()),a&2&&(Rb(`p-actions`,l.actions),Ig(2),BO(l.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,l.activeTab===`doc`))},dependencies:[Tze,Qae,ere,k],encapsulation:2,changeDetection:1})}return n})()}];var A=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[WV.forChild(N),WV]})}return n})();var X=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[M,A]})}return n})();export{X as DocPoTableColumnTemplateModule};