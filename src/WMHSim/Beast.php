<?php

namespace WMHSim;

class Beast extends Model {
    protected $fury    = 0;
    protected $curFury = 0;

    public function attackMore(Model $defender) {
        while($this->curFury < $this->fury) {
            $this->curFury++;
            $result = $this->doAttack($defender, reset($this->weapons));
            if ($result->isKilled() && $this->getSim()->isStopOnDeath()) {
                return;
            }
        }
    }

    protected function isBoostedHit() {
        $boostedHit = parent::isBoostedHit();
        if (!$boostedHit && $this->getSim()->isBoostAttack() && $this->curFury < $this->fury) {
            $boostedHit = true;
            $this->curFury++;
        }

        return $boostedHit;
    }

    protected function isBoostedDmg(AttackResult $result) {
        $boostedDmg = parent::isBoostedDmg($result);
        if (!$boostedDmg && $this->getSim()->isBoostDamage() && $this->curFury < $this->fury) {
            $boostedDmg = true;
            $this->curFury++;
        }

        return $boostedDmg;
    }
}
