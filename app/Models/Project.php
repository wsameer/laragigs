<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User;

class Project extends Model
{
  use HasFactory;

  protected $fillable = ['image_path', 'name', 'status', 'due_date', 'updated_by', 'created_by', 'description'];

  public function tasks()
  {
    return $this->hasMany(Task::class);
  }

  public function createdBy()
  {
    return $this->belongsTo(User::class, 'created_by');
  }

  public function updatedBy()
  {
    return $this->belongsTo(User::class, 'updated_by');
  }
}
