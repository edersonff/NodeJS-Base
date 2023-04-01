import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data: {
    [key: string]: any;
  };

  @Column()
  imported_t: number;

  @Column({
    default: "draft",
  })
  status: "draft" | "trash" | "published";
}
