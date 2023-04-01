import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: number;

  @Column()
  status: string;

  @Column()
  imported_t: string;

  @Column()
  url: string;

  @Column()
  creator: string;

  @Column()
  created_t: number;

  @Column()
  last_modified_t: number;

  @Column()
  product_name: string;

  @Column()
  quantity: string;

  @Column()
  brands: string;

  @Column()
  categories: string;

  @Column()
  labels: string;

  @Column()
  cities: string;

  @Column()
  purchase_places: string;

  @Column()
  stores: string;

  @Column()
  ingredients_text: string;

  @Column()
  traces: string;

  @Column()
  serving_size: string;

  @Column()
  serving_quantity: number;

  @Column()
  nutriscore_score: number;

  @Column()
  nutriscore_grade: string;

  @Column()
  main_category: string;

  @Column()
  image_url: string;
}
