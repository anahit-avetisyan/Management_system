<?php

use Illuminate\Database\Seeder;

class StatusesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'name'  =>  'created',


            ],
            [
                'name'  =>  'assigned',

            ],
            [
                'name'  =>  'in-progress',

            ],
            [
                'name'  =>  'done',

            ],

        ];

        DB::table('statuses')->insert($data);
    }
}
