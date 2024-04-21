<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Project;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
  /**
   * Seed the application's database.
   */
  public function run(): void
  {
    // \App\Models\User::factory(10)->create();

    User::factory()->create([
      'name' => 'Sameer',
      "email" => 'sam@test.com',
      'email' => bcrypt('parallel900'),
      "email_verified_at" => time()
    ]);

    Project::factory()
      ->count(15)
      ->hasTasks(15)
      ->create();
  }
}
