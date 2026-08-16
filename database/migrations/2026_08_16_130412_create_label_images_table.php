<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('label_images', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->unsignedBigInteger("hero_section_id");
            $table->timestamps();
            
            $table->foreign("hero_section_id")->references("id")->on("hero_sections");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('label_images');
    }
};
