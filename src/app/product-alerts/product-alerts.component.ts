import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core"; // Para receber propriedades do componente pai
import { Output, EventEmitter } from "@angular/core"; // Para enviar os dados do componente filho para o componente pai

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"]
})
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
