<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    const LOCATION_NEW_YORK = 0;
    const LOCATION_BARCELONA = 1;
    const LOCATION_PARIS = 2;
    const LOCATION_SEOUL = 3;
    const LOCATION_MAP = [
        self::LOCATION_NEW_WORK => 'New York',
        self::LOCATION_BARCELONA => 'Barcelona',
        self::LOCATION_PARIS => 'Paris',
        self::LOCATION_SEOUL => 'Seoul',
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'city', 'review', 'rating'
    ];

}
