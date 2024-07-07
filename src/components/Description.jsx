import React from "react";
export default function Description() {
  return (
    <section className="flex gap-10 items-center justify-evenly">
      <div>
        <img className="size-36" src="./src/assets/Logo.png" />
      </div>
      <div>
        <h2 className="mb-2">Étudiant chez LiveCampus</h2>
        <p>Leblond Tristan, développeur Windev chez Plénetude Informatique - Rivesaltes - 66000</p>
      </div>
    </section>
  );
}