<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
  use HasFactory;

  public function project()
  {
    return $this->belongsTo(Project::class);
  }

  public function createdBy()
  {
    return $this->belongsTo(User::class, 'created_by');
  }

  public function assignedUser()
  {
    return $this->belongsTo(User::class, 'assigned_user');
  }

  public function updatedBy()
  {
    return $this->belongsTo(User::class, 'updated_by');
  }
}
