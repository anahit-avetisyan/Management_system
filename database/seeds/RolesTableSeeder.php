<?php

use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
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
                'name'  =>  'Manager',
            ],
            [
                'name'  =>  'Developer',
            ],


        ];

        DB::table('roles')->insert($data);
    }
}
