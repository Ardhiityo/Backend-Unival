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
        Schema::create('mission_sections', function (Blueprint $table) {
            $table->id();
            $table->string("title");
            $table->string("description");
            $table->unsignedBigInteger("vision_section_id");
            $table->timestamps();
            
            $table->foreign("vision_section_id")->references("id")->on("vision_sections");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mission_sections');
    }
};
