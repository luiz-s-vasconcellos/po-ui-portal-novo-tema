import{Ar as Ig,Ei as WV,Er as H_,Fr as Jn,H as Mze,Hi as ar,Ja as vt,Li as ZO,Mn as tre,Mr as Jc,Mt as are,Ri as Zg,Vi as _u,ea as ge,er as An,fi as Rb,gi as Tk,kr as I$1,nr as BO,qi as de,va as nk,xi as VO,yi as U_}from"./chunk-BL0ij1th.js";import{n as P,t as M}from"./main-3VBI2GXJ.js";var I=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-table-cell-template-doc`]],standalone:!1,decls:66,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``]],template:function(i,l){i&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoTableModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente po-table`),Zg()(),Jc(7,`h3`,3),Tk(8,`Componente`),Zg(),Jc(9,`h4`,4)(10,`code`,5),Tk(11,`PoTableCellTemplateDirective`),Zg()(),Jc(12,`div`,2)(13,`p`),Tk(14,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),Zg(),Jc(15,`p`),Tk(16,`Em seu uso, deve-se apenas adicionar a diretiva `),Jc(17,`strong`),Tk(18,`p-table-cell-template`),Zg(),Tk(19,` à tag `),Jc(20,`code`),Tk(21,`ng-template`),Zg(),Tk(22,`.`),Zg(),Jc(23,`p`),Tk(24,`Retorno:`),Zg(),Jc(25,`ul`)(26,`li`)(27,`code`),Tk(28,`column`),Zg(),Tk(29,`: conteúdo da coluna corrente.`),Zg(),Jc(30,`li`)(31,`code`),Tk(32,`row`),Zg(),Tk(33,`: conteúdo da linha corrente`),Zg()(),Jc(34,`p`),Tk(35,`Modo de uso:`),Zg(),Jc(36,`pre`)(37,`code`),Tk(38,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <ng-template p-table-cell-template let-column="column" let-row="row">
     <div *ngIf="column.property === 'status' && row.status === 'CANCELED'">
       <h1 [style.background]="'red'">CANCELADA</h1>
       <span (click)="onClick()"><small>clique aqui</small></span>
     </div>
     <h1 *ngIf="column.property === 'status' && row.status === 'FINISHED'" [style.background]="'green'">FINALIZADA</h1>
     <h1 *ngIf="column.property === 'status' && row.status === 'OPENED'" [style.background]="'orange'">ABERTA</h1>
     <h1 *ngIf="column.property === 'status2'">Conte\xFAdo do status 2</h1>
     <h1 *ngIf="column.property === 'status3'">Conte\xFAdo do status 3</h1>
   </ng-template>
...
`),Zg()(),Jc(39,`blockquote`)(40,`p`),Tk(41,`No exemplo acima, o usuário tem como retorno `),Jc(42,`code`),Tk(43,`row`),Zg(),Tk(44,` e a `),Jc(45,`code`),Tk(46,`column`),Zg(),Tk(47,` corrente, neste caso ele tem total liberdade para manipular os objetos.`),Zg()(),Jc(48,`p`),Tk(49,`Abaixo, a declaração dos dados de entrada do PO-TABLE para o uso da directiva.`),Zg(),Jc(50,`pre`)(51,`code`),Tk(52,`...
export class AppComponent {

   items = [{
     code: 1200,
     product: 'Rice',
     status: 'CANCELED',
     status2: '',
     status3: ''
     },{
     code: 1355,
     product: 'Bean',
     status: 'FINISHED',
     status2: '',
     status3: ''
     }];

   columns = [
      { property: 'code', label: 'ID' },
      { property: 'product', label: 'PRODUTO' },
      { property: 'status', label: 'STATUS', type: 'cellTemplate' },
      { property: 'status2', label: 'STATUS 2', type: 'cellTemplate' },
      { property: 'status3', label: 'STATUS 3', type: 'cellTemplate' }
   ];
}
...
`),Zg()(),Jc(53,`blockquote`)(54,`p`),Tk(55,`Observação: Sempre adicionar o `),Jc(56,`strong`),Tk(57,`type`),Zg(),Tk(58,` da coluna que deseja manipular com a directiva como `),Jc(59,`code`),Tk(60,`cellTemplate`),Zg()()()(),Jc(61,`div`,6)(62,`h4`,7),Tk(63,`Seletor`),Zg(),Jc(64,`pre`,8),Tk(65,`<[p-table-cell-template] >
</[p-table-cell-template]>
`),Zg()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return n})();function N(n,R){if(n&1){let a=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(a);let l=nk();return H_(l.changeTab(`web`))}),Zg()}if(n&2){let a=nk();Rb(`p-active`,a.activeTab===`web`)}}var q=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,i){this.route=a,this.router=i}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let i=a.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:i||`web`})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||n)(I$1(ar),I$1(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Table Cell Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(i,l){i&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,N,1,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return l.changeTab(`doc`)}),_u(4,`sample-po-table-cell-template-doc`),Zg()()()),i&2&&(Rb(`p-actions`,l.actions),Ig(2),BO(l.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,l.activeTab===`doc`))},dependencies:[Mze,tre,are,I],encapsulation:2,changeDetection:1})}return n})()}];var k=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[WV.forChild(q),WV]})}return n})();var X=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[M,k]})}return n})();export{X as DocPoTableCellTemplateModule};